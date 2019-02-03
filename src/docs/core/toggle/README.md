# Toggle
The Toggle component is a general purpose component for showing and hiding content.

The Toggle component can be used for things like building a hamburger navigation or showing a pop up. Some other components, such as the [Modal](../../core/modal/) component, is built on top of the toggle component.

## Props

| Name         | Description                                             | Type    | Required | Default Value |
|--------------|---------------------------------------------------------|---------|----------|---------------|
| open-default | A boolean representing whether it's open to begin with. | Boolean | No       | false         |


## Scoped Slots

| Name    | Description                                                                                                                                                                       |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Default | The content to be rendered. Can be used instead of the other scoped slots to get more control over the structure.                                                                 |
| button  | The button to open the navigation.                                                                                                                                                |
| content | The content that is toggled.                                                                                                                                                            |

<Note>
<p>
    'Default' is not the name of the slot. It's the content rendered in an unnamed slot.
</p>
</Note>

#### Data for all scoped slots

| Name   | Description                                    | Type     |
|--------|------------------------------------------------|----------|
| open   | The current state of the navigation.           | Boolean  |
| toggle | A method to toggle the state of the navigation | Function |

## Use cases
#### Hamburger Nav
A normal hamburger navigation can be created using the Toggle. The [Breakpoint](../../helpers/breakpoint/) component can be used to only make it visible on mobile.

## Examples

<CodeBlock>
```html
<hamburger-nav>
    <div slot-scope="{ toggle, open }">
        <button  @click="toggle">
            <visually-hidden>Open Menu</visually-hidden>
            <svg aria-hidden></svg>
        </button>
        <!-- This nav does not have focus trapping because it doesn't use the named scoped slots -->
        <transition-slide-left>
            <nav v-show="open">
                <ul>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                    <li>
                        <a href="/products">Categories</a>
                    </li>
                    <li>
                        <a href="/products">Blog</a>
                    </li>
                    <li>
                        <a href="/products">Contact</a>
                    </li>
                </ul>
            </nav>
        </transition-slide-left>
    </div>
</hamburger-nav>
```
</CodeBlock>

<CodeBlock>
```html
<hamburger-nav>
    <button slot-scope="{ toggle, open }" @click="toggle">
        <visually-hidden>Open Menu</visually-hidden>
        <svg aria-hidden></svg>
    </button>
    <!-- This nav has focus trapping because it uses the named scoped slots -->
    <transition-slide-left slot-scope="{ toggle, open }">
        <click-outside @clickoutside="toggle">
            <nav v-show="open">
                <ul>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                    <li>
                        <a href="/products">Categories</a>
                    </li>
                    <li>
                        <a href="/products">Blog</a>
                    </li>
                    <li>
                        <a href="/products">Contact</a>
                    </li>
                </ul>
            </nav>
        </click-outside>
    </transition-slide-left>
</hamburger-nav>
```
</CodeBlock>

