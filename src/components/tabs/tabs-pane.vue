<template>
  <div class="z-tabs-body" v-show="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'z-tabs-pane',
  data() {
    return {
      active: false
    };
  },
  props: {
    name: {
      type: [String, Number]
    }
  },
  inject: ["eventBus"],
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", name=> {
        this.active = (name === this.name);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
