<template>
  <div class="login">
    <tabs>
      <tab
        name="Sign Up"
        class="sign-up"
      >
        <ol class="sign-up__steps">
          <li class="sign-up__step sign-up__step--active">
            Account
          </li>
          <li class="sign-up__step">
            Profile
          </li>
          <li class="sign-up__step">
            Verification
          </li>
        </ol>
        <div class="sign-up__grid">
          <div class="accoutns">
            <div class="accounts__title"> Pick a account</div>

              <input id="business" type="radio" value="1" v-model="accountType" class="accounts__input">
              <label for="business" class="accounts__label">
                <span class="accounts__type">Business account</span>
                <svg class="accounts__icon "><use xlink:href="#business"></use></svg>
              </label>

              <input id="personal" type="radio" value="2" v-model="accountType" class="accounts__input">
              <label for="personal" class="accounts__label">
                <span class="accounts__type">Personal account</span>
                <svg class="accounts__icon "><use xlink:href="#personal"></use></svg>
              </label>
             
          </div>
          <div class="sign-up__fields">
            <custom-select label-text="Currency" />
            <field :validation="'required|email'" labelText="E-mail" inputType="email" inputName="E-mail" placeholder="Enter your e-mail" v-model="email" />
            <field :validation="'required|min:6'" labelText="Password" inputType="password" :pass="true" inputName="Password" placeholder="Enter your Password" v-model="password" />
          </div>
          
        </div>
      </tab>
      <tab name="Log In">
        This is the content of the second tab
      </tab>
    </tabs>
  </div>
</template>

<script>
import CustomSelect from './Select';
import Field from './Field';

export default {
  components: {
    CustomSelect,
    Field
  },
  data() { 
    return {
      accountType: 1,
      email: '',
      password: ''
    }; 
  }
};
</script>

<style lang="sass"></style>
