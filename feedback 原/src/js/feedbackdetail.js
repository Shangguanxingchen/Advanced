!function(window,document,$,undefined) {
    var baseURL = Base64.decode(sessionStorage.getItem('baseURLKey'));

	var init = function() {
		initEvent();
        initTable();
	};

	var initEvent = function() {
        $('#showimgs ul').on('click', '.eachImg', onLargeImgBtnClick);
        $('.show_largeimg').on('click', onHideLargeImgBtnClick);
        $('#goback').on('click',onGobackBtnClick);
	};

    var initTable = function() {
        var params = {
            id: sessionStorage.getItem('eachItemId')
        };
        $.ajax({
            url: baseURL + "/api/sca/feedback/get",
            dataType: "json",
            data: params,
            type:"POST",
            beforeSend: function(request) {
                request.setRequestHeader("Sca-Sys-Token", Base64.decode(sessionStorage.getItem('token')));
            },
            success:function(res){
                if(res.meta.code == 0) {
                    getTableList(res.data);
                    sessionStorage.removeItem("eachItemId");
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
        if(source_from == "ipos") {
            $('#goback').hide();
        };
        //基本信息
        var $feedback_title = $('#feedback_title');
        /*var $shop_code = $('#shop_code');*/
        var $feedbackText = $('#feedbackText');
        $feedback_title.html(data.master.title);
        /*$shop_code.html(data.master.shop_code);*/
        $feedbackText.html(data.master.description);
        //自定义信息
        var optsArr = [];
        if(data.detail.length != 0) {
            for(var i=0; i<data.detail.length; i++) {
                optsArr.push('<div class="mb-10 col-sm-6 col-xs-12"'+ '><span class="w20 dis_b inputTitle">' + data.detail[i].name + ':</span><span>' + data.detail[i].category_detail_value + '</span></div>')
            }
        }
        $('.categoryInfo').html(optsArr.join(''));
        //照片信息
        var optImgs = [];
        $.each(data.images,function(key,obj) {
            if (obj.thumbnail_url === null) return;
            optImgs.push(
                '<li class="eachImg"><img src="' +obj.thumbnail_url + '" bsrc="' + obj.url + '" alt=""></li>'
            )
        })
        
        $('#showimgs ul').html(optImgs.join(''));
    };

    var onLargeImgBtnClick = function() {
        $('.masker-img').show();
        $('.show_largeimg').html('<img src= ' + $(this).find("img").attr("bsrc") + '></img>');
    };

    var onHideLargeImgBtnClick = function() {
        $('.masker-img').hide();
    }

    var onGobackBtnClick = function(){
        window.history.go(-1);
    };

	init();
}(window,document,jQuery);