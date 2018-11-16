# Visually Hidden
The Visually Hidden component is an accessibility helper. It should be used when you want to convey text to a screen reader while having a visual element, such as an icon, displayed on the screen.

## Slots
| Name    | Description                                                                                                                            |
|---------|--------------------------------------------------- |
| Default | The text that will be presented to screen readers. |

<Note>
<p>
    'Default' is not the name of the slot. It's the content rendered in an unnamed slot.
</p>
</Note>

## Use cases
#### Use an icon in a button
Sometimes it's necessary to create a button that doesn't contain any text. A common example is a hamburger nav toggle. An SVG icon is not easy to parse for screen readers so a small text is better.
The text will not be visible for regular users.

## Examples

<CodeBlock>
```html
<button @click="toggle">
    <visually-hidden>Open Navigation</visually-hidden>
    <svg aria-hidden></svg>
</button>
```
</CodeBlock>
