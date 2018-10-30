<template>
    <div class="font-sans min-h-screen overflow-hidden bg-white">
        <site-header></site-header>
        <div>
            <site-sidebar></site-sidebar>
        </div>
    </div>
</template>

<script>
    import SiteHeader from './components/SiteHeader'
    import SiteSidebar from './components/SiteSidebar'

    export default {
        components: {
            SiteHeader
            SiteHeader,
            SiteSidebar,
        }
    }
</script>

<style src="./styles/app.css"></style>
