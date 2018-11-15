# Scroll To

The Scroll To component contains a method to scroll the window anywhere on the page. It can either be scrolled to a specific pixel value or to the position of an element.

Under the hood it uses [window.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo), to perform the scroll.

## Props

| Name      | Description                                                                                        | Type                        | Required | Default Value |
|-----------|----------------------------------------------------------------------------------------------------|-----------------------------|----------|---------------|
| behaviour | Control the scroll behaviour.                                                                      | String - 'smooth' or 'auto' | No       | 'smooth'      |
| element   | A selector for the element to scroll to.                                                           | String                      | No       | None          |
| top       | The number of pixels from the top to scroll to. Will only be used if the element prop is not used. | Number                      | No       | None          |
| offset    | An offset that will be added to either the element's position or the top value                     | Number                      | No       | 0             |

## Scoped Slots

| Name    | Description                                                                                         |
|---------|---------------------------------------------------------------------------------------------------- |
| Default | The child to be rendered. Will usually be a button or another element that can activate the scroll. |

<Note>
<p>
    'Default' is not the name of the slot. It's the content rendered in an unnamed slot.
</p>
</Note>

#### Data for the default slot

| Name   | Description                                        | Type     |
|--------|----------------------------------------------------|----------|
| scroll | A method that will trigger the scroll when called. | Function |

## Use cases
#### Scroll to top
Websites with long pages will often have a 'Scroll to top' button.

#### Scroll to section when a navigation link is clicked
Some pages contains multiple sections and has a navigation that link to those sections.

## Examples

<CodeBlock>
```html
<scroll-to :top="0">
    <button type="button" slot-scope="{ scroll }" @click="scroll">
        Scroll to top
    </button>
</scroll-to>
```
</CodeBlock>

<CodeBlock>
```html
<scroll-to element="#about-sections">
    <button type="button" slot-scope="{ scroll }" @click="scroll">
        About
    </button>
</scroll-to>
```
</CodeBlock>
