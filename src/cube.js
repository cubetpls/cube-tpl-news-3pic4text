export default {
  data: {
    loading: true,
    picList: [],
    textList: []
  },
  onReady() {
    this.request({
      api:'list',
      complete: (offlineData, res) => {
        const _this = this
        this.setData({
          loading: false
        })

        if (res && res.errno === 0 && res.data && res.data.length > 0) {
          const fmtData = _this.formatData(res.data);
          _this.setStorage({
            key: 'data',
            data: fmtData
          })

          _this.handleData(fmtData)
        } else {
          _this.getStorage({
            key: 'data',
            success (res) {
              const data = res || offlineData
              _this.handleData(data)
            }
          })
        }
      }
    })
  },
  formatData (data) {
    return data.map(item => {
      return {
        title: item.title || '',
        img: item.image || '',
        url: `https://yule.360.com/detail/${item.id}`
      }
    })
  },
  handleData (data) {
    this.setData({
      picList: data.slice(0, 3),
      textList: data.slice(3, 7)
    })
  }
};
