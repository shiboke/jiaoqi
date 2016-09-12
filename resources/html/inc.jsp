<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/resources";
Map<String,Object> ctx=new HashMap<String,Object>();
ctx.put("path", path);
ctx.put("basePath", basePath);
ctx.put("version","2016080502");
pageContext.setAttribute("ctx", ctx);
%>
<base href="${ctx.path}" />
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="expires" content="0" />    
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0" /> 
    <link rel="stylesheet" href="${ctx.path}/resources/css/bootstrap.min.css">
    <link rel="stylesheet" href="${ctx.path}/resources/css/ui.jqgrid.css">
    <link rel="stylesheet" href="${ctx.path}/resources/css/layer.css">


	<link rel="stylesheet" href="${ctx.path}/resources/css/main.css">
    <link rel="stylesheet" type="text/css" href="${ctx.path}/resources/css/global.css" />
    <link rel="stylesheet" type="text/css" href="${ctx.path}/resources/css/icon.css" />
    

<!-- 全局js --> 
  <script src="${ctx.path}/resources/js/jquery.js"></script>
  <script src="${ctx.path}/resources/js/layer.js"></script>
  <script src="${ctx.path}/resources/js/bootstrap.min.js"></script>
  <script src="${ctx.path}/resources/js/grid.locale-cn.js"></script>
  <script src="${ctx.path}/resources/js/jquery.jqGrid.min.js"></script>
  <script src="${ctx.path}/resources/js/login.js"></script>


<script type="text/javascript">
var ctx = ctx || {};
ctx.path = '${ctx.path}';
ctx.state= '${us_info.roleGrade}';
ctx.loginName= '${us_info.loginName}';
ctx.userId= '${us_info.userId}';

</script>