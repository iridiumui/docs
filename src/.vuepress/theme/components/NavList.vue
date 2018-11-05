<template>
    <div>
        <div v-for="group in sidebarNavGroups" class="px-12 pb-8">
            <h3 class="text-xs font-bold text-grey uppercase tracking-wide leading-none mb-3">{{ group.name }}</h3>
            <ul class="list-reset">
                <li v-for="link in group.links">
                    <router-link
                        :to="generateLink(group, link)"
                        class="sidebar-link text-grey-dark"
                    >
                        {{ link.name }}
                    </router-link>
                    <div v-if="link.sublinks" class="mb-6">
                        <router-link v-for="sublink in link.sublinks" :to="generateSublink(group, link, sublink)" class="sidebar-sublink text-grey-dark pl-3 font-normal">
                            {{ sublink.name }}
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>

        <slot name="footer" :global-nav-items="globalNavItems"></slot>

    </div>
</template>

<script>
    export default {
        computed: {
            globalNavItems() {
                return this.$site.themeConfig.navigation.global
            },

            sidebarNavGroups() {
                return this.$site.themeConfig.navigation.sidebar
            }
        },

        methods: {
            generateLink(group, link) {
                return `/docs/${group.slug}/${link.slug}/`
            },

            generateSublink(group, link, sublink) {
                return `/docs/${group.slug}/${link.slug}/${sublink.slug}/`
            }
        }
    }
</script>
