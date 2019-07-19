<template>
  <component v-if="$slots.default" :class="setClass" :is="$slots.default[0].text" />
</template>

<script>
export default {
  components: {
    FormatFont: require("@icon/FormatFont").default,
    TableRow: require("@icon/TableRow").default,
    Textbox: require("@icon/Textbox").default,
    CheckboxBlank: require("@icon/CheckboxBlank").default,
    ArrowExpandHorizontal: require("@icon/ArrowExpandHorizontal").default,
    PanHorizontal: require("@icon/PanHorizontal").default,
    Palette: require("@icon/Palette").default,
    CheckCircle: require("@icon/CheckCircle").default
  },
  computed: {
    setClass() {
      let _classes = ["button__icon", "m-icon"];
      return _classes;
    }
  }
};
</script>

