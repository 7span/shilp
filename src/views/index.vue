<template lang="pug">
.home
  header.header.py--sm.is-primary.is-block
    .box
      .blocks.is-middle
        .block.is-6
          h1.h3.m--0 Styles
        .block.is-6.ta--right
          p.m--0.is-primary.is-muted CSS Framework From 7Span
  main.main
    .box
      .blocks
        .block.is-3
          .button-group.is-stacked.is-primary.is-muted.is-lg
            //router-link.button.is-primary.is-muted(to="/getting-started") Getting Started
            // router-link(to="/getting-started") Installation
            router-link(to="/text") Texts
            router-link(to="/input") Inputs
            router-link(to="/blocks") Blocks
            router-link(to="/button") Button
            router-link(to="/spacing") Spacing
            router-link(to="/gaps") Gaps
            router-link(to="/colors") Colors

        .block.is-9
          router-view
</template>

<style lang="scss">
</style>

