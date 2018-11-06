<template>
    <div class="note bg-blue p-4 mb-8 text-base text-white">
        <span class="font-bold block mb-2">{{ heading }}</span>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            heading: {
                type: String,
                default: 'Note'
            }
        }
    }
</script>
