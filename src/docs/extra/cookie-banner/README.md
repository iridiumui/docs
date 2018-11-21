# Cookie Banner

The Cookie Banner component can handle the state of a user's cookie acceptance. If the user accepts cookies a key will be set in [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). If that key hasn't been set yet, the user will be promted to accept cookies.

## Scoped Slots

| Name    | Description        |
|---------|--------------------|
| Default | The cookie banner. |

<Note>
<p>
    'Default' is not the name of the slot. It's the content rendered in an unnamed slot.
</p>
</Note>

## Data for the default slot

| Name     | Description                                                           | Type     |
|----------|-----------------------------------------------------------------------|----------|
| accept   | A method to set a key in localStorage and update the component state. | Function |
| accepted | The state of the user's cookie acceptance.                            | Boolean  |

## Use cases

#### Cookie Banner
According to EU laws it's required to notify the user if you are storing cookies or data on their machines.

## Examples

<CodeBlock>
```html
<cookie-banner>
    <transition-slide-up slot-scope="{ accept, accepted }">
        <div v-if="!accepted">
            <p>
                This website makes use of cookies to improve your experience. Read more in our <a href="#">Privacy Policy</a>
            </p>
            <button @click="accept">Accept</button>
        </div>
    </transition-slide-up>
</cookie-banner>
```
</CodeBlock>
