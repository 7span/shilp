<template lang="pug">
.ss-container
  .links
    router-link(to="/demos/input") Inputs
    router-link(to="/demos/grid") Grid
    router-link(to="/demos/button") Button
    router-link(to="/demos/spacing") Spacing
    router-link(to="/demos/spacing") Colors
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
