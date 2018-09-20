import Vue from 'vue'

export default {
  submitReview (productReview) {
    return Vue.http.post('reviews', productReview)
      .then(response => response.data)
      .catch(error => console.log(error))
  }
}
