# Installation

## NPM

The easiest way to get started with Iridium is to install it through NPM.

### 1. Install via NPM

Iridium can be installed using npm or Yarn.

<CodeBlock>
```shell
# With npm
npm install --save-dev iridium-vue

# With Yarn
yarn add iridium-vue --dev
```
</CodeBlock>

### 2. Import into project

There are two ways to import Iridium into a project.

The first one is to install it as a Vue plugin. If you install Iridium as a plugin all components will be registered globally. It's possible to pass in an object of options as well.

<CodeBlock>
```js
import Vue from 'vue'
import Iridium from 'iridium-vue'

Vue.use(Iridium)
```
</CodeBlock>

The second way to use Iridium is to import each component directly where you need them.

<CodeBlock>
```html
<script>
    import HamburgerNav from 'iridium-vue'

    export default {
        components: {
            HamburgerNav
        }
    }
</script>
```
</CodeBlock>


## Options

When installing Iridium as a Vue plugin you can pass in an object of options. Below you can see an example of all the currently supported options.

<CodeBlock>
```js
import Vue from 'vue'
import Iridium from 'iridium-vue'

Vue.use(Iridium, {
    prefix: 'iridium-'
})
```
</CodeBlock>
