<template lang="pug">
.buttons
  .ss-row
    .ss-col-6
      .field
        label Button Text
        input(type="text" v-model="text")
        small This is help text!

      .field.is-checkbox
        input(id="add-icon" type="checkbox" :checked="icon" v-model="icon") 
        label(for="add-icon") Add Icon?

      .field(v-for="variant,key in variants")
        label {{key}}
        .ss-grid.is-5
          .field.is-radio(v-for="item in variant")
            input(:id="`variant-${item}`" type="radio" :name="key" :value="item" v-model="selected[key]") 
            label(:for="`variant-${item}`") {{item}}

    .ss-col-6
      button(:class="buttonClass") 
        svg(v-if="icon" viewBox='0 0 24 24')
          path(fill='#000000',d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z')
        | {{text}}
</template>
 
<script>
export default {
  data: () => ({
    icon: true,
    text: "Hello World!",
    selected: {
      color: "primary",
      size: "md",
      shape: "rectangle",
      style: "solid"
    },
    variants: {
      color: ["primary", "secondary", "accent", "light", "dark"],
      size: ["lg", "md", "sm"],
      shape: ["rectangle", "pill", "rounded", "circle", "square"],
      style: ["solid", "outline"]
    }
  }),
  computed: {
    buttonClass() {
      let classes = ["button"];
      for (var val in this.selected) {
        if (this.selected[val]) classes.push(`is-${this.selected[val]}`);
      }
      return classes;
    }
  }
};
</script>


<style lang="scss">
.buttons {
  margin-top: 50px;
}
.buttons__variants {
  margin-bottom: 10px;
}
</style>
