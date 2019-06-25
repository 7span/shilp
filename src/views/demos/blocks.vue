<template lang="pug">
.rows
  h1 Blocks
  ul
    li [breakpoint]--[size]
    li Rows can be defined with .blocks
    li Cols can be defined with .block
    li The size of .block can be set as .is-1 .is-2
    li The responsive sizes can be set as .phone--is-3
  .blocks.rows__all
    .block(v-for="i in 12") 
      div {{i}}
  .blocks.rows__2(v-for="i in 11")
    .block.phone--is-12.phablet--is-6(:class="`is-${i}`") 
      div {{i}}
    .block.phone--is-12.phablet--is-6(:class="`is-${12 - i}`") 
      div {{12 - i}}
</template>

<style lang="scss" scoped>
.rows__all {
  .block {
    div {
      padding: 10px;
      background-color: #dadada;
    }
  }
}
.rows__2 {
  margin-top: 3px;
  .block {
    div {
      padding: 5px;
      background-color: #dadada;
    }
  }
}
</style>

