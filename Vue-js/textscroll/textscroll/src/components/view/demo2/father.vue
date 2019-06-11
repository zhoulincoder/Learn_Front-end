<template>
  <div class="conteiner">
    {{msg}}<child @zl='getZl'></child>
  </div>
</template>
<script>
import child from './child'
export default {
  name: 'demochild1',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    child
  },
  methods: {
    getZl (data) {
      console.log(data)
      this.msg = data
    } 
  }
 
}
</script>
