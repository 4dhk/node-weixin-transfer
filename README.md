# weixin-transfer
A node module for you to integrate Weixin transfer (企业付款)

## Read more about Weixin Transfer here:
- https://pay.weixin.qq.com/wiki/doc/api/mch_pay.php?chapter=14_1

## How to use

    var WeixinTransfer = require('weixin-transfer');
    var wt = new WeixinTransfer({
        mch_appid: "wxe062425f740c30d8"
        , mchid: "10000098"
        , nonce_str: "3PG2J4ILTKCH16CQ2502SI8ZNMTM67VS"
        , partner_trade_no: "100000982014120919616"
        , openid: "ohO4Gt7wVPxIT1A9GjFaMYMiZY1s"
        , check_name: "OPTION_CHECK"
        , re_user_name: "张三"
        , amount: "100"
        , desc: "节日快乐!"
        , spbill_create_ip: "10.2.3.10"
        , sign: "C97BDBACF37622775366F38B629F45E3"
        , cert: "/certs/apiclient_cert.p12"
        , ca: "/certs/rootca.pem"
    },functions(err,results){
        if (err) throw err;
        //do stuff!
        console.log(results);
    });

