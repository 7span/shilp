<template lang="pug">
.rows
  .ss-row.rows__all
    .ss-col(v-for="i in 12") 
      div {{i}}
  .ss-row.rows__2(v-for="i in 11")
    .ss-col.phone--is-12.phablet--is-6(:class="`is-${i}`") 
      div {{i}}
    .ss-col.phone--is-12.phablet--is-6(:class="`is-${12 - i}`") 
      div {{12 - i}}
</template>

<style lang="scss" scoped>
.rows__all {
  .ss-col {
    div {
      padding: 10px;
      background-color: #dadada;
    }
  }
}
.rows__2 {
  margin-top: 3px;
  .ss-col {
    div {
      padding: 5px;
      background-color: #dadada;
    }
  }
}
</style>

