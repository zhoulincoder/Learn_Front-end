<template>
  <div class="look">
    {{message}}
    {{$route.params.name}}
  </div>
</template>

<script>
export default {
  name: 'Look',
  data () {
    return {
      message: 'LookOne'
    }
  }
}
</script>
