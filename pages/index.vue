<template>
  <section>
    <TopHeader />
    <!-- headers -->
    <section class="container">
      <div class="row py-5">
        <div class="col-sm-12">
          <div class="item active">
            <div class="col-sm-6">
              <h1><span>E</span>-SHOPPER</h1>
              <h2>Free E-Commerce Template</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button type="button" class="btn btn-default get">
                Get it now
              </button>
            </div>
            <div class="col-sm-6">
              <img
                src="@/assets/images/home/girl1.jpg"
                class="girl img-responsive"
                alt=""
              />
              <img
                src="@/assets/images/home/pricing.png"
                class="pricing"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <Category />
            <!-- categories -->
          </div>

          <div class="col-sm-9 padding-right">
            <FeaturedItems />
            <!--features_items-->
          </div>
        </div>
      </div>
    </section>
    <BottomFooter />
    <!-- footers -->
  </section>
</template>

<script setup>
</script>

<style lang="scss">
.py-5 {
  padding: 45px 0;
}
</style>