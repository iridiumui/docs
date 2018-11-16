# Focus Trap

The Focus Trap can temporarily limit the users tabbing options to a selected group of elements. This is especially important for keyboard users. It's meant to be used when an action is required before the user can return to normal browsing. 

The component is a wrapper around [focus-trap](https://github.com/davidtheclark/focus-trap) by [David Clark](https://twitter.com/davidtheclark).

## Props

| Name    | Description                                                                                               | Type    | Required | Default Value |
|---------|-----------------------------------------------------------------------------------------------------------|---------|----------|---------------|
| active  | Controls whether the focus trap is active                                                                 | Boolean | Yes      | None          |
| options | An object of options. See all possible options [here](https://github.com/davidtheclark/focus-trap#usage). | Object  | No       | { }            |

## Slots

| Name    | Description                                                                  |
|---------|----------------------------------------------------------------------------- |
| Default | The element where focus should be contained when the component is active |

<Note>
<p>
    'Default' is not the name of the slot. It's the content rendered in an unnamed slot.
</p>
</Note>

## Use cases
#### Modal
When a modal is open it's best to make sure the user can't tab out before it's been closed.

#### Hamburger Nav
A hamburger nav is structurally similar to a modal. When it's open it's best to trap the focus until it has been closed.

## Examples
<CodeBlock>
```html
<focus-trap :active="false">
    <modal></modal>
</focus-trap>
```
</CodeBlock>

<CodeBlock>
```html
<focus-trap :active="true" :options="{ onActivate: () => { alert('You are trapped') } }">
    <modal></modal>
</focus-trap>
```
</CodeBlock>
