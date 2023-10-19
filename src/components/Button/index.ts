import Button from './Button.vue'
import { App } from 'vue'

Button.install = (app: App) =>{
  app.component("Button", Button)
}

export default Button