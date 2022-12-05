<template>
      <Meta title="mem"/>
     <Table link="https://fakeimg.pl/300x200/200?random=10"/>
</template>
<script >
import Table from '@/components/back_end/Table.vue';
import Meta from '@/components/Meta.vue';
  export default {
  name: 'NewsView',
  components: {
   Table:Table,
   Meta:Meta,
  }
}

</script>