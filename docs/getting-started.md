# 🚀 Getting Started

Install NPM Package:
```shell
npm install @7span/styles
```
Or you can directly download and place SCSS folder in your project.

#### Import everything:
```scss
@import @7span/styles/scss/styles.scss
```

#### Cherry-pick what you need:
```scss
// REQUIRED
// Contains all the variables, mixins, functions required in components.
@import @7span/styles/scss/_globals.scss

// Import components you need.
@import @7span/styles/scss/_button.scss
@import @7span/styles/scss/_blocks.scss
```
