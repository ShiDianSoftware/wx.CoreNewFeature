// pages/Index/Index.js
let CoreNewFeature = require("../FrameWorks/CoreNewFeature/CoreNewFeature.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  onShow: function(){
    let imgs = [
      "http://im6.leaderhero.com/wallpaper/213/9387294b039c442f9f23470caf8dc238.jpg",
      "http://im6.leaderhero.com/wallpaper/213/9387294b039c442f9f23470caf8dc238.jpg",
      "http://im6.leaderhero.com/wallpaper/213/9387294b039c442f9f23470caf8dc238.jpg",
      "http://im6.leaderhero.com/wallpaper/213/9387294b039c442f9f23470caf8dc238.jpg"
    ]
    CoreNewFeature.showInVC(this, '1.5', imgs)
  }

})