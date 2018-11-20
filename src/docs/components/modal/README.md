# Modal

The Modal component makes it possible to create modals, popups, dialogs or similar components.

One of the things the Modal does is taking care of trapping focus inside the modal when it's active. It can be combined with other components such as the [Click Outside](../../helpers/click-outside/) component to create a great user experience.

The Modal component handles keyboard events. This means that users can close a modal by clicking `Escape`.

The modal component supports [Portal Vue](https://github.com/LinusBorg/portal-vue). If you want to use a portal you have to add a `portal-target` in the place you want the modal rendered. This is useful to render modals at the end of the page and improve the experience for screen reader users.

When a modal is opened it will automatically disable scrolling on the `body` element. When it's closed again it will return it to its former state.


<CodeBlock>
```html
<body>
    <div id="app">
        
        <!-- Content -->

        <portal-target name="modal"></portal-target>
    </div>
</body>
```
</CodeBlock>

## Props

| Name        | Description                                          | Type    | Required | Default Value |
|-------------|------------------------------------------------------|---------|----------|---------------|
| use-portal  | Whether to render the modal in a Portal.             | Boolean | No       | true          |
| portal-name | The name of the portal in which to render the modal. | String  | No       | 'modal'       |

## Scoped Slots

| Name    | Description                                          |
|---------|------------------------------------------------------|
| toggle  | The button that's responsible for opening the modal. |
| content | The modal itself.                                    |

#### Data for the toggle slot

| Name      | Description                                      | Type     |
|-----------|--------------------------------------------------|----------|
| open      | A boolean representing whether the modal is open | Boolean  |
| openModal | A method to open the modal.                      | Function |

#### Data for the content slot

| Name       | Description                                      | Type     |
|------------|--------------------------------------------------|----------|
| open       | A boolean representing whether the modal is open | Boolean  |
| closeModal | A method to close the modal.                     | Function |

## Use cases
#### Newsletter Signup
Many websites will offer users the option to signup for an email newsletter. Prompting the user in a modal can lead to better conversion rates.

#### Confirmation Dialog
In web apps, it's often a good idea to prompt the user with a confirmation dialog after they've initialised an action. If they click on a 'Delete' button it's important to make sure they didn't click the button by accident.

#### Alert
Sometimes it's necessary to convey a direct message to the user and require them to confirm they've read it before they can continue using the site.

## Examples

<CodeBlock>
```html
<modal>
    <button
        type="button"
        slot="toggle"
        slot-scope="{ open, openModal }"
        :disabled="open"
        @click="openModal"
    >
        Open Modal
    </button>
    <div
        slot="content"
        slot-scope="{ open, closeModal }"
        role="dialog"
        aria-modal="true"
    >

        <!-- Content -->

        <button 
            type="button"
            @click="handleAccept(closeModal)"
        >
            Accept
        </button>
        <button
            type="button"
            @click="closeModal"
        >
            Cancel
        </button>
    </div>
</modal>

<script>
    export default {
        methods: {
            handleAccept(closeModal) {
                // Write 'Accept' logic here

                closeModal()
            }
        }
    }
</script>
```
</CodeBlock>


<CodeBlock>
```html
<modal>
    <button
        type="button"
        slot="toggle"
        slot-scope="{ open, openModal }"
        :disabled="open"
        @click="openModal"
    >
        Open Modal
    </button>
    <iridium-transition-slide-up
        slot="content"
        slot-scope="{ open, closeModal }"
    >
        <div role="dialog" aria-modal="true">
            This modal will animate in
        </div>
    </iridium-transition-slide-up>
</modal>
```
</CodeBlock>

<CodeBlock>
```html
<modal>
    <button
        type="button"
        slot="toggle"
        slot-scope="{ open, openModal }"
        :disabled="open"
        @click="openModal"
    >
        Open Modal
    </button>
    <div class="modal-container"
        slot="content"
        slot-scope="{ open, closeModal }"
    >
        <click-outside @clickoutside="open ? closeModal() : ''">
            <div class="modal"         
                role="dialog"
                aria-modal="true"
            >
                Implement the Click Outside component for improved user experience
            </div>
        </click-outside>
    </div>
</modal>
```
</CodeBlock>
