<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">
        Go to page1
      </RouterLink>
      <RouterLink to="/page2">
        Go to page2
      </RouterLink>
      <RouterLink to="/page3">
        Go to page3
      </RouterLink>
      <RouterLink to="/sub/page4">
        Go to sub/page4
      </RouterLink>
    </nav>
    <main>
      <router-view-transition v-slot="{ Component }">
        <keep-alive :include="['page2']">
          <component :is="Component" />
        </keep-alive>
      </router-view-transition>
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.wrapper {
  display: grid;
  grid-template-rows: min-content;
  min-height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 750px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #125b7f;
  position: sticky;
  top: 0;
  z-index: 1;
}

a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1em 0;
  margin: 0 1em;
  border-bottom: 2px solid transparent;
}

a.router-link-exact-active {
  border-color: inherit;
}

main {
  min-height: 100vh;
  display: grid;
  grid-template: "main";
  flex: 1;
  position: relative;
  z-index: 0;
  overflow-x: hidden;
}

main > * {
  grid-area: main; /* Transition: make sections overlap on same cell */
  position: relative;
}

main > :first-child {
  z-index: 1; /* Prevent flickering on first frame when transition classes not added yet */
}
</style>
