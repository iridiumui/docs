<template>
    <header class="bg-grey-lightest flex items-center p-3">
        <div>
            <router-link to="/">
                <screen-md direction="down">
                    <svg class="h-8" viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg">
                        <g class="text-pink" fill="currentColor" ><circle cx="7.034" cy="32.828" r="7.034" /><circle cx="32.828" cy="32.828" r="7.034" /><circle cx="32.828" cy="60.966" r="7.034" /><circle cx="32.828" cy="7.034" r="7.034" /><circle cx="60.966" cy="32.828" r="7.034" /><path d="M7.01 37.292l3.317-3.317 24.87 24.87-3.316 3.317zM34.493 10.5l3.316-3.317 24.87 24.87-3.316 3.316z" /></g>
                    </svg>
                </screen-md>
                <screen-lg>
                    <svg viewBox="0 0 274 68" xmlns="http://www.w3.org/2000/svg">
                        <g class="text-black" fill="currentColor"><path d="M96.298 43.558H91V19h5.298v24.558zm25.109 0h-6.119l-4.887-8.726h-3.88v8.726h-5.298V19h11.64c5.186 0 8.394 3.35 8.394 7.916 0 4.308-2.798 6.664-5.484 7.29l5.634 9.352zm-9.29-13.328c2.09 0 3.693-1.252 3.693-3.35 0-2.026-1.604-3.278-3.693-3.278h-5.597v6.628h5.597zm18.393 13.328h-5.298V19h5.298v24.558zm14.774 0h-9.85V19h9.813c7.798 0 13.207 4.897 13.207 12.26 0 7.438-5.41 12.298-13.17 12.298zm-.037-4.602c4.925 0 7.798-3.498 7.798-7.695 0-4.308-2.687-7.659-7.76-7.659h-4.552v15.354h4.514zm22.273 4.602h-5.297V19h5.297v24.558zm16.155.442c-7.573 0-11.23-4.197-11.23-10.272V19h5.373v14.58c0 3.424 2.014 5.78 5.857 5.78 3.843 0 5.82-2.356 5.82-5.78V19h5.41v14.728c0 6.075-3.656 10.272-11.23 10.272zm43.13-.442h-5.336v-17.71l-7.014 17.71h-2.313l-7.014-17.71v17.71h-5.298V19h7.424l6.044 15.353L219.343 19h7.461v24.558zm25.742.442c-7.573 0-11.23-4.197-11.23-10.272V19h5.373v14.58c0 3.424 2.015 5.78 5.857 5.78 3.843 0 5.82-2.356 5.82-5.78V19h5.41v14.728c0 6.075-3.656 10.272-11.23 10.272zM274 43.558h-5.298V19H274v24.558z" /><g class="text-pink" fill="currentColor"><circle cx="7.034" cy="32.828" r="7.034" /><circle cx="32.828" cy="32.828" r="7.034" /><circle cx="32.828" cy="60.966" r="7.034" /><circle cx="32.828" cy="7.034" r="7.034" /><circle cx="60.966" cy="32.828" r="7.034" /><path d="M7.01 37.292l3.317-3.317 24.87 24.87-3.316 3.317zM34.493 10.5l3.316-3.317 24.87 24.87-3.316 3.316z" /></g></g>
                    </svg>
                </screen-lg>
            </router-link>
        </div>
        <form class="flex-1 mx-4">
            <div class="relative">
                <svg class="text-grey-light w-4 h-4 absolute vertical-center" style="left: 0.5rem;" fill="currentColor" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg"><path d="M16.769 14.698l-3.31-3.31a.796.796 0 0 0-.565-.233h-.542a6.871 6.871 0 0 0 1.462-4.25A6.905 6.905 0 0 0 6.907 0a6.905 6.905 0 1 0 0 13.811 6.874 6.874 0 0 0 4.25-1.46v.54c0 .213.083.416.233.565l3.31 3.31a.794.794 0 0 0 1.126 0l.94-.94a.8.8 0 0 0 .003-1.128zm-9.862-3.543a4.248 4.248 0 0 1-4.25-4.25c0-2.347 1.899-4.249 4.25-4.249a4.248 4.248 0 0 1 4.25 4.25c0 2.347-1.9 4.25-4.25 4.25z"/></svg>
                <input class="bg-grey-lighter outline-none w-full pl-8 pr-4 py-3 focus:bg-white transition transition-150" type="search" placeholder="Search">
            </div>
        </form>
        <screen-md direction="down">
            <hamburger-nav>
                <button slot="toggle" slot-scope="{ toggle }" @click="toggle">
                    <visually-hidden>
                        <span>
                            Open Menu
                        </span>
                    </visually-hidden>
                    <svg viewBox="0 0 29 22" width="29" height="22" xmlns="http://www.w3.org/2000/svg"><g fill="#6F7178"><rect width="29" height="4" rx="2"/><rect y="9" width="29" height="4" rx="2"/><rect y="18" width="29" height="4" rx="2"/></g></svg>
                </button>
                <template slot="content" slot-scope="{ open, toggle }">
                    <nav v-show="open">
                        <a href="#">content</a>
                    </nav>
                </template>
            </hamburger-nav>
        </screen-md>
    </header>
</template>
<script>
    export default {}
</script>
