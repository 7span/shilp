<template lang="pug">
#app
  .ss-container
    buttons
</template>
 
<script>
export default {
  components: {
    Buttons: require("@/components/button").default
  }
};
</script>


<style lang="scss">
#app {
  border: 50px solid #dadada;
  min-height: 100vh;
}
</style>
