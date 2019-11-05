<template>
  <div
    ref="popup"
    class="popup"
    tabindex="0"
    @keyup.esc="closePopup"
  >
    <div
      class="popup__outer"
      @click="closePopup"
    />
    <div
      class="popup__inner"
    >
      <button
        class="popup__cross"
        title="Close"
        @click="closePopup"
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
  },
  methods: {
    closePopup() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="sass">
@import "../../css/_variables"
@import "../../css/_mixins"
@import "../../css/_functions"

.popup
  position: absolute
  width: 100vw
  min-height: 100vh
  left: 0
  top: 0
  +flex(row, center, center)
  &__
    &inner
      background: $gradient
      border-radius: 16px
      max-width: 740px
      width: 100%
      min-height: 400px
      position: relative
      padding: 70px 42px 40px
      @media screen and (max-width: $fablet)
        position: absolute
        left: 0
        top: 0
        width: 100%
        min-height: 100vh
        border-radius: 0
        padding: 70px 20px 28px
    &outer
      background: rgba(1, 1, 5, 0.9)
      width: 100%
      height: 100%
      position: absolute
      left: 0
      top: 0
      cursor: pointer

    &cross
      position: absolute
      right: 28px
      top: 28px
      @media screen and (max-width: $fablet)
        top: 16px
        right: 16px
    &cross-icon
      width: 15px
      height: 15px
      @media screen and (max-width: $fablet)
        width: 12px
        height: 12px
</style>
