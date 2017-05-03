exports.request = function(app,queryResponse){
  
  app.post('/anguPro/common/provinceQuery', function (req, res) {
    var resValue = {
      state: '10000',
      data: queryResponse.provinces
    };
    res.send(resValue);
  });
 
  app.get('/anguPro/common/exit',function(req,res){
    res.send(queryResponse.exit);
  });
};