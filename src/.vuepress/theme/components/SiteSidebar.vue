<template>
    <screen-lg>
    <fixed-left>
        <aside class="sidebar">
            <nav class="bg-grey-lightest border-t border-grey-lighter overflow-y-auto h-full pt-8 md:pt-12">
                <div v-for="group in sidebarNavGroups" class="px-12 pb-8">
                    <h3 class="text-xs font-bold text-grey uppercase tracking-wide leading-none mb-3">{{ group.name }}</h3>
                    <ul class="list-reset">
                        <li v-for="link in group.links">
                            <router-link :to="`/${group.slug}/${link.slug}`" class="sidebar-link">
                                {{ link.name }}
                            </router-link>
                            <div v-if="link.sublinks" class="mb-6">
                                <router-link v-for="sublink in link.sublinks" :to="`/${group.slug}/${link.slug}/${sublink.slug}`" class="sidebar-link pl-3">
                                    {{ sublink.name }}
                                </router-link>
                            </div>
                        </li>
                    </ul>
                </div>
                <screen-lg direction="down">
                    <ul class="list-reset px-12 py-8 border-t border-grey-lighter">
                        <li v-for="item in globalNavItems">
                            <a
                                :href="item.url"
                                target="_blank"
                                class="sidebar-link"
                            >
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </screen-lg>
            </nav>
        </aside>
    </fixed-left>
    </screen-lg>
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
    }
</script>
