// .vitepress/theme/index.ts
import MildTheme from 'vitepress-theme-mild';
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme' // Keep this for 'extends'
import { injectSpeedInsights } from '@vercel/speed-insights';
// Remove these imports, as their logic will now live inside Layout.vue
// import { nextTick, provide } from 'vue'
// import { useData } from 'vitepress'

import './style.css'
import './style-v.css'
import './fonts.css'
import Cursor from './Cursor.vue' // Cursor still imported as it's a specific component
import CustomUserLayout from './Layout.vue' // Import your Layout.vue here

export default {
  extends: MildTheme, // Still extend the default theme for shared functionalities
  Layout: CustomUserLayout, // <-- DIRECTLY use your Layout.vue as the main theme layout

  // The 'enhanceApp' hook should now be clean for the toggle-appearance provide
  // It should only contain other app-level enhancements like global component registration
  enhanceApp({ app, router, siteData }) {
    // Example: app.component('MyGlobalComponent', MyGlobalComponent)
    // No 'toggle-appearance' provide here anymore, it's in Layout.vue
    injectSpeedInsights();
  }
} satisfies typeof MildTheme