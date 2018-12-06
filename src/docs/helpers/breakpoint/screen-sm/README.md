# Screen SM

The Screen SM component is an abstraction of the [Breakpoint](../) component. 

It can be used to display content on any screen sizes larger than `576px` or smaller than `768px`.

It supports two modes, up and down. Both modes are including the small breakpoint which ranges from `576px` to `768px`. The up mode will render the content on screens larger than `576px`. The down mode will render content on screens smaller than `768px`.

## Props

| Name      | Description                       | Type   | Required | Default Value |
|-----------|-----------------------------------|--------|----------|---------------|
| direction | Which mode the component will use | String | No       | 'up'          |

## Examples
<CodeBlock>
```html
<template>
    <screen-sm>
        <p>This text is only visible on screens larger than 576px.</p>
    </screen-sm>
</template>
```
</CodeBlock>

<CodeBlock>
```html
<template>
    <screen-sm direction="down">
        <p>This text is only visible on screens smaller than 768px.</p>
    </screen-sm>
</template>
```
</CodeBlock>

