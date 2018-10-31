<template>
    <div class="font-sans min-h-screen overflow-hidden bg-white lg:overflow-visible">
        <site-header></site-header>
        <div class="flex xl:justify-between">
            <site-sidebar></site-sidebar>
            <main class="px-3 pt-20 md:px-0 md:max-w-md md:mx-auto md:pt-24 lg:pt-32 xl:w-full xl:mx-16">
                <Content />
            </main>
            <screen-xl>
                <aside class="pt-20 md:pt-24 lg:pt-32 w-80 pr-10">
                    <p>Local Sidebar</p>
                </aside>
            </screen-xl>
        </div>
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
