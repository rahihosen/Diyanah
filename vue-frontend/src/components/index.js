import SideMenuItem from './sideMenu/index.vue'
import SideSubMenuItem from './sideMenu/SubMenuItem.vue'
import SideSubSubMenuItem from './sideMenu/SubSubMenuItem.vue'
export default app => {
    app.component('SideMenuItem', SideMenuItem)
    app.component('SideSubMenuItem', SideSubMenuItem)
    app.component('SideSubSubMenuItem', SideSubSubMenuItem)
}