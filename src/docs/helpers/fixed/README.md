# Fixed

The Fixed component can be used to easily pin an element to one side of the page. It does so by adding CSS to the element.

Some helper components have been made with the Fixed component.

- [Fixed Top](./fixed-top/)
- [Fixed Right](./fixed-right/)
- [Fixed Bottom](./fixed-bottom/)
- [Fixed Left](./fixed-left/)

## Props

| Name | Description                      | Type   | Required | Default Value |
|------|----------------------------------|--------|----------|---------------|
| edge | Which side to pin the element to | String | No       | 'top'         |

## Slots

| Name    | Description                                                                       |
|---------|-----------------------------------------------------------------------------------|
| Default | Render the content in the slot and apply the styles to that element               |

<Note>
<p>
    'Default' is not the name of the slot. It's the content rendered in an unnamed slot.
</p>
</Note>

## Use cases
#### Fixed Header
Many websites implement a fixed header or navigation so that it's always at the top of the page.

#### Hamburger Nav
Some websites make their hamburger nav slide in from one side when it's opened. 

#### Scroll To Top button
If a page is very long it might be good to have a button to take the user back to the top. This button will usually be fixed on the bottom of the page.

## Examples
<CodeBlock>
```html
<fixed edge="top">
    <header></header>
</fixed>
```
</CodeBlock>
