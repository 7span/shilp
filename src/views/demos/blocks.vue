<template lang="pug">
.rows
  h1 Blocks
  ul
    li [breakpoint]--[size]
    li Rows can be defined with .blocks
    li Cols can be defined with .block
    li The size of .block can be set as .size--1 .size--2
    li The responsive sizes can be set as .phone--size--3
  .box
    .blocks.rows__all
      .block.phablet--size--auto(v-for="i in 12") 
        div {{i}}
    .blocks.rows__2(v-for="i in 11")
      .block.phablet--size--6(:class="`desktop--size--${i}`") 
        div {{i}}
      .block.phablet--size--6(:class="`desktop--size--${12 - i}`") 
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

