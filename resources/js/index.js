$(function(){

   //获取微信号等信息
       $.ajax({
        url:ctx.path + "/api/wx/queryRandWxs",
        async: true,
        data:{num:'1'},
        dataType: 'json',
        type: 'post',
        success: function(data) {
            if (data.rs == 1) {
                $('span[name="QQandWeiXin"]').html(data.data[0].wxAccount);
                $('span[name="QQandWeiXin"]').eq(0).html('微信：'+data.data[0].wxAccount +'(长按复制可添加微信)');
            }
        }
    });
});