<template>
  <div class="conteiner">
    <button @click="sendMsg">发送</button>
  </div>
</template>
<script>
export default {
  name: "demochild1",
  data() {
    return {
      message: "子数据"
    };
  },
  methods: {
    sendMsg() {
      this.$emit('zl', this.message)
    }
  }
};
</script>
