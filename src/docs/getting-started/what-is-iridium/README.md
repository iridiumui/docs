# What is Iridium?

Iridium is a UI framework for [Vue](https://vuejs.org/). What makes Iridium different from other UI frameworks such as [Vuetify](https://vuetifyjs.com/en/) and [Vue Material](https://vuematerial.io/) is that it provides no default markup or styling. You might be thinking what's the point then? 
The point is that Iridium takes care of all the hard stuff. This can be things like managing state, handling accessibility or interacting with browser API's.


### The problem with other UI frameworks
One of the common problems with classic UI frameworks is that you always have to spend time overriding defaults and working around the framework limitations. Another problem arises if you pull in a 3rd party library like jQuery UI. You have to work with the default markup and the CSS classes provided by that library. But what if you are using another CSS approach or you want to modify the markup? That's where Iridium comes in. It allows you to control all markup and styling while the components take care of the advanced functionality.


### Renderless components
Most Iridium components are [renderless components](../renderless-components/) meaning that they will render anything you pass in as a slot. Relevant data and methods are exposed through scoped slots. That means you can control where the data is used and what will trigger a method call.

### Helper components
The goal of Iridium is to make the day-to-day developer experience better. One of the things Iridium provides is a set of small utility components. An example of this is the [Breakpoint]('/docs/helpers/breakpoint/') component. 
