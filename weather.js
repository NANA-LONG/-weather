// pages/network/network.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    view: ' ',
    xianshi: ' ',
    img: '',
    tq: '',
    wendu: ''
  },
  link: function (e) {
    this.setData({
      view: e.detail.value
    })
  },
  btn: function () {
    wx.request({
      url:  'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=Vg1b3ay0XYac3nr3wEeurmUBqfq3QhX9&location=' + this.data.view,
      date: '',
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res)
        console.log(res.data.results[0].weather_data[0].date)
        this.setData({
          xianshi: res.data.results[0].weather_data[0].date,
          img: res.data.results[0].weather_data[0].dayPictureUrl,
          tq: res.data.results[0].weather_data[0].weather,
          wendu: res.data.results[0].weather_data[0].temperature + res.data.results[0].weather_data[0].wind
        })

      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.request({
      url: 'Vg1b3ay0XYac3nr3wEeurmUBqfq3QhX9',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})