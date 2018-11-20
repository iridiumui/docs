# Hamburger Nav
The Hamburger Nav component makes it possible to create an accesible hamburger menu. 

The Hamburger Nav component can take care of things like focus trapping. It can be combined with the [Breakpoint](../../helpers/breakpoint/) component to only show it on mobile devices. It can also be combined with other components such as the Click Outside to close the navigation on desktop. 

## Props

| Name         | Description                                             | Type    | Required | Default Value |
|--------------|---------------------------------------------------------|---------|----------|---------------|
| open-default | A boolean representing whether it's open to begin with. | Boolean | No       | false         |


## Scoped Slots

| Name    | Description                                                                                                                                                                       |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Default | The content to be rendered. Can be used instead of the other scoped slots to get more control over the structure. Using this slot means that the it won't perform focus trapping. |
| toggle  | The toggle to open the navigation.                                                                                                                                                |
| content | The navigation itself.                                                                                                                                                            |

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
#### Hamburger Nav on mobile
Many websites have different navigations for mobile and desktop. A common pattern is to use a hamburger nav on mobile devices where there is limited screen space. The [Breakpoint](../../helpers/breakpoint/) component can be used to achieve this.

#### Hamburger Nav on all devices
Some websites prefer to keep the experience consistent across all devices. In that case a hamburger nav can work for all screen sizes.

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

