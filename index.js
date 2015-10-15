var https = require('https'),
    parseString = require('xml2js').parseString;

function WeixinTransfer(){

}

WeixinTransfer.prototype.transfer = function transfer(options, callback){
  var body = '<xml>'+
  '<mch_appid>'+options.mch_appid+'</mch_appid>'+
  '<mchid>'+options.mchid+'</mchid>'+
  '<nonce_str>'+options.nonce_str+'</nonce_str>'+
  '<partner_trade_no>'+options.partner_trade_no+'</partner_trade_no>'+
  '<openid>'+options.openid+'</openid>'+
  '<check_name>'+options.check_name+'</check_name>'+
  '<re_user_name>'+options.re_user_name+'</re_user_name>'+
  '<amount>'+options.amount+'</amount>'+
  '<desc>'+options.desc+'!</desc>'+
  '<spbill_create_ip>'+options.spbill_create_ip+'</spbill_create_ip>'+
  '<sign>'+options.sign+'</sign>'+
  '</xml>';

  var postRequest = {
    hostname: "api.mch.weixin.qq.com",
    path: "/mmpaymkttransfers/promotion/transfers",
    port: 443,
    method: "POST",
    headers: {
        'Cookie': "cookie",
        'Content-Type': 'text/xml',
        'Content-Length': Buffer.byteLength(body)
    },
    key: options.key,
    cert: options.cert,
    ca: options.ca
  };

  var buffer = "";

  var req = https.request( postRequest, function( res )    {

    var buffer = "";
    res.on( "data", function( data ) { buffer = buffer + data; } );
    res.on( "end", function( data ) { 
      parseString(buffer, function (err, result) {
        callback(null, JSON.stringify(result));
      });
    } );

  });

  req.on('error', function(e) {
    callback(e.message);
  });

  req.write( body );
  req.end();

}

module.exports = WeixinTransfer;