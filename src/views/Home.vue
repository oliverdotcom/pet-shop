<template>
  <div class="home">
    <h1>Oliver's Pet Shop</h1>
    <h3>Currently for sale</h3>
    <post-list></post-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "../components/PostList.vue";
export default {
  name: "Home",
  components: {
    PostList,
  },
};
</script>
