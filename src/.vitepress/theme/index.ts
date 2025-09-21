// .vitepress/theme/index.ts
import MildTheme from 'vitepress-theme-mild';
import { injectSpeedInsights } from '@vercel/speed-insights';
// Remove these imports, as their logic will now live inside Layout.vue
// import { nextTick, provide } from 'vue'
// import { useData } from 'vitepress'

import './style.css'
import './style-v.css'
import './fonts.css'
import CustomUserLayout from './Layout.vue' // Import your Layout.vue here

export default {
  extends: MildTheme, // Still extend the default theme for shared functionalities
  Layout: CustomUserLayout, // <-- DIRECTLY use your Layout.vue as the main theme layout

  // The 'enhanceApp' hook should now be clean for the toggle-appearance provide
  // It should only contain other app-level enhancements like global component registration
  enhanceApp() {
    // Example: app.component('MyGlobalComponent', MyGlobalComponent)
    // No 'toggle-appearance' provide here anymore, it's in Layout.vue
    injectSpeedInsights();
  }
} satisfies typeof MildTheme