<template>
    <ir-code-block class="relative">
        <div slot="content">
            <slot></slot>
        </div>
        <button
            type="button"
            slot="button"
            slot-scope="{ copy, copied }"
            @click="copy"
            class="absolute pin-t pin-r p-2 text-grey font-semibold"
            :class="{ 'text-grey-light': copied }"
            :disabled="copied"
        >
            <span v-text="copied ? 'Copied' : 'Copy'"></span>
        </button>
    </ir-code-block>
</template>
