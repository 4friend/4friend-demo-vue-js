<template>
  <div id="submit-review">
    <h2>Submit a Review</h2>
    <hr/>

    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email"
               v-model="review.reviewerEmail"
               placeholder="Enter your email address">
      </div>

      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name"
               v-model="review.reviewerName"
               placeholder="Enter your name">
      </div>

      <div class="form-group">
        <label for="review">Review:</label>
        <textarea class="form-control" id="review" rows="5"
                  v-model="review.message"
                  placeholder="Write your message here..."></textarea>
      </div>

      <div class="form-group">
        <label for="rating">Rating</label>
        <select class="form-control" id="rating" v-model.number="review.rating">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <button type="submit" class="btn btn-info">Submit</button>
    </form>

  </div>

</template>

<script>
  import SubmitReview from '@/share/service/ReviewService'

  export default {
    name: 'SubmitReview',
    data () {
      return {
        review: {
          reviewerEmail: null,
          reviewerName: null,
          message: null,
          rating: null
        }
      }
    },
    methods: {
      onSubmit () {
        SubmitReview.submitReview(this.review).then(response => {
          this.$toasted.success('successfully', {onComplete: this.reset})
        })
      },
      reset () {
        this.review = {
          reviewerEmail: null,
          reviewerName: null,
          rating: null,
          message: null
        }
      }
    }
  }
</script>

<style scoped>

</style>
