<template>
  <div class="alert">
    {{msg}}
    <Button type="primary" @click="hidden">Primary</Button>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: ['msg'],
  data () {
    return {

    }
  },
  methods: {
    hidden () {
      this.$emit('fromChild', false)
    }
  },
}
</script>
<style scope>
  .alert{
    font-size: 30px;
    text-align: center;
    width: 300px;
    height: 200px;
    border: 1px solid #aaaaaa;
    border-radius: 5px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    background-color: #fff;
  }
</style>

