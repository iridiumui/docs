<template>
    <transition name="slide-fade-up">
        <slot :scroll="scroll" :show="show"></slot>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                observer: null
            }
        },

        mounted() {
            this.setupObserver()
        },

        methods: {
            scroll() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            },

            setupObserver() {
                this.destroyObserver()

                const heading = document.querySelector('h1')

                if (heading) {
                    this.observer = new IntersectionObserver((entries, observer) => {
                        entries.forEach(entry => {
                            this.show = !entry.intersectionRatio
                        })
                    })

                    this.observer.observe(heading)
                }
            },

            destroyObserver() {
                if (this.observer) {
                    this.observer.disconnect()
                    this.observer = null
                }
            }
        },

        destroyed() {
            this.destroyObserver()
        },

        watch: {
            $route(to, from) {
                this.setupObserver()
            }
        }
    }
</script>

<style>
    .slide-fade-up-enter-active, .slide-fade-up-leave-active {
        transition: all 200ms;
    }
    .slide-fade-up-enter, .slide-fade-up-leave-to  {
        opacity: 0;
        transform: translateY(50%);
    }
</style>
