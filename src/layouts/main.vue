<template>
  <div class="app">
    <header class="block header is-primary">
      <h1 class="h3 m--0 pl--lg">Styles</h1>
    </header>

    <div class="content">
      <aside class="aside py--sm">
        <ul id="nav" class="button-group is-dark is-stacked is-lg is-rectangle is-left">
          <li>
            <router-link to="/text">
              <m-icon>FormatFont</m-icon>
              <span>Texts</span>
            </router-link>
          </li>
          <li>
            <router-link to="/input">
              <m-icon>Textbox</m-icon>
              <span>Form</span>
            </router-link>
          </li>
          <li>
            <router-link to="/blocks">
              <m-icon>TableRow</m-icon>
              <span>Blocks</span>
            </router-link>
          </li>
          <li>
            <router-link to="/button">
              <m-icon>CheckboxBlank</m-icon>
              <span>Button</span>
            </router-link>
          </li>
          <li>
            <router-link to="/spacing">
              <m-icon>ArrowExpandHorizontal</m-icon>
              <span>Spacing</span>
            </router-link>
          </li>
          <li>
            <router-link to="/gaps">
              <m-icon>PanHorizontal</m-icon>
              <span>Gaps</span>
            </router-link>
          </li>
          <li>
            <router-link to="/colors">
              <m-icon>Palette</m-icon>
              <span>Colors</span>
            </router-link>
          </li>
          <li>
            <router-link to="/loader">
              <m-icon>Loading</m-icon>
              <span>Loader</span>
            </router-link>
          </li>
        </ul>
      </aside>
      <main class="main p--xl">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
.app {
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.header {
  flex: 0 0 50px;
}
.content {
  display: flex;
  flex: 1 1 auto;
  align-items: stretch;
}
.aside {
  flex: 0 0 250px;
  background-color: --color(dark);
}
.main {
  flex: 1 1 auto;
}
</style>

