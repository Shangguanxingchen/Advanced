!function(window,document,$,undefined) {
    var baseURL = Base64.decode(sessionStorage.getItem('baseURLKey'));
    var imgData = {};
    var detailList = [];
    

	var init = function() {
		initEvent();
        initTable();
	};
    
	var initEvent = function() {
        /*$('.upload-li').on('click', onEachAddimgLiClick);*/
        $('.uploadIMG').on('change', onEachUploadImgChange);
        $('#submitBtn').on('click', onSubmitBtnClick);
        $('#back').on('click', onBackBtnClick);
	};

    var initTable = function() {
        var params = {
            category_id: sessionStorage.getItem('parent_id')
        }
        $.ajax({
            url: baseURL + "/api/sca/feedback/category/get_detail",
            dataType: "json",
            async:true, 
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
        var source_from = sessionStorage.getItem('source_from');
        var showid = sessionStorage.getItem('id');
        if(source_from == "ipos") {
            $('#back').hide();
        };
        var data = data.sort(compare("sequence"));
        var obj = {};
        var $feedback_title = $('#feedback_title');
        var $shop_code = $('#shop_code');
        var $feedback_staff = $('#feedback_staff');
        var $feedbackText = $('.feedbackText');
        $feedback_title.html(data.feedback_title);
        $shop_code.html(data.shop_code);
        $feedback_staff.html(data.feedback_staff);
        $feedbackText.html(data.feedback_content);
        var optsArr = [];
        if(showid == "1") {
            $('#description-wp').text('文字描述（我们值得学习的内容）')
        }
        if(showid == "8") {
            $('#description-wp').text('文字描述（推荐原因）')
        }
        if(data.length <=0) {
            return false;
        } else {
            for(var i=0; i<data.length; i++) {
                optsArr.push('<div class="mb-10 col-sm-6 col-xs-12"'+ '><span class="w20 dis_b opt inputTitle">' + data[i].name + ':</span><input type="text" class="inputText" detail-id="'+ data[i].category_detail_id +'"/></div>')
                /*obj = {
                    "category_detail_id" : data[i].category_detail_id,
                    "category_detail_value" : ""
                }
                detailList.push(obj);*/
            }
            $('#customize').html(optsArr.join(''));
        }
    };

    /*var onUploadImgsChange = function() {
        var _self = this;
        var file = this.files;
        var AllowImgFileSize = '1024';
        if(file.length <= 0) {
            return false;
        }else {
            for(var i=0; i<file.length; i++) {
                var curr = file[i].size;
                if(curr > AllowImgFileSize * 1024 * 5) { //当图片大于5兆提示
                    alert("请选择小于5兆的图片,请重新上传");
                } else {
                    reads(file[i]);
                    title = $(this).parents(".upload-li").find(".title").text();
                    uid = "0_" + i;
                    source = file[i];
                    imgData[uid] = source;
                    console.log();
                }
            }
            
        }
        
        function reads(file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);   
            reader.onload = function(e) {
                _self.parentNode.parentNode.style.background = "url("+this.result+") no-repeat";//回显
                _self.parentNode.parentNode.style.backgroundSize = "cover";
                document.getElementById("moreimg").innerHTML += '<li class="upload-li"><img src=" '+ reader.result + '"></li>'
            }
        }
    };
*/
    var onEachUploadImgChange = function() {
        var _self = this;
        var file = this.files[0];
        var AllowImgFileSize = 1024;
        if(this.files.length <= 0) {
            return false;
        } else {
            var curr = file.size;
            if(curr > AllowImgFileSize * 1024 * 5) { //当图片大于5兆提示
                layer.alert("请选择小于5兆的图片,请重新上传");
                $('.uploadIMG').val("");
            } else {
                reads(file);
                title = $(this).parents(".upload-li").find(".title").text();
                uid = $(this).parents(".upload-li").find(".title").attr("uid");
                source = $(this)[0].files[0];
                imgData[uid] = source;
            }
        }
        function reads(file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);   
            reader.onload = function(e) {
                var source_from = sessionStorage.getItem('source_from');
                if(source_from == "ipos") {
                    const src = e.target.result;
                    const img = new Image();
                    img.src = src;
                    img.onload = e => {
                        const w = img.width;
                        const h = img.height;
                        const quality = 0.8;  // 默认图片质量为0.92
                        // 生成canvas
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        // 创建属性节点
                        const anw = document.createAttribute("width");
                        anw.nodeValue = w;
                        const anh = document.createAttribute("height");
                        anh.nodeValue = h;
                        canvas.setAttributeNode(anw);
                        canvas.setAttributeNode(anh);
                        // 铺底色 PNG转JPEG时透明区域会变黑色
                        ctx.fillStyle = "#fff";
                        ctx.fillRect(0, 0, w, h);

                        ctx.drawImage(img, 0, 0, w, h);
                        // quality值越小，所绘制出的图像越模糊
                        const base64 = canvas.toDataURL('image/jpeg', quality);
                        // 返回base64转blob的值
                        //console.log(`原图${(src.length/1024).toFixed(2)}kb`, `新图${(base64.length/1024).toFixed(2)}kb`);
                        // 去掉url的头，并转换为byte
                        const bytes = window.atob(base64.split(',')[1]);
                        // 处理异常,将ascii码小于0的转换为大于0
                        const ab = new ArrayBuffer(bytes.length);
                        const ia = new Uint8Array(ab);
                        for (let i = 0; i < bytes.length; i++) {
                            ia[i] = bytes.charCodeAt(i);
                        }
                        file = new Blob([ab], {type : 'image/jpeg'});
                        file.name = name;
                    }
                    img.onerror = e => {
                        error(e);
                    }
                }
                _self.parentNode.parentNode.style.background = "url("+this.result+") no-repeat";//回显
                _self.parentNode.parentNode.style.backgroundSize = "cover";
            }
        }
    };

    var onSubmitBtnClick = function() {
        var itemobj = {};
        var $this = $(this);
        if($this.hasClass('submiting')) {
            return;
        }
        $this.addClass('submiting');

        var data = imgData;
        var formData = new FormData();
        $.each(data,function(key,obj){
            formData.append("image_"+key, obj);
        });
        /*var shop_code = $('#ShopCode').val();*/
        var feedback_title = $('#feedbackTitle').val();
        var description = $('#description').val();
        var feedback_category_id = sessionStorage.getItem("parent_id");
        /*if($.trim(shop_code) == "") {
            layer.msg("店铺代码不能为空！");
            $this.removeClass('submiting');
            return;
        }*/
        if($.trim(feedback_title) == "") {
            layer.msg("反馈标题不能为空！");
            $this.removeClass('submiting');
            return;
        }

        var inputValue = [];
        var inputId = [];
        if($(".inputText").length <=0) {
            dataheader = {
                "master":{
                    "feedback_category_id": feedback_category_id,
                    /*"shop_code": shop_code,*/
                    "title": feedback_title,
                    "description": description
                }
            };
        }else {
            $(".inputText").each(function(key,obj){
                inputId.push($(this).attr("detail-id"));
                inputValue.push($(this).val());
                /*obj.category_detail_id = $(this).attr("detail-id");
                obj.category_detail_value = $(this).val();
                itemobj[obj.category_detail_id] = obj.category_detail_value;*/

            })
             
            for(var i=0, len=$(".inputText").length; i<len; i++) {
                itemobj = {
                    "category_detail_id" : inputId[i],
                    "category_detail_value" : inputValue[i]
                }
                detailList.push(itemobj);
            }

            dataheader = {
                "master":{
                    "feedback_category_id": feedback_category_id,
                    /*"shop_code": shop_code,*/
                    "title": feedback_title,
                    "description": description
                },
                "detail":detailList
            };
            
        }
        json_obj = JSON.stringify(dataheader);
        formData.append('data', new Blob([json_obj], {type: "application/json"}));

        $.ajax({
            url: baseURL + "/api/sca/feedback/put",
            dataType: "json",
            data: formData,
            type:"POST",
            processData: false, // 告诉jQuery不要去处理发送的数据
            contentType: false, // 告诉jQuery不要去设置Content-Type请求头
            async: true, //默认是true：异步，false：同步。
            beforeSend: function(request) {
                request.setRequestHeader("Sca-Sys-Token", Base64.decode(sessionStorage.getItem('token')));
            },
            success:function(res){
                if(res.meta.code == 0) {
                    layer.msg("问题反馈成功", {
                        time:2000,
                        icon: 6
                    },function(){
                        resetForm();
                        /*onBackBtnClick();*/
                        location.reload();
                    });
                }else {
                    $('#submitBtn').removeClass('submiting');
                    layer.alert(res.meta.message, {
                        skin: 'layui-layer-molv' ,
                        closeBtn: 0
                    });
                    //initTable();
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

    var onBackBtnClick = function() {
        sessionStorage.removeItem("parent_id");
        window.history.go(-1);
    };

    var resetForm = function() {
        $('#feedbackForm').trigger('reset');
        $('#submitBtn').removeClass('submiting');
    };

    var compare = function(num) {
        return function (a, b) {
            var value1 = a[num];
            var value2 = b[num];
            return value1 - value2;      
        }
    };

	init();
}(window,document,jQuery);