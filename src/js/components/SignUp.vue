<template>
  <div class="sign-up">
    <ol class="sign-up__steps">
      <li class="sign-up__step sign-up__step--active">
        <div class="sign-up__step-text">
          Account
        </div>
      </li>
      <li class="sign-up__step">
        <div class="sign-up__step-text">
          Profile
        </div>
      </li>
      <li class="sign-up__step">
        <div class="sign-up__step-text">
          Verification
        </div>
      </li>
    </ol>
    <form @submit.prevent="onSubmit">
      <div class="sign-up__grid">
        <div class="accoutns">
          <div class="accounts__title">
            Pick a account
          </div>
          <div class="accounts__items">
            <input
              id="business"
              v-model="accountType"
              type="radio"
              value="1"
              class="accounts__input"
            >
            <label
              for="business"
              class="accounts__label"
            >
              <span class="accounts__type">Business account</span>
              <img
                src="../../img/business.svg"
                alt=""
                class="accounts__icon"
              >
            </label>
            <input
              id="personal"
              v-model="accountType"
              type="radio"
              value="2"
              class="accounts__input"
            >
            <label
              for="personal"
              class="accounts__label"
            >
              <span class="accounts__type">Personal account</span>
              <img
                src="../../img/personal.svg"
                alt=""
                class="accounts__icon"
              >
            </label>
          </div>
        </div>
        <div class="sign-up__fields">
          <field
            id="mail"
            v-model="email"
            :validation="'required|email'"
            label-text="E-mail"
            input-type="email"
            input-name="E-mail"
            placeholder="Enter your e-mail"
          />
          <field
            id="password"
            v-model="password"
            :validation="'required|min:6'"
            label-text="Password"
            input-type="password"
            :pass="true"
            input-name="Password"
            placeholder="Enter your Password"
          />
          <div class="sign-up__separete-fields">
            <field
              id="country"
              v-model="country"
              :validation="'required|alpha_spaces|min:2'"
              label-text="Your country"
              input-name="Country"
              placeholder="Enter your Country"
            />
            <custom-select
              label-text="Currency"
              :options="currencyData"
              @setValue="(value)=>{currency = value}"
            />
          </div>
          <checkbox
            v-model="policyChecked"
            value="policy"
            check-name="policy"
            :validation="'required'"
            check-id="policy"
          >
            I accept terms & condition
          </checkbox>
          <checkbox
            v-model="notifyChecked"
            value="notify"
            check-name="notify"
            check-id="notify"
          >
            I’d like to recieve essential notifications
          </checkbox>
        </div>
      </div>
      <button
        class="button"
        type="submit"
      >
        <span class="button__text">Sign up</span>
        <svg class="button__icon">
          <use xlink:href="#arrow" /></svg>
      </button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
import CustomSelect from './Select';
import Field from './Field';
import Checkbox from './Checkbox';

export default {
  components: {
    CustomSelect,
    Field,
    Checkbox
  },
  data() {
    return {
      accountType: 1,
      email: '',
      password: '',
      country: '',
      currencyData: [
        { value: 'usd', text: 'USD' },
        { value: 'eur', text: 'EUR' },
        { value: 'uah', text: 'UAH' },
        { value: 'rub', text: 'RUB' }
      ],
      currency: '',
      policyChecked: false,
      notifyChecked: true
    };
  },
  mounted() {
    this.currency = this.currencyData[0].value;
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          const data = {
            accountType: this.accountType,
            email: this.email,
            password: this.password,
            country: this.country,
            policyChecked: this.policyChecked,
            notifyChecked: this.notifyChecked,
            currency: this.currency
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

.sign-up
  $this: &
  &__
    &steps
      +flex(row, space-between, center)
      overflow: hidden
      padding-bottom: 15px
      margin-bottom: 25px
    &step
      position: relative
      text-align: center
      padding: 20px 0
      transition: color $time $tFunc
      @media screen and (max-width: $fablet)
        font-size: 14px

      &:last-child
        #{$this}__step-text,
        &::before
          left: auto
          right: 0
          transform: translateX(0)
      &:first-child
        #{$this}__step-text,
        &::before
          left: 0
          right: auto
          transform: translateX(0)
      &::before
        content: ''
        width: 30px
        height: 30px
        position: absolute
        bottom: -15px
        left: 50%
        transform: translateX(-50%)
        z-index: 1
        border-radius: 50%
        background-color: $light
        border: 10px solid $secondary
        transition: border-color $time $tFunc
      &:not(:last-child)
        &::after
          content: ''
          position: absolute
          height: 1px
          width: 330px
          left: 50%
          bottom: 0
          background-color: $secondary
          transition: background-color $time $tFunc
      &--active
        color: $light
        &::before
          border-color: $accent
        &::after
          background-color: $accent !important
    &step-text
      color: $text
      font-weight: bold
      position: absolute
      top: 0
      left: 50%
      transform: translateX(-50%)
    &grid
      display: grid
      grid-template-columns: 285px auto
      grid-gap: 40px 43px
      margin-bottom: 65px
      @media screen and (max-width: $fablet)
        grid-template-columns: 100%
        margin-bottom: 30px
    &separete-fields
      display: grid
      grid-template-columns: auto 105px
      grid-gap: 20px

.accounts
  $this: &
  &__
    &title
      color: $text
      font-size: 14px
      margin-bottom: 15px
    &items
      display: grid
      grid-template-columns: 100%
      grid-gap: 25px
      @media screen and (max-width: $fablet)
        grid-template-columns: 1fr 1fr
    &label
      opacity: .5
      cursor: pointer
      border: 1px solid transparent
      border-radius: 8px
      background-color: $acc
      width: 100%
      padding: 20px 16px
      +flex(row, space-between, center)
      @media screen and (max-width: $fablet)
        padding: 16px
        flex-direction: column
        align-items: flex-start


    &icon
      height: 35px
      width: 55px
      @media screen and (max-width: $fablet)
        margin-left: auto
    &input
      opacity: 0
      position: absolute
      width: 1px
      height: 1px
      overflow: hidden
      z-index: -999
      &:checked + #{$this}__label
        opacity: 1
        border: 1px solid rgba(125, 119, 233, 0.2)
        background-color: $activeAcc
    &type
      font-size: 17px
      color: $light
      @media screen and (max-width: $fablet)
        font-size: 14px
        margin-bottom: 10px
</style>
