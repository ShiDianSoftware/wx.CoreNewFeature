# wx.CoreNewFeature


一、快速安装：
===================

#### 1.集成框架，将CoreNewFeature复制到FrameWorks中。

#### 2.集成.js：在项目的入口页面js文件中

    let CoreNewFeature = require("../FrameWorks/CoreNewFeature/CoreNewFeature.js")

#### 3.集成.wxml：在项目的入口页面wxml文件中

    <include src="/pages/FrameWorks/CoreNewFeature/CoreNewFeature.wxml" />

#### 4.集成.wxss：在app.wxss文件中

    @import "/pages/FrameWorks/CoreNewFeature/CoreNewFeature.wxss"

二、快速使用：
===================

请一定要在项目中的onshow中使用：

      onShow: function(){
        let imgs = [
          "http://im6.leaderhero.com/wallpaper/213/9387294b039c442f9f23470caf8dc238.jpg",
          "http://im6.leaderhero.com/wallpaper/213/9387294b039c442f9f23470caf8dc238.jpg",
          "http://im6.leaderhero.com/wallpaper/213/9387294b039c442f9f23470caf8dc238.jpg",
          "http://im6.leaderhero.com/wallpaper/213/9387294b039c442f9f23470caf8dc238.jpg"
        ]
        CoreNewFeature.showInVC(this, '1.5', imgs)
      }
