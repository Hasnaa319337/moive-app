<template>
  <div>
        <header>
        <NuxtLink to="/">Logo</NuxtLink>
        <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
            <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
            </ul>
        </nav>
        </header>
        <!-- output page -->
        <div>
        <slot/>
        </div>
  </div>
</template>

<script setup></script>

<style>
.router-link-exact-active {
  color: blueviolet;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  clear: both;
}
li {
  float: left;
  padding: 20px;
}
a {
  text-decoration: none;
}
</style>
