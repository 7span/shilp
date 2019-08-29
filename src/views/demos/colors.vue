<template lang="pug">
.box
  h1 Colors
  ul
    li is-[variant].is-[shade][.block]
    li use .is-block to use color variant as background-color
  .blocks
    .block.bg-color--primary Hello
    .block.bg-color--danger How are you?
  .blocks
    .block.bg-color--primary.shade--darker.p--xs Hello
    .block.bg-color--secondary.shade--lighter.p--sm How are you?
    .block.bg-color--accent.shade--light.p--md I'm fine!
  .blocks
    .block.color--primary.shade--lighter.p--xs Hello
    .block.color--secondary.shade--lighter.p--sm How are you?
    .block.color--accent.shade--lighter.p--md I'm fine!
</template>

<style lang="scss">
.margin-demo {
  background-color: #dadada;
}
</style>




