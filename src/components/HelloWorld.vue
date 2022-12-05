<template>
  <div class="hello" :class="type">
    <div class="pic" v-for="item in 4" :key="item">
      <img alt="pastry" :src="require(`@/assets/images/avatar/pastry${item}.jpg`)">
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <img alt="Vue logo" :src="require('@/assets/logo.png')">
    <div class="img_box">
      <img alt="Vue logo" :src="require('@/assets/images/avatar/pastry1.jpg')">
      
    </div>
    <div class="txt_box">
      <h1>{{ title }}</h1>
      <p>{{ msg }}</p>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title:String,
    msg: String,
    type:String,
  }
}
</script>
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  display: flex;
  flex-wrap: wrap;
  border: 1px rgb(36, 81, 171) solid;
  align-items: center;
  p{
    text-align-last: left;
  }

}
.hello:nth-child(3){
  .txt_box{
    order: -1;
  }
}
h1{
  width: 50%;
  font-size: 20px;
  text-align: left;
}
.img_box{
  width: 50%;
  // height: 300px;
  background: violet;
  img{
    width: 100%;
    vertical-align: top;
    
  }
}
.txt_box{
  width: 50%;
}
.pic{
  img{
    width: 100px;
  }
}
</style>
