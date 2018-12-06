# Screen LG

The Screen LG component is an abstraction of the [Breakpoint](../) component. 

It can be used to display content on any screen sizes larger than `992px` or smaller than `1200px`.

It supports two modes, up and down. Both modes are including the small breakpoint which ranges from `992px` to `1200px`. The up mode will render the content on screens larger than `992px`. The down mode will render content on screens smaller than `1200px`.

## Props

| Name      | Description                       | Type   | Required | Default Value |
|-----------|-----------------------------------|--------|----------|---------------|
| direction | Which mode the component will use | String | No       | 'up'          |

## Examples
<CodeBlock>
```html
<template>
    <screen-lg>
        <p>This text is only visible on screens larger than 992px.</p>
    </screen-lg>
</template>
```
</CodeBlock>

<CodeBlock>
```html
<template>
    <screen-lg direction="down">
        <p>This text is only visible on screens smaller than 1200px.</p>
    </screen-lg>
</template>
```
</CodeBlock>

