<template>
  <div class="news">
    <h1>This is an news page</h1>
     <HelloWorld title="hi news" msg="Welcome to Your Vue.js App" type="wide"/>
     <Images link="https://fakeimg.pl/300x200/200?random=10"/>
     <Images link="https://fakeimg.pl/300x200/200?random=10"/>
     <Images link="https://fakeimg.pl/300x200/200?random=10"/>
     <!-- <Images link="https://fakeimg.pl/300x200/200"> -->
     <!-- <img src="https://fakeimg.pl/300x200/200"> -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Images from '@/components/Images.vue';

export default {
  name: 'NewsView',
  components: {
    HelloWorld:HelloWorld,
    Images:Images,
  }
}
</script>
<style lang="scss">
  .wide{
    width: 100%;
    border: 5px red solid!important;;
  }
  
</style>
