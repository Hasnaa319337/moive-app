<template>
  <div>
    <h2>Details of product with id {{ product.id }}</h2>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const uri = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(uri);
definePageMeta({
  layout: "products",
});
</script>

<style></style>
