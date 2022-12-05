<template>
  <div class="img">
    <img :src="link">
    <h1>aaaaa</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laboriosam ipsa minima nostrum incidunt delectus ab, commodi accusantium laborum eligendi, sequi vero accusamus totam consectetur tempora soluta animi. Ad, quas?</p>
  </div>
</template>

<script>
export default {
  // name: 'Images',
  props: {
    link:String
  }
}
</script>
<style lang="scss">
    .img{
        width: 100%;
        background: forestgreen;
    }
</style>
