<template>
    <transition name="slide-fade-up">
        <slot :scroll="scroll" :show="show"></slot>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        },

        mounted() {
            const heading = document.querySelector('h1')

            if (heading) {
                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        this.show = !entry.intersectionRatio
                    })
                })

                observer.observe(heading)
            }
        },

        methods: {
            scroll() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
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
