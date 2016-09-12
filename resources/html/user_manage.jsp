<%@ page language="java" import="java.util.*"  pageEncoding="utf-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>用户管理</title>
  <%@ include file="/resources/html/inc.jsp"%> 

</head>
<body>
  <section>
    <div class="titled">
      <div class="input-search">
        <input name="userName" id="search" type="text">
        <button type="button" class="input-sub"  title="搜索">搜索</button>
        </div>

        <span class="edit_subject">新增用户</span>
    </div>
  </section>
  <div  class="jqGrid_wrapper white-bg">
    <table id="jqGrid"></table>
    <!-- 显示table -->
    <div id="jqGridPager"></div>
    <!-- 显示分页 -->
  </div>  

 
  <div id="addUser"  class="inner-pd" style="display: none ;">
  <div class="lines"><div class="in-name">账号 :</div><div class="in-input"><input type="text"  id="weChat" maxlength="25"  class="input"></div></div>
  <div class="lines"><div class="in-name">密码 :</div><div class="in-input"><input type="text"  id="name" class="input" maxlength=25></div></div>

  </div>


   <script src="${ctx.path}/resources/js/user_manage.js"></script>
 