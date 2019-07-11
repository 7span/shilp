<template lang="pug">
.inputs
  h1 Inputs
  .blocks
    .block.is-4
      .field.is-loading
        label First Name
        input.field__block(type="text" placeholder="e.g. John")
        small This is help text.
    .block.is-4
      .field
        label Last Name
        input.field__block(type="text" placeholder="e.g. Doe")
        small This is help text.

    .block.is-4
      .field
        label Email
        .field__group
          .field__before @
          input.field__block(type="email" placeholder="e.g. john@doe.com")
        small This is help text.

  .blocks
    .block.is-4
      .field.is-loading
        label First Name
        input.field__block(type="text" placeholder="e.g. John")
        small This is help text.
    .block.is-4
      .field.is-danger
        label Last Name
        input.field__block(type="text" placeholder="e.g. Doe")
        small This is help text.

    .block.is-4
      .field.is-success
        label Email
        .field__group
          .field__before @
          input.field__block(type="email" placeholder="e.g. john@doe.com")
          .field__after .com
        small This is help text.

  .blocks
    .block.is-4
      .field
        label City
        select.field__block
          option Select The Option
          option Ahmedabad
          option Rajkot

    .block.is-4
      .field
        label Marital Status
        .field.is-checkbox.is-md
          input(type="checkbox" id="marriage") 
          label(for="marriage") Married

    .block.is-4
      .field
        label Gender
        .blocks
          .block.is-3
            .field.is-checkbox.is-md
              input(type="radio" id="male") 
              label(for="male") Male
          .block.is-3
            .field.is-checkbox.is-md
              input(type="radio" id="female") 
              label(for="female") Female

</template>
