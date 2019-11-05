<template>
  <div
    class="checkbox"
    :class="{'checkbox--invalid' : errors.first(checkName)}"
  >
    <input
      :id="checkId"
      v-validate="validation"
      class="checkbox__input"
      type="checkbox"
      :name="checkName"
      :value="value"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    >
    <label
      class="checkbox__label"
      :for="checkId"
    >
      <slot />
    </label>
    <transition name="fade">
      <p
        v-if="errors.first(checkName)"
        class="checkbox__sub-text"
      >
        {{ errors.first(checkName) }}
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  inject: ['$validator'],
  props: {
    value: { type: String, required: true },
    checked: { type: Boolean, default: false },
    validation: { type: [String, Object], default: '' },
    checkName: { type: String, required: true },
    checkId: { type: String, required: true }
  }
};
</script>

<style lang="sass">
@import "../../css/_variables"
@import "../../css/_mixins"
@import "../../css/_functions"

.checkbox
  $this: &
  position: relative
  margin-bottom: 15px
  &--invalid
    #{$this}__label::before
      border-color: $danger
  &__
    &input
      position: absolute
      opacity: 0
      z-index: -999
      width: 1px
      height: 1px
      overflow: hidden
      left: 0
      top: 5px
      &:checked + #{$this}__label::after
        opacity: 1
    &label
      padding-left: 28px
      font-size: 14px
      color: $text
      cursor: pointer
      user-select: none
      &::before
        content: ''
        position: absolute
        left: 0
        top: 2px
        width: 16px
        height: 16px
        border-radius: 2px
        border: 1px solid $checkbox
        transition: border-color $time $tFunc
      &::after
        content: ''
        position: absolute
        width: 8px
        height: 8px
        left: 4px
        top: 6px
        background-color: $active
        border-radius: 2px
        opacity: 0
        transition: opacity $time $tFunc
    &sub-text
      position: absolute
      top: calc(100% + 2px)
      left: 0
      font-size: 11px
      color: $danger
</style>
