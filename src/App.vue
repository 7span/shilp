<template lang="pug">
#app
  .ss-container
    h2 Inputs
    inputs
    h2 Grid
    grid
    h2 Buttons
    buttons
    
</template>
 
<script>
export default {
  components: {
    Buttons: require("@/components/button").default,
    Grid: require("@/components/grid").default,
    Inputs: require("@/components/input").default
  }
};
</script>


<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
