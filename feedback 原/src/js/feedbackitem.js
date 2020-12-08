!function(window,document,$,undefined) {
    var baseURL = Base64.decode(sessionStorage.getItem('baseURLKey'));
    var param = {
            "page_num": 1,
            "num_per_page": 10,
            "totalItem": 0
        };

    var init = function() {
        initEvent();
        initTable();
        initDatePicker();
    };

    var initDatePicker = function() {
        $("#datetimeStart").datetimepicker({
            format: 'yyyy-mm-dd',
            minView: 2,
            language: 'zh-CN',
            autoclose:true,
            bootcssVer: 3,
        }).on("changeDate",function(ev){  //值改变事件
            if(ev.date){
              $("#datetimeEnd").datetimepicker('setStartDate', new Date(ev.date.valueOf()));
            }else{
              $("#datetimeEnd").datetimepicker('setStartDate',null);
            }
        });
        $("#datetimeEnd").datetimepicker({
            format: 'yyyy-mm-dd',
            /*format: 'yyyy-mm-dd hh:ii:ss',*/
            minView:2,
            language: 'zh-CN',
            autoclose:true,
            bootcssVer: 3,
        }).on("changeDate",function(ev){
            if(ev.date){
              $("#datetimeStart").datetimepicker('setEndDate', new Date(ev.date.valueOf()));
            }else{
              $("#datetimeStart").datetimepicker('setEndDate',new Date());
            }
        });
    };

    var initEvent = function() {
        $('#classifyItem').on('change', onNextChildBtnClick);
        $('.showitem').on('change', onQueryBtnClick);
        $('#typeAdd').on('click', onTypeAddBtnClick);
        $('#queryItem').on('click', onQueryBtnClick);
        $('#typeTable').on('click', '.eachFeedback', onEachFeedbackClick);
        $('#typeTable').on('click', '.item_del', onDeleteItemBtnClick);
        $('#typeTable').on('click', '.pc_item_del', onDeleteItemBtnClick);
        $('#deleteItem').on('click', onDeleteItemBtnClick);
        /*$('#nextchild').on('click', onNextChildBtnClick);*/
        $('#nextpage').on('click', onNextPageBtnClick);
        $('#prevpage').on('click', onPrevPageBtnClick);
        $('#back').on('click', onBackBtnClick);
        $('#goback').on('click',onBackBtnClick);
    };

    var initTable = function() {
        var params = {
            parent_id : JSON.parse(sessionStorage.getItem('parent_id'))
        }
        $.ajax({
            url: baseURL + "/api/sca/feedback/category/get_list",
            dataType: "json",
            data: params,
            type:"POST",
            beforeSend: function(request) {
                request.setRequestHeader("Sca-Sys-Token", Base64.decode(sessionStorage.getItem('token')));
            },
            success:function(res){
                if(res.meta.code == 0) {
                    getTableList(res.data.list)
                }else {
                    layer.alert(res.meta.message, {
                        skin: 'layui-layer-molv' ,
                        closeBtn: 0
                    });
                }
            },
            error:function(){
                layer.alert("请求失败!", {
                    skin: 'layui-layer-molv' ,
                    closeBtn: 0
                });
            }
        });
    };

    var getTableList = function(data) {
        var children_count = data[0].children_count;
        var optsArr = [];
        var source_from = sessionStorage.getItem('source_from');
        if(source_from == "ipos") {
            $('#back').hide();
        };
        if (children_count == 0) {
            $('#typeAdd').show();
            $('.query_time').show();
            setTimeout(onQueryBtnClick, 0);
            $('#classifyItem').on('change', onQueryBtnClick);
        }else {
            data.unshift({name: "请选择可配置选项"});
        }
        for(var i=0; i<data.length; i++) {
            optsArr.push('<option id="' + data[i].id + '" value="' + data[i].name + '">' + data[i].name + '</option>')
        }
        $('#classifyItem').html(optsArr.join(''));
        $("#classifyItem option:first").prop("selected", 'selected'); 
    };

    var onNextChildBtnClick = function() {
        var $typeset = $('#classifyItem option:selected');
        sessionStorage.setItem('parent_id', $typeset.prop("id"));
        initTable();
    };

    var onTypeAddBtnClick = function() {
        var $typeset = $('#classifyItem option:selected');
        sessionStorage.setItem('parent_id',$typeset.prop("id"))
        location.href = "submitfeedback.html?v=" + Helper.version();
    };

    var onQueryBtnClick = function() {
        var params = {
            start_dt: $("#datetimeStart").val() ? $("#datetimeStart").val() + " 00:00:00" : "",
            end_dt: $("#datetimeEnd").val() ? $("#datetimeEnd").val() + " 23:59:59" : "",
            queryItem: $('#classifyItem option:selected').val(),
            feedback_category_id: $('#classifyItem option:selected').prop("id") ,
            /*num_per_page: $('.showitem option:selected').val() != "" ? $('.showitem option:selected').val() : 10,*/
        };
        param.num_per_page = $('.showitem option:selected').val();
        $.extend(params, param);
        $.ajax({
            url: baseURL + "/api/sca/feedback/get_list",
            dataType: "json",
            data: params,
            type:"POST",
            beforeSend: function(request) {
                request.setRequestHeader("Sca-Sys-Token", Base64.decode(sessionStorage.getItem('token')));
            },
            success:function(res){
                if(res.meta.code == 0) {
                    getItemList(res.data.list);
                    renderPaging(res.data.total);
                }else {
                    layer.alert(res.meta.message, {
                        skin: 'layui-layer-molv' ,
                        closeBtn: 0
                    });
                }
            },
            error:function(){
                layer.alert("请求失败!", {
                    skin: 'layui-layer-molv' ,
                    closeBtn: 0
                });
            }
        });
    };

    var getItemList = function(feedback_list) {
        if (feedback_list.length == 0) {
            layer.alert('暂无查询结果！', {
                skin: 'layui-layer-molv' ,
                closeBtn: 0
            });
        };
        var source_from = sessionStorage.getItem("source_from");
        var username = sessionStorage.getItem("username");
        var optsArr = [];
        /*$.each(feedback_list,function(i,obj) {
            optsArr.push(
                '<li class="list_li  mb-10" id="'+ obj.id +'">',
                    '<div class="col-lg-11 col-md-12 col-sm-12 col-xs-12 item_top eachFeedback" id="">',
                        '<div class="row">',
                            '<div class="col-sm-6 col-xs-6">编号:' + obj.id + '</div>',
                            '<div class="col-sm-3 col-xs-3">店铺代码:' + obj.shop_code + '</div>',
                            '<div class="col-sm-3 col-xs-3 myTit">描述:' + obj.description + '</div>',
                        '</div>',
                        '<div class="row">',
                            '<div class="col-sm-8 col-xs-8">标题:' + obj.title + '</div>',
                            '<div class="col-sm-4 col-xs-4">' + obj.write_date + '</div>',
                        '</div>',
                    '</div>'
            )
            if(source_from == "ipos") {
                optsArr.push(
                    '<div class="col-sm-2 col-xs-2 item_del">删除</div>',
                '</li>'
                )
            }else {
                optsArr.push(
                    '<div class="col-lg-1 col-md-1 pc_item_del">删除</div>',
                '</li>'
                )
            }
        });*/
        $.each(feedback_list,function(i,obj) {
            optsArr.push(
                '<tr class="list_li mb-10" id="'+ obj.id +'">',
                    '<td class="item_num eachFeedback"><span class="item-title">编号:</span>' + obj.id + '</td>',
                    '<td class="item_num eachFeedback"><span class="item-title">标题:</span>' + obj.title + '</td>',
                    '<td class="myTit eachFeedback"><span class="item-title">描述:</span>' + obj.description + '</td>',
                    '<td class="item_time eachFeedback">' + obj.write_date + '</td>'
            )
            if(obj.create_user == username) {
                optsArr.push(
                    '<td class="pc_item_del">删除</td>',
                '</tr>'
                )
            }else {
                optsArr.push(
                    '<td class="pc_item_del_no"></td>',
                    '</tr>'  
                )
            }
            /*if(source_from == "ipos") {
                optsArr.push(
                    '<td class="col-sm-2 col-xs-2 item_del">删除</td>',
                '</li>'
                )
            }else {
                optsArr.push(
                    '<td class="pc_item_del">删除</td>',
                '</tr>'
                )
            }*/
        })

        $('#typeTable ul').html(optsArr.join(''));
        $('.loadingWp').hide();
        $('.feedbackfooter').show()
        if(source_from == "ipos") {
           $('#exportForm').hide();
        }
    };

    var onNextPageBtnClick = function() {
        var totalPage = Math.ceil(param.totalItem / param.num_per_page)?Math.ceil(param.totalItem / param.num_per_page):1;
        if(param.page_num >= totalPage){
            layer.msg("已经是最后一页");
            param.page_num = totalPage;
            return;
        }else {
            param.page_num++;
        }
        onQueryBtnClick();
    };

    var renderPaging = function(data) {
        param.totalItem = data;
        param.num_per_page = $('.showitem option:selected').val();
    };

    var onPrevPageBtnClick = function() {
        if(param.page_num <= 1) {
            layer.msg("已经是第一页了");
            return;
        }else {
            param.page_num--;
        }
        onQueryBtnClick();
    };

    var onDeleteItemBtnClick = function() {
        /*if (!confirm('确定要删除吗？')) {
            return;
        }*/
        $('.loadingWp').show();
        var params = {
            id: $(this).parent().attr("id")
        }

        layer.confirm('确定要删除吗？', {
            skin: 'layui-layer-molv',
            btn: ['取消','确定']
        }, function(){
            layer.closeAll();
        }, function(){
            $.ajax({
                url: baseURL + "/api/sca/feedback/delete",
                dataType: "json",
                async:true, 
                data: params,
                type:"POST",
                beforeSend: function(request) {
                    request.setRequestHeader("Sca-Sys-Token", Base64.decode(sessionStorage.getItem('token')));
                },
                success:function(res){
                    if(res.meta.code == 0) {
                        onQueryBtnClick();
                    }else {
                        layer.alert(res.meta.message, {
                            skin: 'layui-layer-molv' ,
                            closeBtn: 0
                        });
                    }
                },
                error:function(){
                    layer.alert("请求失败!", {
                        skin: 'layui-layer-molv' ,
                        closeBtn: 0
                    });
                }
            });
        });
    };

    var onEachFeedbackClick = function() {
        var eachItemId = sessionStorage.setItem('eachItemId',$(this).parent().attr("id"));
        location.href = "feedbackdetail.html?v=" + Helper.version();
    };

    var onBackBtnClick = function() {
        sessionStorage.setItem('parent_id',0);
        window.history.back();
        // sessionStorage.setItem('parent_id',0);
    };

    init();
}(window,document,jQuery);