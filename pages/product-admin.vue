<script setup lang="js">
const counter = ref(0)
const productName = ref("");
const productPrice = ref("");
const productImages = ref([]);
const shortDescription = ref("");
const productBrand = ref("");
const productCondition = ref(true);
const longDescription = ref("");

function increase () {
  console.log('clicked')
  counter.value++
};
</script>

<template>
  <section>
    <Admin>
      <div class="main-content bg-dark w-sm-50 m-auto">
        <div class="container p-4 w-100">
          <h3 class="pb-5">Create Product</h3>
          <form role="form">
            <div class="form-group">
              <label>Product Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Product Name"
                v-model="productName"
              />
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Product Price</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Amount"
                    v-model="productPrice"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1"
                    >Product Short Description</label
                  >
                  <textarea
                    type="text"
                    class="form-control"
                    placeholder="Enter 20 words about your product"
                    v-model="shortDescription"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Product Images</label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    class="form-control"
                    placeholder="Enter 20 words about your product"
                    v-on="productImages"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Product Brand</label>
                  <select
                    class="form-control"
                    placeholder="Enter your brand name"
                    v-model="productBrand"
                  >
                    <option value="">Choose your brand</option>
                    <option value="E-shopper">E-Shopper</option>
                    <option value="Mangelatti">Mangelatti</option>
                    <option value="olddfashion">Oldd Fashion</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-2">
                <div class="form-group">
                  <label>is Brand New</label>
                  <input
                    type="checkbox"
                    class="form-control"
                    v-model="productCondition"
                  />
                </div>
              </div>
              <div class="col-sm-10">
                <div class="form-group">
                  <label>Longer Description of product</label>
                  <textarea
                    v-model="longDescription"
                    class="form-control"
                    placeholder="Enter maximum of 300 words about your product"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
          <button @click="increase" class="btn btn-default my-3">
            {{ counter }}
          </button>
        </div>
      </div>
    </Admin>
  </section>
</template>

<style>
</style>