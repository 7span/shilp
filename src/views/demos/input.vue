<template lang="pug">
.inputs
  .ss-row
    .ss-col.is-4
      .field
        label First Name
        input(type="text" placeholder="e.g. John")
        small This is help text.
    .ss-col.is-4
      .field.is-danger
        label Last Name
        input(type="text" placeholder="e.g. Doe")
        small This is help text.
    .ss-col.is-4
      .field.is-success
        label Email
        input(type="email" placeholder="e.g. john@doe.com")
        small This is help text.

  .ss-row
    .ss-col.is-4
      .field
        label City
        select
          option Select The Option
          option Ahmedabad
          option Rajkot

    .ss-col.is-4
      .field
        label Marital Status
        .field.is-checkbox.is-md
          input(type="checkbox" id="marriage") 
          label(for="marriage") Married

    .ss-col.is-4
      .field
        label Gender
        .ss-row
          .ss-col.is-3
            .field.is-checkbox.is-md
              input(type="radio" id="male") 
              label(for="male") Male
          .ss-col.is-3
            .field.is-checkbox.is-md
              input(type="radio" id="female") 
              label(for="female") Female

</template>
