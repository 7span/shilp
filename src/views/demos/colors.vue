<template lang="pug">
.box
  h1 Colors
  ul
    li is-[variant].is-[shade][.block]
    li use .is-block to use color variant as background-color
  .blocks
    .block.is-primary Hello
    .block.is-danger How are you?
  .blocks
    .block.is-primary.is-block.p--xs Hello
    .block.is-secondary.is-block.p--sm How are you?
    .block.is-accent.is-block.p--md I'm fine!
  .blocks
    .block.is-primary.is-block.is-muted.p--xs Hello
    .block.is-secondary.is-block.is-muted.p--sm How are you?
    .block.is-accent.is-block.is-muted.p--md I'm fine!
</template>

<style lang="scss">
.margin-demo {
  background-color: #dadada;
}
</style>




