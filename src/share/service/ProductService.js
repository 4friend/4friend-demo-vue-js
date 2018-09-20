import Vue from 'vue'

export default {
  getProductList (pageIndex, pageSize) {
    let config = {
      params: {
        pageIndex: pageIndex,
        pageSize: pageSize
      }
    }
    return Vue.http.get('products', config)
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  getDetailProduct(productCode) {
    let config = {
      params: {
        productCode: productCode
      }
    }
    return Vue.http.get('productdetail', config).then(response => response.data)
      .catch(error => console.log(error))
  }
}
