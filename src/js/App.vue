<template>
  <div id="app">
    <button
      class="button"
      @click="showPopup = true"
    >
      <span class="button__text">Get started</span>
      <svg class="button__icon"><use xlink:href="#arrow" /></svg>
    </button>

    <transition name="fade">
      <popup
        v-if="showPopup"
        @close="showPopup = false"
      >
        <forms />
      </popup>
    </transition>

    <sprite />
  </div>
</template>


<script>

import Sprite from './components/Sprite';
import Popup from './components/Popup';
import Forms from './components/Forms';

export default {
  name: 'App',
  components: {
    Sprite,
    Popup,
    Forms
  },
  data() {
    return {
      showPopup: false
    };
  }
};
</script>

<style lang="sass">
@import "../css/main"

#app
  background: $gradient

.button
  $this: &
  +flex(row, center, center)
  padding: 10px 20px
  border-radius: 20px
  border: 1px solid $accent
  transition: opacity $time $tFunc
  margin: 0 auto
  &:disabled
    opacity: .4
    pointer-events: none
  &:hover
    #{$this}__icon
      transform: translateX(5px)
  &__
    &icon
      width: 36px
      height: 12px
      margin-left: 8px
      transition: transform $time $tFunc
    &text
      font-weight: 500
      font-size: 16px
      color: $light

</style>
