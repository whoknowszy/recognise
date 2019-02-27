// ecosystem.config.js
module.exports = {
    apps: [{
        // 生产环境
        name: "prod-implant",
        // 项目启动入口文件
        script: "./bin/www",
        //监听重启
        watch:true,
        //最大内存限制数
        max_memory_restart:8,
        // 应用运行少于时间被认为是异常启动
        min_uptime: "60s",
        //最大异常重启次数
        max_restarts:30,
        // 项目环境变量
        env: {
            "NODE_ENV": "production",
            "PORT": 80
        }
    }, {
        //监听重启
        watch:true,
        //最大内存限制数
        max_memory_restart:8,
        // 应用运行少于时间被认为是异常启动
        min_uptime: "60s",
        //最大异常重启次数
        max_restarts:30,
        // 测试环境
        name: "test-implant",
        script: "./bin/www",
        env: {
            "NODE_ENV": "test",
            "PORT": 80
        }
    },{
        //监听重启
        watch:true,
        //最大内存限制数
        max_memory_restart:8,
        // 应用运行少于时间被认为是异常启动
        min_uptime: "60s",
        //最大异常重启次数
        max_restarts:30,
        // 开发环境
        name: "dev-implant",
        script: "./bin/www",
        env: {
            "NODE_ENV": "dev",
            "PORT": 80
        }
    }
    ]
}