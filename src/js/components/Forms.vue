<template>
  <div class="login">
    <tabs>
      <tab name="Sign Up">
        <sign-up />
      </tab>
      <tab name="Log In">
        <log-in />
      </tab>
    </tabs>
  </div>
</template>

<script>
import SignUp from './SignUp';
import LogIn from './LogIn';


export default {
  components: {
    SignUp,
    LogIn
  }
};
</script>

<style lang="sass">
@import "../../css/_variables"
@import "../../css/_mixins"
@import "../../css/_functions"

.tabs-component-tabs
  position: absolute
  display: flex
  left: 0
  padding: 0 40px
  top: 0
  @media screen and (max-width: $fablet)
    padding: 0 20px
.tabs-component-tab
  padding-top: 20px
  border-top: 1px solid transparent
  transition: border $time $tFunc
  & + .tabs-component-tab
    margin-left: 35px
  &.is-active
    border-top-color: $accent
    .tabs-component-tab-a
      opacity: 1

.tabs-component-tab-a
  color: $light
  opacity: .3
  transition: opacity $time $tFunc
</style>
