<template>
  <div div class="hero">
    <img src="../assets/imgs/moiveHero.jpg" />
    <div class="text-container">
      <div class="text">
        <span class="mini-heading">NOW STREAMING</span>
        <h1><span>Now</span>Streaming</h1>
        <a href="#moiveGrid" class="button">View Moives</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      moives: [],
    };
  },
  async fetch() {
    await this.getMoive();
  },
  methods: {
    async getMoive() {
      const data = axios.get(
        "https://api.themoviedb.org/3/movie/550?api_key=5aa1068dc152a2e90d247e1aa8e06fdb"
      );
      const result = await data;
      console.log(result);
    },
  },
};
</script>

<style>
.hero {
  height: 400px;
  position: relative;
}
.hero::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-container {
  z-index: 99;
  position: absolute;
  top: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.text {
  padding: 0 16px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
.mini-heading {
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #c92502;
  margin-bottom: 8px;
}
h1 {
  color: #fff;
  font-size: 64px;
  font-weight: 200;
  margin-bottom: 8px;
}
span {
  font-weight: 500;
  margin-right: 22px;
}
.button {
  font-size: 20px;
  align-self: flex-start;
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 4px 16px;
  background-color: #c92502;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button:hover {
  background-color: #891b02;
  color: white;
}
</style>
