<template>
  <div class="look">
    {{message}}
    <p>接受的参数: {{$route.params.UserId}}</p>
  </div>
</template>

<script>
export default {
  name: 'Look',
  data () {
    return {
      message: 'LookTwo'
    }
  }
}
</script>
