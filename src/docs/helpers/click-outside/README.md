# Click Outside

The Click Outside component registers a click event listener on the document. It's a renderless component. It will check whether a click was performed inside or outside the element that's passed in as a slot. An event is emitted if the click was performed outside.

## Props

| Name   | Description                                              | Type    | Required | Default Value |
|--------|----------------------------------------------------------|---------|----------|---------------|
| active | A flag to control whether the component should be active | Boolean | No       | true          |

## Slots

| Name    | Description                                                                       |
|---------|-----------------------------------------------------------------------------------|
| Default | Check whether any clicks are performed inside or outside the element in this slot |

<Note>
<p>
    'Default' is not the name of the slot. It's the content rendered in an unnamed slot.
</p>
</Note>

## Events

| Name         | Description                                                                                     | Data |
|--------------|-------------------------------------------------------------------------------------------------|------|
| clickoutside | When a user clicks on the page and it was not performed inside the element passed in as a slot  | None |
| clickinside  | When a user clicks inside the element passed in as a slot                                       | None |

## Use cases
#### Slide Out Navs
Click Outside can be useful when a navigation slides out on top of the page content when it's opened. In this case, it can be used to trigger a close action for the navigation. This can be useful both on desktop and mobile.

#### Modals
Modals often have several triggers that can close it. One of them is to click outside of the modal. Click Outside can be used to trigger a close action in that case.

## Examples

A common use case for Click Outside is to wrap it around a modal.

<CodeBlock>
```html
<iridium-click-outside @clickoutside="open = false" :active="open">
    <modal :open="open">
        <!-- Modal Content -->
    </modal>
</iridium-click-outside>
```
</CodeBlock>
