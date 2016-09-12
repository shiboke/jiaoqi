var its = {};
$(function(){
   var contentHeight = contH(['.class_information>h4', '#searchForm'], 145);
    $.jgrid.defaults.styleUI = 'Bootstrap';

    //屏幕发生变化的时候计算表格高度
    $(window).bind('resize',
    function() {
        var width = $('.jqGrid_wrapper').width();
        $('#jqGrid').setGridWidth(width);
        $(".class_diqu.repair_select").css("width", width);
        var contentHeights = contH(['.class_information>h4', '#searchForm'], 145);
        $("#jqGrid").jqGrid('setGridHeight', contentHeights);
    });

    /*读取表格数据的方法*/
    its = $("#jqGrid").jqGrid({
        /* data:json.data,*/
        url: ctx.path + "/api/wx/queryWxs",      
         datatype: "json",
        height:contentHeight,
        shrinkToFit:true,
        colNames: ['编号', '微信号', '客服名称', '电话号码','部门','部门id', '状态id','状态', '操作'],
        colModel: [{
            name: 'wxId',
            index: 'wxId',
            width: '10%',
            hidden:true
        },
        {
            name: 'wxAccount',
            index: 'wxAccount',
            width: '20%'
        },
        {
            name: 'wxName',
            index: 'wxName',
            width: '20%'
        },
        {
            name: 'wxPhone',
            index: 'wxPhone',
            width: '20%'
        },
        {
            name: 'departName',
            index: 'departName',
            width: '20%'
        },
        {
            name: 'departId',
            index: 'departId',
            width: '20%',
            hidden:true
        },
        {
            name: 'wxShow',
            index: 'wxShow',
            width: '10%',
            hidden:true
        },
        {
            name: 'wx',
            index: 'wx',
            width: '10%',
            cellattr: addClass_one
        },
        {
            name: 'act',
            index: 'act',
            width: '20%'
        }],
        gridComplete: function() {
            
         var ids = $("#jqGrid").jqGrid('getDataIDs');
            for (var i = 0; i < ids.length; i++) {
                var cl = ids[i];
                var rowData = $("#jqGrid").jqGrid('getRowData', cl);               
                var eid = '<a title="编辑" class="clickfn" href=\'javascript:void(0)\' '+
                'onclick=\'editFn("' + rowData.wxId + '","' + rowData.wxAccount + '","' + rowData.wxName + '","' + rowData.wxPhone + '","' + rowData.departName + '","' + rowData.wxShow + '");\' >编辑</a>';
                var del = '<a title="删除" class="clickfn" href=\'javascript:void(0)\' onclick=\'delFn("' + rowData.wxAccount + '","' + rowData.wxId + '");\' >删除</a>';
                if(rowData.wxShow!=1) {
                    var show = '<a title="设为显示" class="clickfn" href=\'javascript:void(0)\' onclick=\'showFn("' + rowData.wxId + '","' + rowData.wxAccount + '","' + rowData.wxName + '","' + rowData.wxPhone + '","' + rowData.departId + '","' + rowData.wxShow + '");\' >设为显示</a>';
                    var Newwx='<div class="wxShow">隐藏</div>';	
                }else {
                    var show = '<a title="取消显示" class="clickfn" href=\'javascript:void(0)\' onclick=\'showFn("' + rowData.wxId + '","' + rowData.wxAccount + '","' + rowData.wxName + '","' + rowData.wxPhone + '","' + rowData.departId + '","' + rowData.wxShow + '");\' >取消显示</a>';
                    var Newwx='<div class="wxShow">显示</div>';	
                }

                $("#jqGrid").jqGrid('setRowData', ids[i], {
                    act: eid+ del + show,
                    wx:Newwx
                });
            }

        },
        multiselect: false,
        cellEdit: true,
        autowidth: true,
        //自适应宽度 
        shrinkToFit: true,
        rowNum: 10,
        rowList: [10, 20, 50],
        rownumbers: true,
        //添加左侧行号
        altRows: true,
        //设置为交替行表格,默认为false
        pager: '#jqGridPager',
        viewrecords: true,
        //是否在浏览导航栏显示记录总数
        hidegrid: false,
        jsonReader: {　　root: "data.data",
            // Json数据
            records: "data.totalRows",
            // 总记录数
            total: "data.totalPages",
            page: "data.page",
            repeatitems: false　　
        }
    });
    // 设置按钮
    its.jqGrid('navGrid', '#jqGridPager', {
        edit: false,
        add: false,
        del: false,
        search: false
    },
    {
        height: 200,
        reloadAfterSubmit: true
    });

       //刷新表单
    function refreshGrid() {
        its.trigger("reloadGrid");
    }
        /*判断实际开课数的状态*/
    function addClass_one(rowId, val, rawObject, cm, rdata) {
       
            if (rawObject.wxShow=='1') {
                return 'class="red" ' + rawObject.wxShow + '"';
            } else if (rawObject.wxShow=='0') {
                return 'class="green" ' + rawObject.wxShow + '"';
            }        
    }
    //获取部门名称
        $.ajax({
            url: ctx.path + "/api/depart/queryDeparts",
            async: true,
            dataType: 'json',
            type: 'post',
            success: function(data) {
                if (data.rs == 1) {
                	var dataList=data.data.data;
                	var obj='<option value="">请选择</option>';
                	for(var i=0;i<dataList.length;i++) {
                		obj+='<option value="'+dataList[i].departId+'">'+dataList[i].departName+'</option>';
                	}
                	
                	$('#section').html(obj);
                }                
            }
        });
 
    //新增
    $('.edit_subject').click(function() {
        openWind('新增微信');
    });

        /*点击查询时的方法*/
    function itsRefresh(lessonid) {

        its.jqGrid('setGridParam', {
            url: ctx.path + "/api/wx/queryWxs",
            mtype: "POST",
            datatype: 'json',
            postData: lessonid
        }).trigger("reloadGrid", [{
            page: 1
        }]);
    }


    //查询框的操作
    $('.titled .input-sub').click(function() {
        var search=$('#search').val();
        var dataAll={wxName:search};
        itsRefresh(dataAll);

    })

});

//打开新增窗体
function openWind(title) {
    $('#addUser').show();
        $('#weChat').val('');
        $('#name').val('');
        $('#phone').val('');
        //重置部门
        for(var i=0;i<$('#section option').length;i++) {
        	
        		$('#section option').eq(i).prop('selected',false);
        
        }
        
        //设置显示隐藏
        for(var i=0;i<$('#state option').length;i++) {
        
        		$('#state option').eq(i).prop('selected',false);
        	
        }
        
    var parentIndex = layer.open({
        type: 1,
        //page层
        area: ['45%', 'auto'],
        title: title,
        fix: false,
        maxmin: false,
        content: $('#addUser'),
        btn: ['提交', '取消'],
        yes: function(index, layero) {
            var weChat=$('#weChat').val();
            var name=$('#name').val();
            var phone=$('#phone').val();
            var section=$('#section').children('option:selected').val();
            var state=$('#state').children('option:selected').val();
            if(isNullValue(weChat) || isNullValue(name) ||isNullValue(phone) || isNullValue(section) || isNullValue(state)) {
                layer.alert('请输入完整的信息',{icon:2});
            }else{
                          $.ajax({
        url:ctx.path + "/api/wx/addWx",
        async: true,
        data:{wxAccount:weChat,
        	wxPhone:phone,
        	wxName:name,
        	departId:section,
        	wxShow:state,},
        dataType: 'json',
        type: 'post',
        success: function(data) {
            if (data.rs == 1) {
                layer.close(parentIndex);
               layer.msg('新增成功',{icon:1});
               its.trigger("reloadGrid");
            }
        }
    });

            }

        },
        cancel: function(index) {
            $('#addUser').hide();
        }
    });
    return parentIndex;
}

//编辑操作
function editFn(num,Wechat,name,phone,section,wxShow) {
    var newSec=section;
    var wxshow=wxShow;
    $('#weChat').val(Wechat);
    $('#name').val(name);
    $('#phone').val(phone);
    $('#addUser').show();
    //设置部门名称
    for(var i=0;i<$('#section option').length;i++) {
    	if(newSec==$('#section option').eq(i).html()) {
    		$('#section option').eq(i).prop('selected',true);
    		
    	}
    }
    //设置显示隐藏
    for(var i=0;i<$('#state option').length;i++) {
    	if(wxshow==$('#state option').eq(i).val()) {
    		$('#state option').eq(i).prop('selected',true);
    		
    	}
    }
  
    
    var parentIndexs = layer.open({
        type: 1,
        //page层
        area: ['45%', 'auto'],
        title: '编辑',
        fix: false,
        maxmin: false,
        content: $('#addUser'),
        btn: ['提交', '取消'],
        yes: function(index, layero) {
            var weChat=$('#weChat').val();
            var name=$('#name').val();
            var phone=$('#phone').val();
            var section=$('#section').children('option:selected').val();
            var state=$('#state').children('option:selected').val();
            if(isNullValue(weChat) || isNullValue(name) ||isNullValue(phone) || isNullValue(section) || isNullValue(state)) {
                layer.alert('请输入完整的信息',{icon:2});
            }else{
                          $.ajax({
        url:ctx.path + "/api/wx/updateWx",
        async: true,
        data:{wxId:num,
        	wxAccount:weChat,
        	wxPhone:phone,
        	wxName:name,
        	departId:section,
        	wxShow:state},
        dataType: 'json',
        type: 'post',
        success: function(data) {
            if (data.rs == 1) {
                layer.close(parentIndexs);
               layer.msg('修改成功',{icon:1});
               its.trigger("reloadGrid");
            }
        }
    });

            }
        },
        cancel: function(index) {
            $('#addUser').hide();
        }
    });
    return parentIndexs;
}

//删除
function delFn(name,id) {
        var title = "您确定把删除微信号:【" + name + "】吗？";
        layer.confirm(title, {
            icon: 3,
            btn: ['确定', '取消'] //按钮
        },
        function() {

            $.ajax({
                url: ctx.path + "/api/wx/delWx",
                data: {
                	wxId: id
                },
                async: false,
                dataType: 'json',
                type: 'get',
                success: function(data) {
                    if (data.rs == 1) {

                        layer.msg('删除成功！', {
                            icon: 1
                        });
                        its.trigger("reloadGrid");
                    }
                    if (data.rs == 0) {
                        layer.msg(data.msg, {
                            icon: 3
                        });
                    }
                }
            });
        },
        function() {

});
}


//设为显示
function showFn(num,Wechat,name,phone,section,wxShow) {
	var wxshow=wxShow;
	if(wxshow==1) {
		  var title = "您确定把微信号:【" + Wechat + "】取消显示吗？";
		  wxshow=0;
	}else {
		  var title = "您确定把微信号:【" + Wechat + "】设为显示吗？";
		  wxshow=1;
	}
      
        layer.confirm(title, {
            icon: 3,
            btn: ['确定', '取消'] //按钮
        },
        function() {

            $.ajax({
                url: ctx.path + "/api/wx/updateWx",
                data: {
                	wxId:num,
                	wxAccount:Wechat,
                	wxPhone:phone,
                	wxName:name,
                	departId:section,
                	wxShow:wxshow
                },
                async: false,
                dataType: 'json',
                type: 'post',
                success: function(data) {
                    if (data.rs == 1) {
                    	if(wxshow==1){
                            layer.msg('设为显示成功！', {
                                icon: 1
                            });	
                    	}else {
                            layer.msg('取消显示成功！', {
                                icon: 1
                            });
                    	}

                        its.trigger("reloadGrid");
                    }
                    if (data.rs == 0) {
                        layer.msg(data.msg, {
                            icon: 3
                        });
                    }
                }
            });
        },
        function() {

});
}

