window.onload=function() {

	var winW=$(window).width();
	var winH=$(window).height();
	var bodyPx=window.screen.width/window.screen.height/1.83*18+'px';
	$('body').css('font-size',bodyPx);	
	$('#banner img').width(winW*0.8);
	$('.proc>img').width(winW*0.8*0.7);
	$('.box img').width(winW*0.8*0.7*0.4);

	var oDiv=document.getElementById('nav').getElementsByTagName('div')[0];
	var oLogin=document.getElementById('login_index');
	var x=getElementByClassName('div',oLogin,'closed')[0];
	var nosure=getElementByClassName('div',oLogin,'fl')[0];
	var sure=getElementByClassName('div',oLogin,'btn-success')[0];

	//点击登录出现弹框
	oDiv.onclick=function() {
		oLogin.style.display='block';
	}

	//点击取消隐藏弹框
	x.onclick=function() {
		oLogin.style.display='none';
	}

	nosure.onclick=function() {
		oLogin.style.display='none';
	}

	//真正点击登录的操作
	sure.onclick=function() {
		login();
	}

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
                	$("#loginError").html('登录成功,请稍后...');
                   window.location=ctx.path + '/resources/html/main.jsp';
                } else {
                    $("#loginError").html(data.msg);
                }
            }
        });
    };
}

//自定义getElementByClassName
function getElementByClassName(obj,parented,className) {
	if(parented.getElementsByClassName) {
		return parented.getElementsByClassName(className);
	}else{
		var par=parented.getElementsByTagName(obj);
		var arr=[];
		for(var i=0;i<par.length;i++) {
			if(par[i].className.indexOf(className)>=0) {
				arr.push(par[i]);
			}
		}
	
		return arr;		
	}

	
}

	//删除左右两端的空格
function trim(str){ 
　　     return str.replace(/(^\s*)|(\s*$)/g, "");
　　 }

//检查是否为空的函数
function isNullValue(values) {
	values=trim(values);
	if(values =="") {
		return true;
	}else {
		return;
	}
}