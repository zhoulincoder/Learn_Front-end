<template>
  <div class="hello">
    <!-- <button @click="submit">登录</button> -->
    <i-button size="default">按钮</i-button>
    <i-menu></i-menu>
  </div>
</template>

<script>
import button from './com/button'
import menu from './com/menu'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    submit() {
      this.$toast('登陆成功', 'bottom')
    }
  },
  components: {
    "i-button": button,
    "i-menu": menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
