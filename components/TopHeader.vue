<template>
  <header id="header">
    <!--header-->
    <div class="header_top">
      <!--header_top-->
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="contactinfo">
              <ul class="nav nav-pills">
                <li>
                  <a href="#"><i class="fa fa-phone"></i> +2 95 01 88 821</a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-envelope"></i> info@domain.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="social-icons pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header_top-->

    <div class="header-middle">
      <!--header-middle-->
      <div class="container">
        <div class="d-flex justify-content-between py-5">
          <div class="d-flex">
            <div class="logo pull-left">
              <a href="/"><img src="assets/images/home/logo.png" alt="" /></a>
            </div>
            <div class="mainmenu">
              <ul class="nav navbar-nav collapse navbar-collapse">
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div class="shop-menu pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <a href="#"><i class="fa fa-star"></i> Wishlist</a>
                </li>
                <li>
                  <a href="cart.html"
                    ><i class="fa fa-shopping-cart"></i> Cart</a
                  >
                </li>
                <li>
                  <a href="login.html"><i class="fa fa-lock"></i> Login</a>
                </li>
              </ul>
              <div class="search_box pull-right pl-5">
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-middle-->
  </header>
  <!--/header-->
</template>

<script>
export default {
  name: "GeneralHeader",
};
</script>

<style>
</style>