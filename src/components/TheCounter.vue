<template>
  <div id="app">
    <h3>{{ counter }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class TheCounter extends Vue {
  get counter() {
    return this.$store.getters.finalCounter;
  }
}
</script>

<style scoped></style>
