<template>
  <div
    class="form-group"
    :class="{'form-group--invalid' : errors.first(inputName)}"
  >
    <label
      v-if="labelText"
      class="form-group__label"
      :for="inputName"
    >{{ labelText }}</label>
    <input
      :id="inputName"
      v-validate="validation"
      :type="pass && eyeOpened ? 'text' : inputType"
      class="form-group__input"
      :name="inputName"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >

     <label :for="inputName" class="form-group__eye" :class="{'form-group__eye--open': eyeOpened}" v-if="pass" @click="eyeOpened ^= true">
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
  },
  data: () => ({
      eyeOpened: false
  }),
};
</script>

<style lang="sass">

</style>
