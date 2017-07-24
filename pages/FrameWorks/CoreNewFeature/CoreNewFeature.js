function CoreNewFeature(){}

CoreNewFeature.anim_creator = wx.createAnimation({

  transformOrigin: "50% 50% 0",
  duration: 1200,
  timingFunction: "ease-out",
  delay: 0

});

CoreNewFeature.showInVC = function(vc, version, imgs){
  let key = 'CoreNF_version'
  let lastVersion = wx.getStorageSync(key)

  if (typeof lastVersion == 'undefined' || version <= lastVersion) {return}

  wx.setStorage({
    key: key,
    data: version
  })

  let count = imgs.length

  vc.CoreNF_changeAction = function (e) {

    let CoreNF_now_page = e.detail.current 
    vc.CoreNF_now_page = CoreNF_now_page
  }

  vc.CoreNF_tapAction = function () {

    let current_page = typeof vc.CoreNF_now_page == 'undefined' ? 0 : vc.CoreNF_now_page

    if (current_page != count-1) {return}

    //CoreNF_anim
    CoreNewFeature.anim_creator.opacity(0).translateX(-500).step()

    this.setData({ CoreNF_anim: CoreNewFeature.anim_creator.export(), CoreNF_Ready:true})
    setTimeout(() => {
      this.setData({ CoreNF_hide: true, CoreNF_Ready: false})
    }, 1300)
  }

  vc.setData({ CoreNF_imgs: imgs, CoreNF_Ready: true})


}

module.exports = CoreNewFeature