<template>
  <div class="container">{{sendMsg}}{{sendAge}}{{sendDate}}</div>
  
</template>
<script>
export default {
  name: 'demochild1',
  data () {
    return {
    
    }
  },
  props: {
    sendMsg: {
      type: String,
      require: true
    },
    sendDate: {
      type: String,
      require: true
    },
    sendAge: {
      type: String,
      require: true
    }
    // sendTest: {
    //   type: Array,
    //   require: true
    // }
  }
}
</script>
