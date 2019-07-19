<template lang="pug">
.home
  header.header.py--sm.is-primary.is-block
    .box
      .blocks.is-middle
        .block.is-6
          h1.h3.m--0 Styles

  main.main
    .box
      .blocks
        .block.is-3
          .button.is-left.my--xl
            m-icon FormatFont
            span Text

          ul.button-group.is-dark.is-stacked.is-lg.is-rectangle.is-left#nav
            li
              router-link(to="/text") 
                m-icon FormatFont
                span Texts
              .button-group.is-stacked
                li
                  router-link(to="/text") 
                    m-icon FormatFont
                    span Texts
                li
                  router-link(to="/text") 
                    m-icon FormatFont
                    span Texts
            li
              router-link(to="/input") 
                m-icon Textbox
                span Inputs

            router-link(to="/blocks") 
              m-icon TableRow
              span Blocks

            router-link(to="/button") 
              m-icon CheckboxBlank
              span Button

            router-link(to="/spacing") 
              m-icon ArrowExpandHorizontal
              span Spacing

            router-link(to="/gaps") 
              m-icon PanHorizontal
              span Gaps

            router-link(to="/colors") 
              m-icon Palette
              span Colors

        .block.is-9
          router-view
</template>

<style lang="scss">
#nav {
  .router-link-active {
    background-color: red;
  }
}
</style>

