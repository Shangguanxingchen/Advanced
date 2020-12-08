!function(window,document,$,undefined) {
    var baseURL = Base64.decode(sessionStorage.getItem('baseURLKey'));
	var init = function() {
		initEvent();
        initTable();
	};

	var initEvent = function() {
        $('#classify').on('change', onSettingBtnClick);
        $('#back').on('click', onBackBtnClick);
	};

    var initTable = function() {
        var param = {
            parent_id: 0
        };
        $.ajax({
            url: baseURL + "/api/sca/feedback/category/get_list",
            dataType: "json",
            data: param,
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
        if(source_from == "ipos") {
            $('#back').hide();
        };
        data.unshift({"id": 0, name: "请选择"});
            var optsArr = [];
            for(var i=0; i<data.length; i++) {
                optsArr.push('<option id="' + data[i].id + '" value="' + data[i].name + '" class="setting">' + data[i].name + '</option>')
            }
            $('#classify').html(optsArr.join(''));
        
    };

    var onSettingBtnClick = function() {
        var $this = $(this);
        switch($this.val()) {
            case "陈列反馈":
            sessionStorage.setItem('id',$this.find('option:selected').prop("id"));
            sessionStorage.setItem('parent_id',$this.find('option:selected').prop("id"));
            break;
            case "货品反馈":
            sessionStorage.setItem('id',$this.find('option:selected').prop("id"));
            sessionStorage.setItem('parent_id',$this.find('option:selected').prop("id"));
            break;
        }
        location.href = "feedbackitem.html?v=" + Helper.version();
        $("#classify option:first").prop("selected", true); 
    };

    var onBackBtnClick = function() {
        window.history.back();
    };

	init();
}(window,document,jQuery);