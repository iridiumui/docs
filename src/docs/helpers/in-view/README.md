# In View

The In View component can be used to determine whether an element is in the user's viewport. The element that is checked can both be the child of In View or any other element.  

The In View component uses the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). This means a polyfill might be necessary to support older browsers. More information can be found on the [Browser Support](../../getting-started/browser-support/) page.

## Props

| Name      | Description                                                                                                                           | Type            | Required | Default Value |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------|-----------------|----------|---------------|
| element   | A selector for an element which viewport status will be checked. If this prop is not used the child element will be checked.         | String          | No       | null         |
| threshold | A number or an array of numbers that indicate how much of an element should be visible in the viewport before the status is updated. | Number or Array | No       | 0             |


## Slots
| Name    | Description                                                                                                                            |
|---------|--------------------------------------------------------------------------------------------------------------------------------------- |
| Default | The child to be rendered. Use this slot, instead of a scoped slot, if you don't need to receive information about the viewport status |

<Note>
<p>
    'Default' is not the name of the slot. It's the content rendered in an unnamed slot.
</p>
</Note>

## Scoped Slots

| Name    | Description                                                                                                                       |
|---------|-----------------------------------------------------------------------------------------------------------------------------------|
| Default | The child to be rendered. Use this slot, instead of a normal slot, if you wish to receive information about the viewport status. |

<Note>
<p>
    'Default' is not the name of the slot. It's the content rendered in an unnamed slot.
</p>
</Note>

#### Data for the default slot

| Name   | Description                                                                                                                       | Type    |
|--------|-----------------------------------------------------------------------------------------------------------------------------------|---------|
| inView | A boolean representing whether the element is currently in the viewport. This will be updated when the viewport status changes. | Boolean |

## Events

| Name   | Description                                                  | Data                                                          |
|--------|--------------------------------------------------------------|---------------------------------------------------------------|
| inView | An event is fired when the elements viewport status updates. | A boolean representing whether the element is in the viewport |


## Use cases
#### Animate an element when it's in the viewport
You might want to run an animation on an element when it enters the viewport.

#### Freeze a component when it's not in the viewport
A component that is doing resource intensive work can be paused or stopped when it's not in the viewport.

#### Show an element when another element is not in the viewport
You might want to only show an element when another element is/isn't visible. An example could be to show a 'Scroll to Top' button if the header or h1 is not visible.

## Examples

<CodeBlock>
```html
<in-view>
    <div slot-scope="{ inView }" :class="{ 'visible': inView }"></div>
</in-view>
```
</CodeBlock>

<CodeBlock>
```html
<in-view element="h1">
    <button slot-scope="{ inView }" v-if="!inView">
        Scroll to Top
    </button>
</in-view>
```
</CodeBlock>

<CodeBlock>
```html
<in-view :threshold="0.5">
    <div slot-scope="{ inView }" :class="{ 'visible': inView }">
        The visible class will be applied when half of the element is in the viewport.
    </div>
</in-view>
```
</CodeBlock>

<CodeBlock>
```html
<in-view @inView="open = $event">
    <div v-if="open"></div>
</in-view>
```
</CodeBlock>
