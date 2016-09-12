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
       url: ctx.path + "/api/depart/queryDeparts",      
        datatype: "json",
        height:contentHeight,
        shrinkToFit:true,
        colNames: ['部门id', '名称', '操作'],
        colModel: [{
            name: 'departId',
            index: 'departId',
            width: '10%',
            hidden:true
        },
        {
            name: 'departName',
            index: 'departName',
            width: '20%'
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
                'onclick=\'editFn("' + rowData.departId + '","' + rowData.departName + '");\' >编辑</a>';
                var del = '<a title="删除" class="clickfn" href=\'javascript:void(0)\' onclick=\'delFn("' + rowData.departName + '","' + rowData.departId + '");\' >删除</a>';
                
                $("#jqGrid").jqGrid('setRowData', ids[i], {
                    act: eid+ del
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


    //新增
    $('.edit_subject').click(function() {
        openWind('新增部门');
    });

        /*点击查询时的方法*/
    function itsRefresh(lessonid) {

        its.jqGrid('setGridParam', {
            url: ctx.path + "/api/depart/queryDeparts",
            mtype: "POST",
            datatype: 'json',
            postData: lessonid
        }).trigger("reloadGrid", [{
            page: 1
        }]);
    }


    //查询框的操作
    $('.titled .input-sub').click(function() {
        var search={departName:$('#search').val()};
        itsRefresh(search);
    })

});

//打开新增窗体
function openWind(title) {
    $('#addUser').show();
        $('#weChat').val('');
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
            if(isNullValue(weChat)) {
                layer.alert('请输入完整的信息',{icon:2});
            }else{
                          $.ajax({
        url:ctx.path + "/api/depart/addDepart",
        data:{departName:weChat},
        async: true,
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
function editFn(num,Wechat) {
    
    $('#weChat').val(Wechat);

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
    
            if(isNullValue(weChat)) {
                layer.alert('请输入完整的信息',{icon:2});
            }else{
                          $.ajax({
        url:ctx.path + "/api/depart/updateDepart",
        async: true,
        data:{departId:num,
        	departName:weChat},
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
        var title = "您确定把删除部门:【" + name + "】吗？";
        layer.confirm(title, {
            icon: 3,
            btn: ['确定', '取消'] //按钮
        },
        function() {

            $.ajax({
                url: ctx.path + "/api/depart/delDepart",
                data: {
                	departId: id
                },
                async: false,
                dataType: 'json',
                type: 'post',
                success: function(data) {
                    if (data.rs == 1) {

                        layer.msg('删除部门成功！', {
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


