# Breakpoint

The Breakpoint component can be used to conditionally render content based on screen sizes. Under the hood it uses the [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) method to evalute a CSS media query string.

A set of helper components have been made with the Breakpoint component. The components have been made so they correspond with [Bootstrap's breakpoints](https://getbootstrap.com/docs/4.1/layout/overview/).

- [Screen XS](./screen-xs/)
- [Screen SM](./screen-sm/)
- [Screen MD](./screen-md/)
- [Screen LG](./screen-lg/)
- [Screen XL](./screen-xl/)

## Props
| Name        | Description                               | Type   | Required | Default Value |
|-------------|-------------------------------------------|--------|----------|---------------|
| media-query | A CSS media query string to be evaluated. | String | Yes      | None          |

## Slots

| Name    | Description                                                                       |
|---------|-----------------------------------------------------------------------------------|
| Default | Render the content in the slot if the media query matches                         |

<Note>
<p>
    'Default' is not the name of the slot. It's the content rendered in an unnamed slot.
</p>
</Note>

## Use cases
#### Hamburger nav on mobile
It's a common pattern to have a hamburger nav on mobile and a normal top navigation on larger screen sizes. Instead of hiding one nav with CSS, the Breakpoint component can be used to render the correct navigation.

#### Only include element on large screen sizes
You might have a component that is only relevant for desktop users. The Breakpoint component can be used to only include that component on large screen sizes.

#### Show warning to mobile users
You might have a web app that only supports desktop browsers. The Breakpoint component can be used to show a warning message to mobile users.

## Examples
<CodeBlock>
```html
<breakpoint media-query="(max-width: 767px)">
    <hamburger-nav></hamburger-nav>
</breakpoint>
```
</CodeBlock>
