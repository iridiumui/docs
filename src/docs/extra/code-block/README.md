# Code Block

The Code Block component makes it easy to have an HTML code block with a button to copy the code. 
Handling the clipboard can be tricky in Javascript so that logic is abstracted away.

## Props

| Name             | Description                                                                                                                                                                                     | Type     | Required | Default Value                                                       |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|----------|---------------------------------------------------------------------|
| success-callback | A callback to run if the copy action was successful. The callback receives a function as a parameter. This function can be used to reset the 'copied' state after an action has been performed. | Function | No       | function(resetCopied) { setTimeout(() => { resetCopied() }, 2000) } |
| error-callback   | A callback to run if the copy action failed. The callback receives a function as a parameter. This function can be used to reset the 'error' state after an action has been performed.          | Function | No       | function(resetError) { setTimeout(() => { resetError() }, 2000) }   |

## Slots

| Name    | Description                                                                    |
|---------|--------------------------------------------------------------------------------|
| content | A code block. Should contain a `<code>` element nested inside a `<pre>` element.   |

## Scoped Slots

| Name   | Description                |
|--------|----------------------------|
| button | A button to copy the code. |

#### Data for the button slot

| Name   | Description                                           | Type     |
|--------|-------------------------------------------------------|----------|
| copy   | A method to run the copy action.                      | Function |
| copied | A boolean representing if the code has been copied.   | Boolean  |
| error  | A boolean representing if there was an error copying. | Boolean  |

## Use cases
#### Copy code on documentation website
The Code Block component is mostly useful on documentation websites. It allows the author to write code examples that can easily be copied.

## Examples
<CodeBlock>
```html
<code-block>
    <pre slot="content">
        <code>
            <!-- Code here -->
        </code>
    </pre>
    <button
        type="button"
        slot="button"
        slot-scope="{ copy, copied, error }"
        @click="copy"
        :disabled="copied"
    >
        <span v-if="copied">Copied</span>
        <span v-else-if="error">An error occured. Please try again.</span>
        <span v-else="copied">Copy</span>
    </button>
</code-block>
```
</CodeBlock>

<CodeBlock>
```html
<code-block 
    :success-callback="() => { alert('Copied!') }"
    :error-callback="() => { alert('Something went wrong!') }"
>
    <pre slot="content">
        <code>
            <!-- Code here -->
        </code>
    </pre>
    <button
        type="button"
        slot="button"
        slot-scope="{ copy }"
        @click="copy"
    >
        Copy
    </button>
</code-block>
```
</CodeBlock>
