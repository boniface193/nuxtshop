<template>
  <section class="bg-dark vh-100 overflow-hidden">
    <section class="d-flex justify-content-between px-5 pt-4">
      <img src="assets/images/home/logo.png" class="" alt="logo" />
      <NuxtLink to="#" class="font-weight-normal text-muted fs-4"
        >Logout</NuxtLink
      >
    </section>
    <div class="row">
      <section class="col-sm-2 d-none d-md-block">
        <div class="vh-50 d-flex align-items-center">
          <div class="list-style-type-none font-weight-normal text-muted fs-3">
            <div
              class="mb-5"
              v-for="items in linksroute"
              :key="items.id"
            >   
              <NuxtLink  :to="items.to">{{ items.title }} </NuxtLink>
            </div>
          </div>
        </div>
      </section>
      <section
        class="col-sm-10 col-12 d-flex vh-100 align-items-center pr-md-5 px-sm-5"
      >
        <section class="bg-dark-bd p-4 vw-100 h-75 main-content">
          <slot />
        </section>
      </section>
    </div>
  </section>
</template>

<script setup>

const linksroute = [
  { to: "/admin", title: "Dashboard" },
  { to: "/product-admin", title: "Product" },
  { to: "/settings-admin", title: "Settings" },
];

</script>

<style>
</style>