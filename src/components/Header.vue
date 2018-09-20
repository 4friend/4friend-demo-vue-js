<template>
  <header id="header">
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand text-white font-weight-bold" @click="goToHomePage">
        Demo Vue Product
      </span>
      <nav class="nav nav-pills nav-fill">
        <router-link to="/" class="nav-item nav-link" active-class="active" exact>Products
        </router-link>
        <router-link to="/submit-reviews" class="nav-item nav-link" active-class="active">Submit Review
        </router-link>
      </nav>
    </nav>

  </header>

</template>

<script>
export default {
  name: 'Header',
  methods: {
    goToHomePage () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .active {
    font-weight: 600;
    text-decoration: underline;
  }
</style>
