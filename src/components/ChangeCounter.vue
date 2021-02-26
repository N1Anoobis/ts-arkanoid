<template>
  <div id="app">
    <button @click="addOne">Add 2</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class ChangeCounter extends Vue {
  addOne() {
    this.$store.commit("increment");
  }
}
</script>

<style scoped></style>
