<template>
  <div
    ref="popup"
    class="popup"
    tabindex="0"
    @keyup.esc="$emit('close')"
  >
    <div class="popup__inner" >
      <button
        class="popup__cross"
        title="Close"
        @click="$emit('close')"
      >
        <svg class="popup__cross-icon"><use xlink:href="#cross" /></svg>
      </button>
      <div class="popup__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    this.$refs.popup.focus();
  }
};
</script>

<style lang="sass">
</style>
