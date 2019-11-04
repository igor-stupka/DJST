<template>
    <div class="form-group">
        <label class="form-group__label" v-if="labelText">{{ labelText }}</label>

        <div class="form-group__select" :class="{ 'form-group__select--opened':opened }" @click="opened ^= true">

            {{ textValue }}

            <svg class="form-group__select-arrow"><use xlink:href="#angle"></use></svg>

            <input type="hidden" name="" :value="selectedValue">

            <div class="form-group__select-items">
                <div @click="selectValue(option.value, option.text)"
                     class="form-group__select-item"
                     v-for="(option, index) in options"
                     v-if="selectedValue !== option.value"
                     :key="index">
                    <span >{{ option.text }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Select",
        props: {
            labelText: {
                type: String,
                default: ''
            },

            options: {
                type: Array | Object,
                default: () => {
                    return [
                        {value: 'male', text: 'Male'},
                        {value: 'female', text: 'Female'}
                    ]
                }
            }
        },
        data: () => ({
            opened: false,
            textValue: 'Select the option',
            selectedValue: ''
        }),
        methods: {
            selectValue(value, text) {
                this.textValue = text;
                this.selectedValue = value;
            },
            closeResults() {
                this.opened = false;
            }
        }
    }
</script>

<style lang="sass">

     
</style>