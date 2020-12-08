(function(){
    var start_x;   // touchstart时的水平起始位置
    var end_x;     // touchmove过程中的水平结束位置
    var touchmove = false;    // 标识是否成功触发了touchmove，默认没有触发。

    // on方法事件绑定，可将事件绑定到新添加的子元素上
    $(document).on("touchstart",'.item_top',function(e){ // 触摸开始时
        if (e.originalEvent.targetTouches) {
            start_x = e.originalEvent.targetTouches[0].pageX;
        } else {
            start_x = e.pageX;
        }
    //console.log(start_x);
    });

    $(document).on("touchmove",'.item_top',function(e){ // 触摸过程中... 
        var width = $('.item_del').width();   // 删除按钮的宽
        var left = $(this).css('left');
        if(start_x - end_x >= 5){
            touchmove = true;
        }

        if (e.originalEvent.targetTouches) {
            end_x = e.originalEvent.targetTouches[0].pageX;
        } else {
            end_x = e.pageX;
        }

        if(start_x - end_x >= 0) {  // touchmove 向左移动
            if(parseInt(left) > -width){
                $(this).css('left', end_x-start_x+'px');  // 移动效果
            }
        }else{  // 向右移动
            if(parseInt(left) <0){
                $(this).animate({left:0},500);  // 恢复原状（动画效果）
            }
        }
    });

    $(document).on("touchend",'.item_top',function(e){  // 触摸抬起时
        var width = $('.item_del').width();   // 删除按钮的宽
        var offset = start_x - end_x;     // 偏移量
        if(touchmove==false) {
            return;
        }

        if( offset > 0){   // 左滑动
            if(offset>=width/2){      // 偏移量大于等于删除按钮的一半
                $(this).animate({left:-width+'px'},500);  // 动画显示删除按钮
            }else{
                $(this).animate({left:0},500);  // 恢复原状
            }
        }
        touchmove = false;
    });

    $(document).on('touch', '.item_top',function(e){  // 点击主条目时，也可恢复原状
        var width = $('.item_del').width();   
        var left = $(this).css('left');
        if(parseInt(left)<0){
            $(this).animate({left:0},500);  // 恢复原状
        }
    });
    // 点击删除，删除父元素节点
    /*$(document).on('touch', '.item_del',function(e){  
        $(this).parent().remove();
    });*/
})();