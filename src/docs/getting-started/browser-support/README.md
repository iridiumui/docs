# Browser Support

Iridium is meant to be usable in all evergreen browsers as well as some older browsers such as IE11. Iridium components is meant to be transpiled so most of the time this isn't an issue. Some components do make use of modern browser API's however. That means a polyfill is sometimes required to use a certain component. This will be clearly noted in each component. 

On this page you can see a list of all the components that needs a polyfill.

## Polyfill.io

Using a polyfill service such as [Polyfill.io](https://polyfill.io) makes it a lot easier to include the right polyfills. It works with a URL based API and have a globablly reaching CDN.

## Components requiring polyfills

| Component                       | Browser API                                                                                             | Polyfill                                                                         | Browsers                               |
|---------------------------------|---------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------------------------------------- |
| [InView](../../helpers/in-view) | [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) | [w3c Polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) | IE11, <br>Safari 12, <br>iOS Safari 12 |
