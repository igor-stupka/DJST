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
        <login-form />
      </popup>
    </transition>

    <sprite />
  </div>
</template>


<script>

import Sprite from './components/Sprite';
import Popup from './components/Popup';
import LoginForm from './components/LoginForm';

export default {
  name: 'App',
  components: {
    Sprite,
    Popup,
    LoginForm
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
</style>
