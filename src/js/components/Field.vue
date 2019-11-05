<template>
  <div
    class="form-group"
    :class="{'form-group--invalid' : errors.first(inputName)}"
  >
    <label
      v-if="labelText"
      class="form-group__label"
      :for="id"
    >{{ labelText }}</label>
    <input
      :id="id"
      v-validate="validation"
      :type="pass && eyeOpened ? 'text' : inputType"
      class="form-group__input"
      :name="inputName"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >

    <label
      v-if="pass"
      :for="inputName"
      class="form-group__eye"
      :class="{'form-group__eye--open': eyeOpened}"
      @click="eyeOpened ^= true"
    >
      <svg class="form-group__icon"><use xlink:href="#eye" /></svg>
    </label>


    <transition name="fade">
      <p
        v-if="errors.first(inputName)"
        class="form-group__sub-text"
      >
        {{ errors.first(inputName) }}
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Field',
  model: {
    prop: 'value',
    event: 'input'
  },
  inject: ['$validator'],
  props: {
    value: { type: String, required: true },
    labelText: { type: String, required: true },
    validation: { type: [String, Object], required: true },
    inputName: { type: String, required: true },
    placeholder: { type: String, default: '' },
    inputType: { type: String, default: 'text' },
    pass: { type: Boolean, default: false },
    id: { type: String, required: true }
  },
  data: () => ({
    eyeOpened: false
  })
};
</script>

<style lang="sass">
@import "../../css/_variables"
@import "../../css/_mixins"
@import "../../css/_functions"

.form-group
  $this: &
  margin-bottom: 25px
  position: relative
  width: 100%
  border-bottom: 1px solid $border
  transition: border-color $time $tFunc
  &::before
    content: ''
    position: absolute
    width: 0
    height: 1px
    left: 0
    bottom: -1px
    background-color: $active
    transition: width $time $tFunc
  &:focus-within
    &::before
      width: 100%
  &--invalid
    border-color: $danger
    #{$this}__label
      color: $danger
  &__
    &label
      display: inline-block
      color: $text
      font-size: 14px
      margin-bottom: 8px
      transition: color $time $tFunc
      &[for]
        cursor: pointer
    &input
      display: block
      color: $light
      font-size: 16px
      width: 100%
      padding-bottom: 8px
      &::placeholder
        color: $ph
        font-size: 16px
    &icon
      width: 25px
      height: 16px
    &eye
      position: absolute
      right: 0
      bottom: 7px
      cursor: pointer
      &--open
        &::before
          content: ''
          position: absolute
          left: 0
          top: 7px
          width: 25px
          height: 1px
          background-color: $active
          transform: rotate(45deg)
          transition: transform $time $tFunc
    &sub-text
      position: absolute
      top: calc(100% + 7px)
      left: 0
      font-size: 11px
      color: $danger
</style>
