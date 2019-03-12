let Mock = require('mockjs');

let server_lxd = require('./server_lxd');

//模拟请求延时
Mock.setup({
	timeout: '50-150'
});

server_lxd.use(Mock);