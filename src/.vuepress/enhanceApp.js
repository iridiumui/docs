import PortalVue from 'portal-vue'
import Iridium from 'iridium-vue'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(Iridium, {
        'prefix': ''
    })

    Vue.use(PortalVue)
}
