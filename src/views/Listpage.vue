<template>
  <div>
    <Header/>
    <Content/>


  </div>
</template>
<script>
import Content from "@/components/Content.vue";
import Header from "@/components/Header.vue";
export default {
  name: "about",
  components: {
    Content,
    Header
  }
};
</script>