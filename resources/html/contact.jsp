<%@ page language="java" import="java.util.*"  pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
 <head> 
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
  <meta name="viewport" content="width=device-width">
  <title>联系我们-南昌普拉特网络科技有限公司</title> 
     <%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/resources/html";
Map<String,Object> ctx=new HashMap<String,Object>();
ctx.put("path", path);
ctx.put("basePath", basePath);
ctx.put("version","2016080502");
pageContext.setAttribute("ctx", ctx);
%>
  <link rel="stylesheet" href="${ctx.path}/resources/css/stype.css" /> 
  <script type="text/javascript">
	var ctx = ctx || {};
	ctx.path = '${ctx.path}';
	ctx.state= '${us_info.roleGrade}';
	ctx.loginName= '${us_info.loginName}';
	ctx.userId= '${us_info.userId}';
</script>
 </head> 
 <body> 
  <div id="top"> 
   <div class="logo">
    <strong>南昌普拉特网络科技有限公司</strong>
   </div> 
   <div class="tel"> 
    <p class="telW">24小时咨询热线</p> 
    <p class="telN">18079144202</p> 
   </div> 
   <div class="clear"></div> 
  </div> 
  <div id="nav"> 
   <ul> 
    <li><a href="goods_index.jsp">首页</a></li> 
    <li><a href="goods_show.jsp">消毒产品</a></li> 
    <li><a href="about.jsp">关于我们</a></li> 
    <li><a href="#">联系我们</a></li> 
   </ul> 
    <div>登录</div>
  </div> 
  <div id="banner"> 
   <div id="Focus"> 
    <ul> 
     <li><img src="${ctx.path}/resources/images/t1.jpg" /></li> 
    </ul> 
   </div> 
  </div> 
  <!--head结束--> 
  <div id="body"> 
   <!--left开始--> 
   <div class="left"> 
    <div class="about"> 
     <div class="aboutt">
      联系我们
     </div> 
     <div class="aboutc"> 
      <h1>联系我们</h1> 
      <div class="aboutc"> 
       <p>公司名称：南昌普拉特网络科技有限公司 </p> 
       <p>联系地址：江西省南昌市西湖区赣抚西堤龙韵大厦A座 </p> 
       <p>联系电话：18079144202 </p> 
      </div> 
     </div> 
    </div> 
   </div> 
   <!--left结束--> 
   <!--right开始--> 
   <div class="right"> 
    <div class="cat"> 
     <div class="catt">
      产品分类
     </div> 
     <div class="catc"> 
      <ul> 
       <li><a href="goods_show.jsp">消毒产品</a></li> 
      </ul> 
     </div> 
    </div> 
    <div class="news"> 
     <div class="newst">
      联系我们
     </div> 
     <div class="conc">
       公司名称:南昌普拉特网络科技有限公司 
      <br /> 公司地址：江西省南昌市西湖区赣抚西堤龙韵大厦A座 
      <br /> 联系电话：18079144202 
      <br /> 
      <br /> 
      <br /> 
     </div> 
    </div> 
   </div> 
   <!--right结束--> 
   <div class="clear"></div> 
  </div> 
    <!--登录-->
<div class="layer-login" id="login_index"> 
    <div class="closed" title="关闭">
     x
    </div> 
    <h2>登录</h2> 
     <div class="lines"> 
      <span>帐　　号 :</span>
      <input value="" name="loginName" id="loginName" class="input" type="text"> 
     </div> 
     <div class="lines"> 
      <span>密　　码 :</span>
      <input value="" name="pwd" id="pwd" class="input" type="password"> 
     </div> 
     <div id="loginError"></div> 
     <div class="btn-bg"> 
      <div class="btn fl">
       取消
      </div> 
      <button class="btn btn-success btn-block">登录</button> 
     </div> 
    
   </div>
    <!--友情链接--> 
  <div id="link"> 
   <b>友情链接：</b>
   <a href="http://www.ysmgs.com/resources/html/index.jsp">http://www.ysmgs.com/resources/html/index.jsp</a>
  </div> 
  <!--foot--> 
  <div id="foot">
    版权所有:南昌普拉特网络科技有限公司 地址： 江西省南昌市西湖区赣抚西堤龙韵大厦A座 电话： 18079144202 
  </div>  
  	<script type="text/javascript" src="${ctx.path}/resources/js/jquery.js"></script>
   	<script type="text/javascript" src="${ctx.path}/resources/js/login_plt.js"></script>  
 </body>
</html>
