import HoverCard from './HoverCard.vue'
import { App } from 'vue'

HoverCard.install = (app: App) => {
  app.component("HoverCard", HoverCard)
}

export default HoverCard