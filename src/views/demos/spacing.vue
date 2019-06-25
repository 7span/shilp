<template lang="pug">
.box
  h1 Spacing
  ul
    li [breakpoint--][m/p][x/y/t/b/l/r]--[size]
  .margin-demo
    button.button.is-primary No Margin
    button.button.is-secondary.mt--md.phone--mt--xs.laptop--m--sm Margin Top MD
    button.button.is-secondary.mt--xs.ml--sm Margin Top XS | Margin Left XS

  .padding-demo
    p.m--0.p--xl.bc--primary Hello
</template>

<style lang="scss">
.margin-demo {
  background-color: #dadada;
}
</style>




