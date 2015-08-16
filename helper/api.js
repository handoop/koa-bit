/**
 * Created by thanatos on 15-8-10.
 */
var config = require('./config')
var thrift = require('thrift')
var program = require('commander')

program
    .option('-p, --protocol <protocol>', 'Set thift protocol (binary|json) [protocol]')
    .option('-t, --transport <transport>', 'Set thift transport (buffered|framed) [transport]')
    .option('--ssl', 'use ssl transport')
    .parse(process.argv);

var transport =  thrift.TBufferedTransport
if (program.transport === "framed") {
    transport = thrift.TFramedTransport
}

var protocol = thrift.TBinaryProtocol
if (program.protocol === "json") {
    protocol = thrift.TJSONProtocol
}

var options = {
    connect_timeout: 10000,
    retry_delay: 2000,
    transport: transport,
    protocol: protocol
};

var connection;

(function reconnection() {
    if (program.ssl) {
        options.rejectUnauthorized = false;
        connection = thrift.createSSLConnection(config.RPC_IP, 9090, options);
    } else {
        connection = thrift.createConnection(config.RPC_IP, 9090, options);
    }

    connection.on('error', function (err) {
        console.error("connection 搜索服务错误：%s", err);
        reconnection()
    })
})()



var mp = new thrift.Multiplexer();

//api service
var expertAPIProxy = require('../proxy/ExpertAPIProxy')
var searchAPIProxy = require('../proxy/SearchAPIProxy')
var graphicAPIProxy = require('../proxy/GraphicAPIProxy')

//note : connection的时候thrift总是连接两次，第一次会将pool里面的service删掉
//            第二次因为上一次将service删掉的原因就报undefined异常，所以我不得不
//            修改源代码将删除操作注释掉

module.exports = {

    connection : connection,

    _expert_ : mp.createClient('ExpertAPIProxy', expertAPIProxy, connection),

    _search_ : mp.createClient('SearchAPIProxy', searchAPIProxy, connection),

    _graphic_ : mp.createClient('GraphicAPIProxy', graphicAPIProxy, connection)

}

