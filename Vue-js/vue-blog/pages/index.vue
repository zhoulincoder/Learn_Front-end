<template>
  <div>
    <!-- <h1>Welcome!</h1>
    <NLink to="/about">
    About Page
    </NLink> -->
    <div class="index container">
      <base-list />
    </div>
  </div>
</template>

<script>

export default {
  head: {
    title: 'Home Page'
  },
  //nuxt获取数据方法，异步的
  async fetch() {

  }
}
</script>

<style>

</style>
