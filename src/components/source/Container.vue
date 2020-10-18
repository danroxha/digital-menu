<template>
  <section @scroll="onMoveScroll">
    <slot></slot>
  </section>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations("headerVisible", ["onMoveScroll"]),
  }
}
</script>