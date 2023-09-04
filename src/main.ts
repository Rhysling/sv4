import './app.scss';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app') || new HTMLElement()
})

export default app
