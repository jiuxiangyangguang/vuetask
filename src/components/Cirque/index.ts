import Cirque from './Cirque.vue'
import { App } from 'vue'

Cirque.install = (app: App) => {
  app.component('Cirque', Cirque)
}

export default Cirque