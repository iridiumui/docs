<template>
    <aside class="local-sidebar sticky pin-t pt-32 w-80 pr-10">
        <ir-scroll-to v-for="section in localSections" :element="`#${section.slug}`">
            <a slot-scope="{ scroll }"
               :href="`#${section.slug}`"
               @click.prevent="scroll"
            >
                {{ section.title }}
            </a>
        </ir-scroll-to>
    </aside>
</template>

<script>
    export default {
        computed: {
            localSections() {
                return this.$page.headers
            }
        }
    }
</script>
