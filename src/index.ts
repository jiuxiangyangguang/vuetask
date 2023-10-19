import { App } from 'vue'
import Button from './components/Button/index';
import Cirque from './components/Cirque/index';
import './style/nom.css'
const components = [Button, Cirque];
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export {
  Button,
  install,
  Cirque
}

export default { install }