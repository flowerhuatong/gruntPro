exports.login = {
  state: '10000',
  message: '成功',
  data: {
    roleId: 1,
    userId: 2,
    realName: 'Admin'
  }
};

exports.businessLine={
  state:'10000',
  data:[
   {
     businessLineCode:'1', //业务线
     businessLineName:'天猫'  //业务线名称名称
   },
    {
     businessLineCode:'3', //业务线
     businessLineName:'移动商城'  //业务线名称名称
   },
    {
     businessLineCode:'2', //业务线
     businessLineName:'银行总对总'  //业务线名称名称
   },
    {
     businessLineCode:'4', //业务线
     businessLineName:'灵犀业务'  //业务线名称名称
   },
    {
     businessLineCode:'5', //业务线
     businessLineName:'有价卡'  //业务线名称名称
   }
  ]
};
exports.provinces = [
  {provinceName:'新疆',provinceCode:'991',provinceAbbr:'xj',provincePinyin:'xinjiang'},
  {provinceName:'江苏',provinceCode:'250',provinceAbbr:'js',provincePinyin:'jiangsu'},
  {provinceName:'浙江',provinceCode:'571',provinceAbbr:'zj',provincePinyin:'zhejiang'},
  {provinceName:'江西',provinceCode:'791',provinceAbbr:'jx',provincePinyin:'jiangxi'},
  {provinceName:'湖北',provinceCode:'270',provinceAbbr:'hb',provincePinyin:'hubei'},
  {provinceName:'广西',provinceCode:'771',provinceAbbr:'gx',provincePinyin:'guangxi'},
  {provinceName:'甘肃',provinceCode:'931',provinceAbbr:'gs',provincePinyin:'gansu'},
  {provinceName:'山西',provinceCode:'351',provinceAbbr:'sx',provincePinyin:'shanxi'},
  {provinceName:'内蒙古',provinceCode:'471',provinceAbbr:'nmg',provincePinyin:'neimenggu'},
  {provinceName:'陕西',provinceCode:'290',provinceAbbr:'sx',provincePinyin:'shanxi'},
  {provinceName:'吉林',provinceCode:'431',provinceAbbr:'jl',provincePinyin:'jilin'},
  {provinceName:'福建',provinceCode:'591',provinceAbbr:'fj',provincePinyin:'fujian'},
  {provinceName:'贵州',provinceCode:'851',provinceAbbr:'gz',provincePinyin:'guizhou'},
  {provinceName:'广东',provinceCode:'200',provinceAbbr:'gd',provincePinyin:'guangdong'},
  {provinceName:'青海',provinceCode:'971',provinceAbbr:'qh',provincePinyin:'qinghai'},
  {provinceName:'西藏',provinceCode:'891',provinceAbbr:'xz',provincePinyin:'xizang'},
  {provinceName:'四川',provinceCode:'280',provinceAbbr:'sc',provincePinyin:'sichuan'},
  {provinceName:'宁夏',provinceCode:'951',provinceAbbr:'nx',provincePinyin:'ningxia'},
  {provinceName:'海南',provinceCode:'898',provinceAbbr:'hn',provincePinyin:'hainan'},
  {provinceName:'北京',provinceCode:'100',provinceAbbr:'bj',provincePinyin:'beijing'},
  {provinceName:'天津',provinceCode:'220',provinceAbbr:'tj',provincePinyin:'tianjin'},
  {provinceName:'上海',provinceCode:'210',provinceAbbr:'sh',provincePinyin:'shanghai'},
  {provinceName:'重庆',provinceCode:'230',provinceAbbr:'cq',provincePinyin:'chongqing'},
  {provinceName:'河北',provinceCode:'331',provinceAbbr:'hb',provincePinyin:'hebei'},
  {provinceName:'河南',provinceCode:'371',provinceAbbr:'hn',provincePinyin:'henan'},
  {provinceName:'云南',provinceCode:'871',provinceAbbr:'yn',provincePinyin:'yunnan'},
  {provinceName:'辽宁',provinceCode:'240',provinceAbbr:'ln',provincePinyin:'liaoning'},
  {provinceName:'黑龙江',provinceCode:'451',provinceAbbr:'hlj',provincePinyin:'heilongjiang'},
  {provinceName:'湖南',provinceCode:'731',provinceAbbr:'hn',provincePinyin:'hunan'},
  {provinceName:'安徽',provinceCode:'551',provinceAbbr:'ah',provincePinyin:'anhui'},
  {provinceName:'山东',provinceCode:'531',provinceAbbr:'sd',provincePinyin:'shandong'}
];

//接入渠道查询
exports.accessChannels = {
  state:'10000',
  data:[
    {businessLineCode:'001', channelCode:'11', channelName:'天猫'},

    {businessLineCode:'002', channelCode:'21', channelName:'移动商城'},

    {businessLineCode:'003', channelCode:'31', channelName:'移动网站'},
    {businessLineCode:'003', channelCode:'32', channelName:'移动营业厅'},
    {businessLineCode:'003', channelCode:'33', channelName:'移动热线'},
    {businessLineCode:'003', channelCode:'34', channelName:'移动短信营业厅'},
    {businessLineCode:'003', channelCode:'35', channelName:'银行电子渠道'},
    {businessLineCode:'003', channelCode:'36', channelName:'银行营业厅'},
    {businessLineCode:'003', channelCode:'37', channelName:'其他渠道'}
  ]
};

//机构
exports.agencyQuery={
       state: '10000',  //”10000” 代表成功   “10001”  失败
       data:[
       {
       organizationCode:'10001',//机构代码统一支付系统、招商银行、建设银行、浦发银行、其他银行、浙江电商中心 //、天猫商城、北京CRM、上海CRM、河北CRM，默认统一支付系统；
       organizationName:'统一支付系统'
       },
        {
       organizationCode:'10002',//机构代码统一支付系统、招商银行、建设银行、浦发银行、其他银行、浙江电商中心 //、天猫商城、北京CRM、上海CRM、河北CRM，默认统一支付系统；
       organizationName:'招商银行'
        },
        {
       organizationCode:'10003',//机构代码统一支付系统、招商银行、建设银行、浦发银行、其他银行、浙江电商中心 //、天猫商城、北京CRM、上海CRM、河北CRM，默认统一支付系统；
       organizationName:'建设银行'
       },
        {
       organizationCode:'10004',//机构代码统一支付系统、招商银行、建设银行、浦发银行、其他银行、浙江电商中心 //、天猫商城、北京CRM、上海CRM、河北CRM，默认统一支付系统；
       organizationName:'浦发银行'
       },
       {
       organizationCode:'10005',//机构代码统一支付系统、招商银行、建设银行、浦发银行、其他银行、浙江电商中心 //、天猫商城、北京CRM、上海CRM、河北CRM，默认统一支付系统；
       organizationName:'浙江电商中心'
       }
  ]
};

//交易状态查询
exports.tradeState = {
  state:'10000',
  data:[
    {tradeStateCode:'1',tradeStateName:'充值成功'},
    {tradeStateCode:'2',tradeStateName:'交易失败'}
  ]
};

exports.tradeType = {
  state:'10000',
  data:[
  {tradeTypeCode:'01',tradeTypeName:'充值'},
  {tradeTypeCode:'03',tradeTypeName:'缴费'},
  {tradeTypeCode:'04',tradeTypeName:'签约'},
  {tradeTypeCode:'05',tradeTypeName:'解约'}
  ]
};

//查询系统名称
exports.system = {
  state:'10000',
  message:'成功',
  data:[{systemCode:'11',systemName:'统一支付'},{systemCode:'22',systemName:'物联网'}]
};

//查询业务名称-->统一支付
exports.upayBusiness = {
  state:'10000',
  message:'你秀逗了',
  data:[
    {businessCode:'01',businessName:'签约'},
    {businessCode:'02',businessName:'缴费'},
    {businessCode:'03',businessName: '充值'}
  ]
};

exports.pbossBusiness = {
  state : '10000',
  data :[
    {businessCode:'1',businessName:'个人服务开通'},
    {businessCode:'2',businessName:'个人订购'},
    {businessCode:'3',businessName:'ec信息开户'},
    {businessCode:'4',businessName:'ec产品订购'},
    {businessCode:'5',businessName:'ec成员产品订购'},
    {businessCode:'6',businessName:'开卡'}
  ]
};

//查询业务名称
exports.serverTime = {
  state:'10000',
  data:1427277082978
};

//下级角色查询
exports.roleData={
  state:'10000',
  roleId:'1',
  data:[
         {roleId:'1',roleName:'系统管理员'},
         { roleId:'2', roleName:'管理员', parentRole:'1'},
         {roleId:'3',roleName:'维护管理员',parentRole:'2'},
         { roleId:'4', roleName:'财务管理员', parentRole:'2'},
         { roleId:'5', roleName:'逗比管理员', parentRole:'3' },
         { roleId:'6', roleName:'神兽管理员', parentRole:'4' }
       ]
};
exports.queryUserModule = {
  state: '10000',
  data: [
    {moduleName: '业务质量分析',moduleId: 16,childModule: null,url:'sas.omdisplay'},
    {moduleName: '动态实时数据',moduleId: 17,childModule: null,url:'sas.timeDataDis'},
    {moduleName: '重大活动页面定制',moduleId: 18,childModule: null,url:'sas.activity'},
    {moduleName: '数据管理',moduleId: 19,childModule: null,url:'sas.dataQualityMng'},
    {moduleName: '故障定位',moduleId: 20,childModule: null,url:'sas.faultLocation'},
    {moduleName: '运维数据展示',moduleId: 21,childModule: null,url:'sas.oldOMDisplay'},
    {moduleName: '资源监控数据',moduleId: 22,childModule: null,url:'sas.resourcesWatchData'},
    {moduleName: '系统服务数据',moduleId: 23,childModule: null,url:'sas.sysServiceData'},
    {moduleName: '系统业务量统计',moduleId: 24,childModule: null,url:'sas.faultLocation'},
    {moduleName: '系统管理',moduleId: 25,childModule: null,url:'sas.userAll'},
    {moduleName: '业务量统计',moduleId: 25,childModule: null,url:'sas.omdisplay.sysBusinessStatistics.sumStatistics'}
  ]
};
exports.queryMeasureIndex = {
  state: '10000',
  data:[
    {measureIndexCode:'h1001',measureIndexName:'变更来源'},
    {measureIndexCode:'h1003',measureIndexName:'变更影响度'},
    {measureIndexCode:'h1004',measureIndexName:'变更紧急度'},
    {measureIndexCode:'h1005',measureIndexName:'风险等级'},
    {measureIndexCode:'h1002',measureIndexName:'变更实施结果'},
    {measureIndexCode:'h1006',measureIndexName:'变更成功率'},
  ]
};
exports.queryMeasureIndex1 = {
  state: '10000',
  data:[
    {measureIndexCode:'h2001',measureIndexName:'事件总数'},
    {measureIndexCode:'h2002',measureIndexName:'已关闭事件'},
    {measureIndexCode:'h2003',measureIndexName:'规定时间内解决事件'},
    {measureIndexCode:'h2004',measureIndexName:'平均解决时间'},
    {measureIndexCode:'h2005',measureIndexName:'平均审核时间'},
    {measureIndexCode:'h2006',measureIndexName:'平均关闭时间'},
    {measureIndexCode:'h2007',measureIndexName:'升级事件所占比率'},
    {measureIndexCode:'h2008',measureIndexName:'重开事件所占比率'},
  ]
};
exports.queryMeasureIndex2 = {
  state: '10000',
  data:[
    {measureIndexCode:'h3001',measureIndexName:'已关闭事件所占比率'},
    {measureIndexCode:'h3002',measureIndexName:'规定时间内解决事件所占比率'},
    {measureIndexCode:'h3003',measureIndexName:'一线维护率'},
    {measureIndexCode:'h3004',measureIndexName:'一次性通过率'},
    {measureIndexCode:'h3005',measureIndexName:'工单升级率'},
    {measureIndexCode:'h3006',measureIndexName:'处理正确率'},
    {measureIndexCode:'h3007',measureIndexName:'告警平均解决时间'},
    {measureIndexCode:'h3008',measureIndexName:'告警处理及时率'},
    {measureIndexCode:'h3009',measureIndexName:'告警单成功关闭比率'},
  ]
};
exports.queryMeasureIndex3 = {
  state: '10000',
  data:[
    {measureIndexCode:'15601',measureIndexName:'问题单'},
    {measureIndexCode:'h4002',measureIndexName:'已关闭问题'},
    {measureIndexCode:'h4003',measureIndexName:'已关闭问题所占比率'},
    {measureIndexCode:'h4004',measureIndexName:'规定时间内解决问题'},
    {measureIndexCode:'h4005',measureIndexName:'规定时间内解决问题所占比率'},
    {measureIndexCode:'h4006',measureIndexName:'问题单平均解决时间'},
  ]
};
exports.queryMeasureIndex4 = {
  state: '10000',
  data:[
    {measureIndexCode:'h5001',measureIndexName:'发布版本统计'},
    {measureIndexCode:'h5002',measureIndexName:'发布阶段天数统计'},
  ]
};

exports.queryWorkDataType = {
  state: '10000',
  data:[
    {workOrderTypeCode:'15601',workOrderTypeName:'问题单'},
    {workOrderTypeCode:'305565',workOrderTypeName:'任务单'},
    {workOrderTypeCode:'5007',workOrderTypeName:'事件单'},
    {workOrderTypeCode:'24807',workOrderTypeName:'变更单'},
  ]
};
exports.queryStatisticsType = {
  state: '10000',
  data:[
    {statisticsTypeCode:'t1001',statisticsTypeName:'工单'},
    {statisticsTypeCode:'5007',statisticsTypeName:'事件单'},
    {statisticsTypeCode:'305565',statisticsTypeName:'任务单'},
    {statisticsTypeCode:'24807',statisticsTypeName:'变更单'},
    {statisticsTypeCode:'15601',statisticsTypeName:'问题单'},
    {statisticsTypeCode:'t1006',statisticsTypeName:'工单解决率'},
    {statisticsTypeCode:'t1007',statisticsTypeName:'及时处理率'},
  ]
};
exports.queryStatisticsType1 = {
  state: '10000',
  data:[
    {statisticsTypeCode:'t2001',statisticsTypeName:'NC比例'},
      {statisticsTypeCode:'t2002',statisticsTypeName:'严重NC比例'}
  ]
};
exports.allSystemModules = {
  result: 0,
  resultDesc: '查询成功',
  data:{
    loginUser: 'admin',
    moduleIds: [200000,200100,200200,200300,200400,200500,200600,200700,200800,200900,
              201000,201100,201200,200010,200020,200030,200040,200050,200060,
              200110,200120,200130,200210,200220,200230,200240,200250,200260,
              200270,200310,200320,200410,200420,200430,200510,200520,200530,
              200540,200550,200610,200620,200710,200720,200730,00740,200750,
              200760,200770,200780,200790,200910,200920,200930,200940,200950,
              200960,201010,201020,201030,201040,201050,201110,201120,201130,
              201210,201220,201230,201240,201250,200012,200013,200011,200740,
              200031,200041,200042,200051,200052,200061,200111,200112,200121,
              200122,200131,200211,200221,200222,200231,200232,200241,200242,
              200251,200261,200271,200272,200273,200311,200312,200313,200321,
              200322,200411,200412,200421,200431,200432,200433,20051,200521,200021,
              200522,200523,200524,200531,200532,200533,200541,200551,200611,
              200621,200711,200712,200721,200722,200731,200732,200733,200734,
              200741,200742,200743,200761,200762,200763,200764,200765,200766,
              200767,200768,200771,200772,200773,200774,200775,200776,200777,
              200781,200782,200791,200911,200912,200921,200931,200941,200951,
              200961,201011,201021,201031,201041,201051,201111,201121,201122,
              201131,201211,201212,201221,201231,201241,201242,201251,201252,
              201253,200511,201300,201310,201320,201330,201340,201350,201311,201321,
              201331,201341,201342,201351,201352,201400,201410,201420,201430,201440,
              201450],
    roleId: 1,
    roleName: '超级管理员',
    staffName: '系统管理员'
  }
};
exports.exit = {
  result: 0,
  resultDesc: '退出成功',
  data: 'http://localhost:9000/#/sas/omdisplay'
};