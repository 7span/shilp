<template lang="pug">
.box
  .links
    router-link(to="/demos/input") Inputs
    router-link(to="/demos/blocks") Blocks
    router-link(to="/demos/button") Button
    router-link(to="/demos/spacing") Spacing
    router-link(to="/demos/colors") Colors
  .demos
    router-view
</template>
 
<script>
export default {
  components: {}
};
</script>


<style lang="scss">
.links {
  display: flex;
  margin-bottom: 50px;
  a {
    margin-right: 10px;
  }
}
</style>
