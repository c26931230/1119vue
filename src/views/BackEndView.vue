<template>
  <div class="home">
    後台
    <router-link to="/product">product </router-link>
    <router-link to="/member">member </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>