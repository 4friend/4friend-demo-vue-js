<template>
    <div id="product_detail">
      <h2>{{productDetail.productName}}</h2>
      <dl class="row">
        <dt class="col-sm-3">Product Code</dt>
        <dd class="col-sm-9">{{productDetail.productCode}}</dd>

        <dt class="col-sm-3">Product Line</dt>
        <dd class="col-sm-9">{{productDetail.productLine}}</dd>

        <dt class="col-sm-3">Product Scale</dt>
        <dd class="col-sm-9">{{productDetail.productScale}}</dd>

        <dt class="col-sm-3">Product Vendor</dt>
        <dd class="col-sm-9">{{productDetail.productVendor}}</dd>

        <dt class="col-sm-3">Product Description</dt>
        <dd class="col-sm-9">{{productDetail.productDescription}}</dd>

        <dt class="col-sm-3">Quantity In Stock</dt>
        <dd class="col-sm-9">{{productDetail.quantityInStock}}</dd>

        <dt class="col-sm-3">Price</dt>
        <dd class="col-sm-9">{{productDetail.buyPrice}}</dd>

        <dt class="col-sm-3">Msrp</dt>
        <dd class="col-sm-9">{{productDetail.msrp}}</dd>
      </dl>


    </div>
</template>

<script>
  import ProductService from '@/share/service/ProductService'

  export default {
    name: 'ProductDetail',
    data() {
      return {
        productDetail : {
          productName: '',
          productCode: '',
          productLine: '',
          productScale: '',
          productVendor: '',
          productDescription: '',
          quantityInStock: '',
          buyPrice: '',
          msrp: ''
        }
      }
    },
    created () {
      this.getProductDetail()
    },
    methods : {
      getProductDetail () {
        ProductService.getDetailProduct(this.$route.params.productCode).then ( response => {
          this.productDetail = response
          }
        )
      }
    }

  }
</script>

<style scoped>

</style>
