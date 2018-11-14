# Screen MD

The Screen MD component is an abstraction of the Breakpoint component. 

It can be used to display content on any screen sizes larger than `768px` or smaller than `992px`.

It supports two modes, up and down. Both modes are including the small breakpoint which ranges from `768px` to `992px`. The up mode will render the content on screens larger than `768px`. The down mode will render content on screens smaller than `992px`.

## Props

| Name      | Description                       | Type   | Required | Default Value |
|-----------|-----------------------------------|--------|----------|---------------|
| direction | Which mode the component will use | String | No       | 'up'          |

## Examples
<CodeBlock>
```html
<template>
    <screen-xs>
        <p>This text is only visible on screens larger than 768px.</p>
    </screen-xs>
</template>
```
</CodeBlock>

<CodeBlock>
```html
<template>
    <screen-xs direction="down">
        <p>This text is only visible on screens smaller than 992px.</p>
    </screen-xs>
</template>
```
</CodeBlock>

