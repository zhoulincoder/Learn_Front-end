<template>
  <div id="app">
    <counter />
    <counter-brother />
  </div>
</template>

<script>
// 两个组件都要用到count 状态怎么办
import HelloWorld from './components/HelloWorld'
import Counter from './components/Counter'
import CounterBrother from './components/CounterBrother'

export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  components: {
    HelloWorld,
    'counter': Counter,
    'counter-brother': CounterBrother
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
