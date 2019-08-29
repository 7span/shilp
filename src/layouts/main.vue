<template>
  <div class="app">
    <header class="header bg-color--primary">
      <h1 class="h3 m--0 pl--lg">Styles</h1>
    </header>

    <div class="content">
      <aside class="aside py--sm bg-color--grey shade--darkest">
        <ul
          id="nav"
          class="button-group color--dark size--lg shape--rectangle align--left is-stacked"
        >
          <li>
            <router-link to="/text" class="button">
              <m-icon>FormatFont</m-icon>
              <span>Texts</span>
            </router-link>
          </li>
          <li>
            <router-link to="/form" class="button">
              <m-icon>Textbox</m-icon>
              <span>Form</span>
            </router-link>
          </li>
          <li>
            <router-link to="/blocks" class="button">
              <m-icon>TableRow</m-icon>
              <span>Blocks</span>
            </router-link>
          </li>
          <li>
            <router-link to="/button" class="button">
              <m-icon>CheckboxBlank</m-icon>
              <span>Button</span>
            </router-link>
          </li>
          <li>
            <router-link to="/spacing" class="button">
              <m-icon>ArrowExpandHorizontal</m-icon>
              <span>Spacing</span>
            </router-link>
          </li>
          <li>
            <router-link to="/gaps" class="button">
              <m-icon>PanHorizontal</m-icon>
              <span>Gaps</span>
            </router-link>
          </li>
          <li>
            <router-link to="/colors" class="button">
              <m-icon>Palette</m-icon>
              <span>Colors</span>
            </router-link>
          </li>
          <li>
            <router-link to="/loader" class="button">
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

