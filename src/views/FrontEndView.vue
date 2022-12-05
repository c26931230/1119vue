<template>
前台
<router-link to="/">Home</router-link> |
    <router-link to="/about">About </router-link>|
    <router-link to="/news">News </router-link>|
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