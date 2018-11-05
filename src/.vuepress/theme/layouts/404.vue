<template>
    <div>
        <header class="px-3 h-16 flex items-center md:px-0 md:max-w-md md:mx-auto lg:max-w-lg">
            <router-link to="/">
                <svg class="h-8" viewBox="0 0 274 68" xmlns="http://www.w3.org/2000/svg">
                    <g class="text-white" fill="currentColor"><path d="M96.298 43.558H91V19h5.298v24.558zm25.109 0h-6.119l-4.887-8.726h-3.88v8.726h-5.298V19h11.64c5.186 0 8.394 3.35 8.394 7.916 0 4.308-2.798 6.664-5.484 7.29l5.634 9.352zm-9.29-13.328c2.09 0 3.693-1.252 3.693-3.35 0-2.026-1.604-3.278-3.693-3.278h-5.597v6.628h5.597zm18.393 13.328h-5.298V19h5.298v24.558zm14.774 0h-9.85V19h9.813c7.798 0 13.207 4.897 13.207 12.26 0 7.438-5.41 12.298-13.17 12.298zm-.037-4.602c4.925 0 7.798-3.498 7.798-7.695 0-4.308-2.687-7.659-7.76-7.659h-4.552v15.354h4.514zm22.273 4.602h-5.297V19h5.297v24.558zm16.155.442c-7.573 0-11.23-4.197-11.23-10.272V19h5.373v14.58c0 3.424 2.014 5.78 5.857 5.78 3.843 0 5.82-2.356 5.82-5.78V19h5.41v14.728c0 6.075-3.656 10.272-11.23 10.272zm43.13-.442h-5.336v-17.71l-7.014 17.71h-2.313l-7.014-17.71v17.71h-5.298V19h7.424l6.044 15.353L219.343 19h7.461v24.558zm25.742.442c-7.573 0-11.23-4.197-11.23-10.272V19h5.373v14.58c0 3.424 2.015 5.78 5.857 5.78 3.843 0 5.82-2.356 5.82-5.78V19h5.41v14.728c0 6.075-3.656 10.272-11.23 10.272zM274 43.558h-5.298V19H274v24.558z" /><g class="text-white" fill="currentColor"><circle cx="7.034" cy="32.828" r="7.034" /><circle cx="32.828" cy="32.828" r="7.034" /><circle cx="32.828" cy="60.966" r="7.034" /><circle cx="32.828" cy="7.034" r="7.034" /><circle cx="60.966" cy="32.828" r="7.034" /><path d="M7.01 37.292l3.317-3.317 24.87 24.87-3.316 3.317zM34.493 10.5l3.316-3.317 24.87 24.87-3.316 3.316z" /></g></g>
                </svg>
            </router-link>
        </header>
        <main class="text-white px-3 py-8 md:px-0 md:max-w-md md:mx-auto lg:max-w-lg">
            <h1 class="font-bold mb-4 text-4xl md:text-5xl">404 - Page not found</h1>
            <p class="mb-8 md:text-xl">Something went wrong. We couldn't find the place you were looking for.</p>
            <router-link
                to="/"
                class="inline-block bg-white px-6 py-4 text-sm tracking-wide text-black font-bold uppercase no-underline"
            >Go to front page</router-link>
        </main>
    </div>
</template>

<style src="../styles/app.css"></style>
