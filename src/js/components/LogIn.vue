<template>
  <div class="log-in">
    <form @submit.prevent="onSubmit">
      <div class="log-in__grid">
        <div class="log-in__left">
          <svg class="log-in__pic"><use xlink:href="#laptop" /></svg>
        </div>
        <div class="log-in__right">
          <div class="log-in__fields">
            <field
              id="login"
              v-model="login"
              :validation="'required'"
              label-text="Login"
              input-name="Login"
              placeholder="Enter your nickname or e-mail"
            />
            <field
              id="pass"
              v-model="pass"
              :validation="'required|min:6'"
              label-text="Password"
              input-type="password"
              :pass="true"
              input-name="Password"
              placeholder="Enter your Password"
            />
          </div>
          <div class="log-in__button">
            <button
              class="button"
              type="submit"
            >
              <span class="button__text">Log In</span>
              <svg class="button__icon">
                <use xlink:href="#arrow" /></svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
import Field from './Field';

export default {
  components: {
    Field
  },
  data() {
    return {
      login: '',
      pass: ''
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          const data = {
            login: this.login,
            pass: this.pass
          };

          axios.post('http://httpbin.org/post', data)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    }
  }
};

</script>
<style lang="sass">
@import "../../css/_variables"
@import "../../css/_mixins"
@import "../../css/_functions"

.log-in
  padding-top: 20px
  &__
    &grid
      display: grid
      grid-template-columns: 1fr 1fr
      grid-gap: 20px
      min-height: 270px
      @media screen and (max-width: $fablet)
        grid-template-columns: 1fr
    &pic
      max-width: 170px
      margin: 20px auto 0
      display: block
      @media screen and (max-width: $fablet)
        max-width: 125px
    &fields
      width: 100%
    &right
      +flex(column, space-between, center)
    &button
      @media screen and (max-width: $fablet) and (min-height: 500px)
        position: absolute
        bottom: 20px
        left: 0
        width: 100%
</style>
