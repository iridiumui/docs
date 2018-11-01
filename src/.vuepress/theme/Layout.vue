<template>
    <div class="font-sans min-h-screen overflow-hidden bg-white lg:overflow-visible">
        <site-header></site-header>
        <div class="flex xl:justify-between">
            <site-sidebar></site-sidebar>
            <main class="px-3 pt-20 md:px-0 md:max-w-md md:mx-auto md:pt-24 lg:flex-1 lg:pt-16 xl:w-full xl:mx-16">
                <Content />
            </main>
            <screen-xl>
                <portal-target name="local-sidebar"></portal-target>
            </screen-xl>
        </div>

        <ScrollTop>
            <button class="fixed" style="bottom: 2rem; right: 2rem;" type="button" slot-scope="{ scroll, show }" v-show="show" @click="scroll">
                <visually-hidden>
                    <span>Scroll to top</span>
                </visually-hidden>
                <svg class="w-8 h-8 text-grey-light" fill="currentColor" viewBox="0 0 27 15" xmlns="http://www.w3.org/2000/svg"><path d="M14.837.54l11.609 11.314a1.81 1.81 0 0 1 0 2.606c-.738.72-1.936.72-2.674 0L13.5 4.45 3.228 14.46c-.739.72-1.936.72-2.674 0a1.81 1.81 0 0 1 0-2.606L12.164.539C12.532.18 13.015 0 13.5 0c.484 0 .968.18 1.337.54z"/></svg>
            </button>
        </ScrollTop>
    </div>
</template>

<script>
    import SiteHeader from './components/SiteHeader'
    import SiteSidebar from './components/SiteSidebar'

    export default {
        components: {
            SiteHeader,
            SiteSidebar,
        }
    }
</script>

<style src="./styles/app.css"></style>
