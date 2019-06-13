<template>
  <div class="container">
    <child :send-msg="message" :send-date="date" :send-age="age" :send-test="test"></child>
  </div>
</template>
<script>
import child from "./child.vue";
export default {
  name: "demo1",
  data() {
    return {
      message: "父调用子",
      date: "2019-6-11",
      age: "18",
      test: [
        {message: "父调用子"},
        {date: "2019-6-11"},
        {age: "18"}
      ]
        
      
    };
  },
  components: {
    child
  }
};
</script>
