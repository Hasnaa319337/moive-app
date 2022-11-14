<template>
  <div>
    <div class="container">
      <h2>products</h2>
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3" v-for="p in products" :key="p.id">
            <NuxtLink :to="`/products/${p.id}`">{{p.title}}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
//fetch data
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style></style>
