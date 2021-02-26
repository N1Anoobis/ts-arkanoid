<template>
  <div id="app">
    <BaseContainer title="Vuex">
      <TheCounter />
      <ChangeCounter />
      <button @click="addOne">increse 10</button>
    </BaseContainer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";

@Component({
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
  },
})
export default class App extends Vue {
  @Prop() private msg?: string;

  addOne() {
    this.$store.commit({ type: "increase", value: 10 });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
