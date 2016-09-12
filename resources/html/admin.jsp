<%@ page language="java" import="java.util.*"  pageEncoding="utf-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>管理后台</title>
  <%@ include file="/resources/html/inc.jsp"%> 

</head>
<body>
  <section>
    <div class="titled">
      <div class="input-search">
        <input name="userName" id="search" type="text">
        <button type="button" class="input-sub"  title="搜索">搜索</button>
        </div>

        <span class="edit_subject">添加微信</span>
    </div>
  </section>
  <div  class="jqGrid_wrapper white-bg">
    <table id="jqGrid"></table>
    <!-- 显示table -->
    <div id="jqGridPager"></div>
    <!-- 显示分页 -->
  </div>  

 
  <div id="addUser"  class="inner-pd" style="display: none ;">
  <div class="lines"><div class="in-name">微信号 :</div><div class="in-input"><input type="text"  id="weChat" maxlength="25"  class="input"></div></div>
  <div class="lines"><div class="in-name">客服名称 :</div><div class="in-input"><input type="text"  id="name" class="input" maxlength=25></div></div>
  <div class="lines"><div class="in-name">电话号码 :</div><div class="in-input"><input  type="text"  id="phone"  maxlength="25" class="input"></div></div>
  <div class="lines"><div class="in-name">部门 :</div><div class="in-input">
   <select id="section">

  </select>
  </div></div>
  <div class="lines"><div class="in-name">状态 :</div><div class="in-input">
  <select id="state">
  <option value="">请选择</option>
  <option value="1">显示</option>
  <option value="0">隐藏</option>
  </select>
  </div></div>
  </div>


   <script src="${ctx.path}/resources/js/admin.js"></script>
  