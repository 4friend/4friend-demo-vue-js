<template>
  <div id="product_list">
    <table class="table">
      <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Code</th>
        <th scope="col">Name</th>
        <th scope="col">Vendor</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, index) in productList" :key="index">
        <th scope="row">{{ (currentPage - 1)  * itemsPerPage + (index + 1)}}</th>
        <td><router-link :to="'/product/' + product.productCode">{{product.productCode}}</router-link></td>
        <td>{{product.productName}}</td>
        <td>{{product.productVendor}}</td>
        <td>{{product.quantityInStock}}</td>
        <td>{{product.buyPrice}}</td>
      </tr>
      </tbody>
    </table>
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item" v-bind:class="{ 'disabled' : currentPage === 1}" v-on:click="goToPage(currentPage - 1)">
          <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <li class="page-item " v-for="pageIndex in pageIndexes" :key="pageIndex" v-on:click="goToPage(pageIndex)"
            v-bind:class="{ 'active' : currentPage === pageIndex }">
          <a class="page-link" href="#">{{pageIndex}}<span class="sr-only"
                                                           v-if="currentPage === pageIndex">(current)</span>
          </a>
        </li>
        <li class="page-item" v-bind:class="{'disabled' : currentPage === totalPages}"
            v-on:click="goToPage(currentPage + 1)">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>

  </div>

</template>

<script>
  import ProductService from '@/share/service/ProductService'

  export default {
    name: 'ProductList',
    data () {
      return {
        productList: [],
        totalItems: 0,
        itemsPerPage: 10,
        currentPage: 1,
        indexId: 1
      }
    },
    created () {
      this.getProductList()
    },
    methods: {
      getProductList () {
        ProductService.getProductList(this.currentPage, this.itemsPerPage).then(
          response => {
            this.productList = response.productDTOList
            this.totalItems = response.totalItems
          }
        )
      },
      goToPage (pageIndex) {
        if(pageIndex >= 1 && pageIndex <= Math.ceil(this.totalItems / this.itemsPerPage)) {
          this.currentPage = pageIndex
          this.getProductList()
        }
      }
    },
    computed: {
      pageIndexes () {
        const totalPages = Math.ceil(this.totalItems / this.itemsPerPage)
        let pageIndexes = []
        for (let i = 1; i <= totalPages; i++) {
          pageIndexes.push(i)
        }
        return pageIndexes
      },
      totalPages () {
        return Math.ceil(this.totalItems / this.itemsPerPage)
      }
    }
  }
</script>

<style scoped>

</style>
