// MySQL数据库连接配置
var mysql = require('mysql');
exports.db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'sina_blog',
    user: 'root',
    password: '123456789'
});

// 博客配置
exports.sinaBlog = {
    url:'http://blog.sina.com.cn/u/1776757314' // 博客首页地址
};

// Web服务器端口
exports.port = 3000;

// 定时更新
//f1 f2 f3 f4 f5 f5 f6
//其中 f1 表示秒钟，f2 表示分钟，f3 表示小时，f4 表示一个月份中的第几//日，f5 表示月 份，f6 表示一个星期中的第几天。各部分的取值含义如下（//以 f1 部分为例，其他部分类 似）：
//当值为 * 时，表示每秒执行一次；
//当值为 a-b 时，表示从第 a 秒钟到第 b 秒钟这段时间内执行一次；
//当值为 */n 时，表示每隔 n 秒钟执行一次；
//当值为 a-b/n 时，表示从第 a 秒钟到第 b 秒钟这段时间内每隔 n //秒钟执行一次。
exports.autoUpdate = '* */30 * * *';