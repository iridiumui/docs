<template>
    <div>
        <div v-for="group in sidebarNavGroups" class="px-12 pb-8">
            <h3 class="text-xs font-bold text-grey uppercase tracking-wide leading-none mb-3">{{ group.name }}</h3>
            <ul class="list-reset">
                <li v-for="link in group.links">
                    <router-link :to="`/docs/${group.slug}/${link.slug}/`" class="sidebar-link">
                        {{ link.name }}
                    </router-link>
                    <div v-if="link.sublinks" class="mb-6">
                        <router-link v-for="sublink in link.sublinks" :to="`/docs/${group.slug}/${link.slug}/${sublink.slug}/`" class="sidebar-sublink pl-3 font-normal">
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
        }
    }
</script>
