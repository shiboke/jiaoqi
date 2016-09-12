$(function(){
	 $.ajaxSetup({
		    contentType:"application/x-www-form-urlencoded;charset=utf-8",
		    complete:function(XMLHttpRequest,textStatus){	   
		        var sessonState=XMLHttpRequest.getResponseHeader("sessonState"); 
		        if(sessonState=="timeOut"){
		        	window.top.location.href=ctx.path+"/resources/html/main.jsp";
		        }
		    }
		    });
	
    //获取登陆状态
 
               ctx.state==1 ? loginFn(ctx.loginName) : $('#login div').html('登录');
 
     /*登录效果*/
    $("#login").click(function() {
        if ($('#login div').html()!="登录") {
            $('#haslogin').removeClass('hidden');
        } else {
            $("#login_index").removeClass('hidden');
        }

    });
    $(".closed,.fl").click(function() {
        //$(".layer-login").hide();
        $(this).parents('.layer-login').toggleClass('hidden');
    });

    /* 登录后显示*/
    $(".login_layer").click(function() {
        $("#login_index").addClass('hidden');
        $("#haslogin").removeClass('hidden');
    });
    /*修改密码*/
    $("#haslogin .fl").click(function() {
        $("#haslogin").addClass('hidden');
        $("#password").toggleClass('hidden');
    });

    $('.closeded').click(function() {
        $('#haslogin').addClass('hidden');
    })


   
     //点击登录
 
   /* $("input[name='loginName'],input[name='pwd']").keydown(function(event) {
        if (event.keyCode == 13) {
            login();
        }
    });*/

    $(".btn.btn-success.btn-block").click(function() {
        login();
    }) 


    //点击修改密码
   /* $("input[name=oldpwd'],input[name='newPwd'],input[name='surePwd']").keydown(function(event) {
        if (event.keyCode == 13) {
            updatePwdFun();
        }
    });*/

    $("#updatePwd").click(function() {
        updatePwdFun();
    });
    //点击栏目切换
       $("#in-side>a").click(function() {
        $(window.parent.document).find("iframe").attr("src", $(this).attr("target"));
        $(this).addClass('current').siblings('a').removeClass('current');
    });

       //点击注销操作
       $('#haslogin .fr').click(function() {
            $.ajax({
            url:ctx.path + "/api/pm/logout",
            async: true,
            dataType: 'json',
            type: 'get',
            success: function(data) {
                if (data.rs == 1) {
                   $('#haslogin').addClass('hidden');
                   $('#login div').html('登录');
                   $('#iframe-content').attr('src','');
                    $('#in-side>a').attr('target','').removeClass('current');

                }
        }
    });
       });




           //登录验证
    function login() {
        var v_loginName = $("#loginName").val();
        var v_pwd = $("#pwd").val();
        if (isNullValue(v_loginName)) {
            $("#loginError").html("请输入用户名!");
            return;
        } else if (isNullValue(v_pwd)) {
            $("#loginError").html("请输入密码!");
            return;
        }
        $.ajax({
            url:ctx.path + "/api/pm/login",
            data: {
                loginName: $.trim(v_loginName),
                pwd: $.trim(v_pwd)
            },
            async: true,
            dataType: 'json',
            type: 'post',
            success: function(data) {

                if (data.rs == 1) {
                    loginFn($('#loginName').val())
                } else {
                    $("#loginError").html(data.msg);
                }
            }
        });
    };
    //修改密码
    function updatePwdFun() {
        var pwd = $("#oldpwd").val();
        var newPwd = $("#newPwd").val();
        var surePwd = $("#surePwd").val();
        var v_error = "";
        if (isNullValue(pwd)) {
            $("#pwdError").html("请输入原密码！");
            return;
        } else if (isNullValue(newPwd)) {
            $("#pwdError").html("请输入新密码！");
            return;
        } else if (isNullValue(surePwd)) {
            $("#pwdError").html("请输入确认密码！");
            return;
        } else if (newPwd != surePwd) {
            $("#pwdError").html("两次输入的密码不同！");
            return;
        }
        
        $.ajax({
            url: ctx.path + "/api/pm/updatePwd",
            data: {
                pwd: pwd,
                surePwd: surePwd
            },
            async: true,
            dataType: 'json',
            type: 'post',
            success: function(data) {
                if (data.rs == 1) {
                    layer.msg('密码修改成功', {
                        icon: 1
                    });
                    $('#password').addClass('hidden');
                } else {
                    $("#pwdError").html(data.msg);

                }
            }
        });
    }

    //登陆后显示iframe
    function loginFn(name){
        $('#iframe-content').attr('src',ctx.path+'/resources/html/admin.jsp');
        $('#in-side>a').eq(0).attr('target',ctx.path+'/resources/html/admin.jsp').addClass('current');
        $('#in-side>a').eq(1).attr('target',ctx.path+'/resources/html/department_management.jsp');
        $('#in-side>a').eq(2).attr('target',ctx.path+'/resources/html/user_manage.jsp');
        //重置操作
        $('#login_index').addClass('hidden');
        $('#login div,#loginNames').html(name);
    }

});



    //判断是否为空
function isNullValue(value) {
    value = $.trim(value);
    if (value == "") {
        return true;
    } else {
        return false;
    }
}

// 设置高度
function contH(arr, num){
    var num = num&&num>79?num:79,
        fullH = $('body').height()-num;
    for(var i=0,str;str=arr[i++];){
        fullH -= $(str).outerHeight(true);
    }
    return fullH;
}

