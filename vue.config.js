const path = require("path")
module.exports = {
    //跨域的配置
    devServer:{
        proxy:{
            "/api":{
                target:"http://39.97.33.178",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@common":path.join(__dirname,"./src/common"),
                "@components":path.join(__dirname,"./src/components"),
                "@lib":path.join(__dirname,"./src/lib"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@static":path.join(__dirname,"./src/static"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils"),
            }
        }
    }
}

