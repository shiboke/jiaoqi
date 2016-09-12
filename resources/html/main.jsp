<%@ page language="java" import="java.util.*"  pageEncoding="utf-8"%>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name=”renderer” content=”webkit|ie-comp|ie-stand” /> 
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <title>微信管理平台</title>
     <%@ include file="/resources/html/inc.jsp"%> 
<style type="text/css">
body{padding:0}
</style>
 </head> 
 <body> 
  <div class="wrapper"> 
   <div id="header"> 
    <div id="logo">
     <!-- <img src="${ctx.path}/resources/images/home/logo.png" alt="" /> -->
    </div> 
    <div id="login">
     <div class="name">
      登录
     </div>
     <span class="triangle"></span>
    </div> 
   </div> 
   <!--登录--> 
      <!--登录后--> 
   <div class="layer-login hidden" id="haslogin"> 
    <div class="closeded" title="关闭">
     x
    </div> 
    <div style="clear:both"></div> 
    <div class="lines-msg"> 
     <span>帐　号 :</span>
     <em id="loginNames">${us_info.loginName}</em> 
    </div> 
    <div class="btn-bg"> 
     <div class="btn fl">
      修改密码
     </div> 
     <div class="btn fr btn-success">
      注销帐号
     </div> 
    </div> 
   </div>
       <!-- 修改密码--> 
   <div class="layer-login hidden" id="password"> 
    <div class="closed" title="关闭">
     x
    </div> 
    <h2>修改密码</h2> 
     <div class="lines"> 
      <span>原密码:</span>
      <input type="password" name="u_pwd" id="oldpwd" class="input" /> 
     </div> 
     <div class="lines"> 
      <span>新密码:</span>
      <input type="password" name="newPwd" id="newPwd" class="input" /> 
     </div> 
     <div class="lines"> 
      <span>确认密码:</span>
      <input type="password" name="surePwd" id="surePwd" class="input" /> 
     </div> 
     <div id="pwdError"></div> 
     <div class="btn-bg"> 
      <div class="btn fl">
       取消
      </div> 
      <div class="btn fr btn-success" id="updatePwd">
       确认
      </div> 
     </div> 
   </div>

   <div class="layer-login hidden " id="login_index"> 
    <div class="closed" title="关闭">
     x
    </div> 
    <h2>登录</h2> 
     <div class="lines"> 
      <span>帐　　号 :</span>
      <input type="text" value="" name="loginName" id="loginName" class="input" /> 
     </div> 
     <div class="lines"> 
      <span>密　　码 :</span>
      <input type="password" value="" name="pwd" id="pwd" class="input" /> 
     </div> 
     <div id="loginError"></div> 
     <div class="btn-bg"> 
      <div class="btn fl">
       取消
      </div> 
      <button class="btn btn-success btn-block">登录</button> 
     </div>     
   </div> 
   <div id="sidebar"> 
    <div id="in-side"> 
     <a target=""><span class="icon icon-home"></span>管理后台</a> 
     <a target=""><span class="icon icon-online"></span>部门管理</a> 
     <a target=""><span class="icon icon-user"></span>用户管理</a> 
    </div> 
   </div> 
   <div id="main"> 
    <iframe src="" id="iframe-content" name="iframe" frameborder="0"></iframe> 
   </div> 
   <div id="footer">
    技术支持：南昌普拉特网络科技有限公司 　 &copy; 2016 Ncplt 
    <div class="Times">
     <span id="times"></span>
    </div>
   </div> 
  </div> 

 </body>
</html>