<template>
  <div class="form-group">
    <label
      v-if="labelText"
      class="form-group__label"
    >{{ labelText }}</label>

    <div
      v-click-outside="closeResults"
      class="form-group__select"
      :class="{ 'form-group__select--opened':opened }"
      @click="opened ^= true"
    >
      <div class="form-group__select-text">
        {{ textValue }}
      </div>

      <svg class="form-group__select-arrow"><use xlink:href="#angle" /></svg>

      <input
        type="hidden"
        name=""
        :value="selectedValue"
        @change="$emit('change', $event.target.value)"
      >

      <div class="form-group__select-items">
        <template
          v-for="(option, index) in options"
        >
          <div
            v-if="selectedValue !== option.value"
            :key="index"
            class="form-group__select-item"
            @click="selectValue(option.value, option.text)"
          >
            <span>{{ option.text }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'Select',
  directives: {
    ClickOutside
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    labelText: { type: String, default: '' },

    options: {
      type: Array || Object,
      default: () => [
        { value: 'male', text: 'Male' },
        { value: 'female', text: 'Female' }
      ]
    }
  },
  data: () => ({
    opened: false,
    textValue: 'Select the option',
    selectedValue: ''
  }),
  mounted() {
    this.textValue = this.options[0].text;
    this.selectedValue = this.options[0].value;
  },
  methods: {
    selectValue(value, text) {
      this.textValue = text;
      this.selectedValue = value;
      this.$emit('setValue', value);
    },
    closeResults() {
      this.opened = false;
    }
  }
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
  &__
    &label
      display: inline-block
      color: $text
      font-size: 14px
      margin-bottom: 8px
      transition: color $time $tFunc
    &sub-text
      position: absolute
      top: calc(100% + 7px)
      left: 0
      font-size: 11px
      color: $danger
    &select
      width: 100%
      cursor: pointer
      user-select: none
      position: relative
      padding-bottom: 8px
      color: $ph
      &--opened
        #{$this}__select-items
          display: block
          z-index: 1
          &::-webkit-scrollbar
            width: 4px
          &::-webkit-scrollbar-track
            background: linear-gradient(#fff 0%, #fff calc(100% - 5px), transparent calc(100% - 5px), transparent 100%)
          &::-webkit-scrollbar-thumb
            background: linear-gradient(#eaeff2 0%, #eaeff2 calc(100% - 5px), transparent calc(100% - 5px), transparent 100%)
          &::-webkit-scrollbar-thumb:hover
            background: linear-gradient(#ddd 0%, #ddd calc(100% - 5px), transparent calc(100% - 5px), transparent 100%)
        #{$this}__select-arrow
          transform: rotate(180deg)
    &select-items
      display: none
      position: absolute
      top: 100%
      left: 0
      background: #fff
      width: 100%
      max-height: 250px
      overflow-y: auto
    &select-item
      padding: 8px 10px
      cursor: pointer
      &:hover
        background: #eee
    &select-arrow
      position: absolute
      right: 0
      top: calc(50% - 4px)
      width: 10px
      height: 5px
      transition: transform $time $tFunc
    &select-text
      max-width: calc(100% - 15px)
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
</style>
