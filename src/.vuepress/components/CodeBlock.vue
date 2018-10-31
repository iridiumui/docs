<template>
    <div class="relative">
        <slot></slot>
        <button
            type="button"
            @click="copy"
            class="absolute pin-t pin-r p-2 text-grey font-semibold"
            :class="{ 'text-grey-light': copied }"
            :disabled="copied"
        >
            {{ text }}
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            successCallback: {
                type: Function,
                required: false
            },

            errorCallback: {
                type: Function,
                required: false
            },
        },

        data() {
            return {
                text: 'Copy',
                copied: false
            }
        },

        methods: {
            copy() {
                const selection = window.getSelection()
                const range = document.createRange()

                range.selectNodeContents(this.$el.querySelector('pre code'))
                selection.removeAllRanges()
                selection.addRange(range)

                try {
                    document.execCommand('copy')
                    selection.removeAllRanges()

                    if (this.successCallback) {
                        this.successCallback()
                    } else {
                        this.text = 'Copied'
                        this.copied = true

                        setTimeout(() => {
                            this.text = 'Copy'
                            this.copied = false
                        }, 2000)
                    }
                } catch (error) {
                    if (this.errorCallback) {
                        this.errorCallback()
                    } else {
                        this.text = 'Error'
                        this.copied = true

                        setTimeout(() => {
                            this.text = 'Error'
                            this.copied = false
                        }, 2000)
                    }
                }
            }
        }
    }
</script>
