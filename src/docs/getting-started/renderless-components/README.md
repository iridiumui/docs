# Renderless Components

Iridium primarily uses renderless components. The reason for this is that it makes it much easier to customise the markup and styles.

If you pull in a 3rd party UI component it will most likely have some default markup and styling. It's nice to get the advanced functionality from the component but often times you'll end up fighting against it to make it fit the style of your site.

Some of the situations that might happen:
1. The component has markup but you need to customise it in order to style the component properly.
2. The component has CSS classes on all the elements. But it uses a BEM convention while you use another convention.
3. The only way to customise the component is to pass in an object of options or styles. Now you have styles in two different places.

Renderless components solve all these problems. An Iridium component is responsible for taking care of all the functionality while it leaves the specific implementation details up to the developer.

## What is a renderless component?

A renderless component is a Vue component that doesn't have a template. Instead, it uses a render function to control what is rendered. Whatever is returned from the render function is what will be rendered. 

<CodeBlock>
```html
<script>
    export default {
        render(createElement) {
            
        }
    }
</script>
```
</CodeBlock>

The render function receives a `createElement` function as an argument. This function can be used to create DOM elements. 

But the `createElement` function is not used in a renderless component. Instead, slots are used.

<Note>
<p>
    Vue converts templates into render functions under the hood. This is the job of the Vue template compiler.
</p>
</Note>

### Slots

[Slots](https://vuejs.org/v2/guide/components-slots.html) in Vue are a way to pass markup from the parent to the child.

<CodeBlock>
```html
<template>
    <div>
        <h2>This is the child component</h2>

        <!-- Allow the parent to render content here -->
        <slot></slot>

    </div>
</template>
```
</CodeBlock>

<CodeBlock>
```html
<template>
    <div>
        <h2>This is the parent component</h2>
        <child-component>

            <!-- Everything inside these tags will be rendered in the child component -->
            <p>
                This text will be rendered inside the child component
            </p>

        </child-component>
    </div>
</template>
```
</CodeBlock>

In this example, the child component defines a place where the parent can render markup. It does that with the `slot` tag.

In the parent component, it's now possible to define markup between the `child-component` tags. This markup will be rendered where the slot is defined in the child.

#### Normal Slots

The above example uses what is called a normal slot. This is a slot where no data is passed back to the parent.

#### Scoped Slots

Scoped slots allow the child component to pass data back up to the parent component. It does so by binding that data as a prop on the slot.

<CodeBlock>
```html
<template>
    <div>
        <h2>This is the child component</h2>

        <!-- Bind the data as props on the slot -->
        <slot :name="name"></slot>

    </div>
</template>

<script>
    export default {
        data() {
            name: 'This is the name property'
        }
    }
</script>
```
</CodeBlock>

<CodeBlock>
```html
<template>
    <div>
        <h2>This is the parent component</h2>
        <child-component>

            <!-- Access the data -->
            <div slot-scope="{ name }">
                You can now use the name property here:
                {{ name }}
            </div>

        </child-component>
    </div>
</template>
```
</CodeBlock>

#### Named slots

Both normal slots and scoped slots can have names. This makes it possible to have multiple slots in a component.

<CodeBlock>
```html
<template>
    <div>

        <!-- Define a name for the slot -->
        <slot name="heading">

            <!-- This will be rendered if the parent doesn't overrides this slot -->
            <h2>This is the child component</h2>

        </slot>

        <!-- The default slot -->
        <slot></slot>

    </div>
</template>
```
</CodeBlock>

<CodeBlock>
```html
<template>
    <div>
        <h2>This is the parent component</h2>
        <child-component>

            <!-- Override the heading slot -->
            <h4 slot="heading">This will override the content in the heading slot</h4>

            <!-- Pass in markup as the default slot -->
            <p>
                This text will be passed in as the default slot
            </p>

        </child-component>
    </div>
</template>
```
</CodeBlock>

In this example, the `heading` slot has some default markup. This will be rendered if the parent doesn't use that slot. But if it does it will be overridden.

It's also possible to combine named slots and a default slot.

#### Using slots in render functions

The examples above use templates. But it's also possible to access slots programmatically. This means they can be used in render functions.

Normal slots are available on the component instance as `this.$slots`. This returns an object of all normal slots. If the slot doesn't have a name it will be available under the `default` key. 

<CodeBlock>
```html
<script>
    export default {
        render() {
            return this.$slots.default[0] 
        }
    }
</script>
```
</CodeBlock>

<Note>
<p>
    $this.slots.default returns an array of all the child nodes. But it's not allowed to have multiple root elements in Vue components. Therefore you should only pass in one child in the slot. 
</p>
</Note>

Scoped slots are available on the component instance as `this.$scopedSlots`. This returns an object of all scoped slots. But each property on the object is a method instead of an array. This method takes an object as the first argument. The object is the data that will be passed back to the parent component.

<CodeBlock>
```html
<script>
    export default {
        data() {
            return {
                name: 'Some Name'
            }
        },

        render() {
            return this.$scopedSlots.default({
                name: this.name
            })
        }
    }
</script>
```
</CodeBlock>

### Example

The most common way to write Vue components is with single file components.

<CodeBlock>
```html
<template>
    <div>
        <button @click="toggleModal">Open Modal</button>
        <div class="modal" v-if="modalOpen">
            <div class="modal__header">
                <h2>Sign up to our newsletter</h2>
                <button @click="toggleModal">Close</button>
            </div>
            <div class="modal__content">
                <p>Get all the latest news directly to your inbox.</p>
                <form @submit.prevent="submitForm">
                    <input type="text" v-model="form.name">
                    <input type="email" v-model="form.email">
                    <button>Submit</button>
                </form>
            </div>
            <div class="modal__footer">
                <span v-if="formSuccess">Thank you for signing up.</span>
                <span v-if="formError">Something went wrong.</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modalOpen: false,
                formSuccess: false,
                formError: false,
                form: {
                    name: '',
                    email: ''
                }
            }
        },

        methods: {
            toggleModal() {
                this.modalOpen != this.modalOpen
            },

            submitForm() {
                // AJAX request
            }
        }
    }
</script>

<style>
    // Styles
</style>
```
</CodeBlock>

This is a basic example of how a modal component could work. There are some problems though:

1. It's not very reusable. If we had to create a login modal none of the logic could be reused.
2. The logic for handling the modal state and the form state is in the same component. It would be much easier to reason about if it was in separate components. (This is not a problem with single file components, but with this particular example)
3. If this was a 3rd party component it would control that the modal has a header, content and footer section. It would also control the CSS class name convention.

This could be solved with renderless components. A renderless modal component could control all the logic for the modal. Then a newsletter signup component could use that modal component to create the specific instance.

<CodeBlock>
```html
<script>
    export default {
        name: 'Modal',

        data() {
            return {
                open: false
            }
        },

        methods: {
            toggle() {
                this.open = !this.open
            }
        },

        render() {
            return this.scopedSlots.default({
                open: this.open,
                toggle: this.toggle
            })
        }
    }
</script>
```
</CodeBlock>

<CodeBlock>
```html
<template>
    <modal>
        <div slot-scope="{ open, toggle }">
            <button @click="toggle">Open Modal</button>
            <div v-if="open">
                <h2>Sign up to our newsletter</h2>
                <p>Get all the latest news directly to your inbox.</p>
                <form @submit.prevent="submit">
                    <input type="text" v-model="form.name">
                    <input type="email" v-model="form.email">
                    <button>Submit</button>
                </form>
                <span v-if="formSuccess">Thank you for signing up.</span>
                <span v-if="formError">Something went wrong.</span>
            </div>
        </div>
    </modal>
</template>

<script>
    export default {
        name: 'NewsletterSignupModal',
        // Form logic here
    }
</script>
```
</CodeBlock>

Everything inside the `modal` tags will be passed in as the default scoped slot. The data and method can be accessed and used inside the child with the `slot-scope` attribute.

Separating the components this way has lead to the following wins:
1. The components are separated. This makes the data properties and method names cleaner.
2. The modal component doesn't control anything about how it's rendered. It passes that responsibility on to the child.
3. The modal component is reusable. It's trivial to create a LoginModal component.

## Links

If you want to read more about renderless components:

- [Renderless Components in Vue.js](https://adamwathan.me/renderless-components-in-vuejs/) by Adam Wathan
- [Building “Renderless” Vue Components](https://css-tricks.com/building-renderless-vue-components/) by Samuel Oloruntoba
- [Render Functions in Vue](https://vuejs.org/v2/guide/render-function.html)
