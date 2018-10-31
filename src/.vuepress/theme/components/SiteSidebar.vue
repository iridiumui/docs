<template>
    <screen-lg>
        <aside class="w-64 pt-16 h-screen xl:w-80 sticky pin-t">
            <nav class="bg-grey-lightest border-t border-grey-lighter overflow-y-auto h-full pt-8 md:pt-12">
                <nav-list>
                    <screen-lg slot="footer" slot-scope="{ globalNavItems }" direction="down">
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
                </nav-list>
            </nav>
        </aside>
    </screen-lg>
</template>

<script>
    import NavList from './NavList'

    export default {
        components: {
            NavList
        },
    }
</script>
