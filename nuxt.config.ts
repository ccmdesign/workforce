import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "College to Jobs Initiative",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    script: [],
    link: [ ],
  },
  css: [
    '@ccmdesign/ccm-ds/assets/css/00-resets/body-structure.css',
    '@ccmdesign/ccm-ds/assets/css/00-resets/normalize.css',
    '@ccmdesign/ccm-ds/assets/css/00-resets/reset.css',
    '@ccmdesign/ccm-ds/assets/css/01-tokens/colors-base.css',
    '@ccmdesign/ccm-ds/assets/css/01-tokens/form.css',
    '@ccmdesign/ccm-ds/assets/css/01-tokens/scale.css',
    'assets/css/theme.css',
    '@ccmdesign/ccm-ds/assets/css/01-tokens/utils.css',
    '@ccmdesign/ccm-ds/assets/css/02-elements/typography.css',
    '@ccmdesign/ccm-ds/assets/css/03-objects/cover.css',
    '@ccmdesign/ccm-ds/assets/css/03-objects/frame.css',
    '@ccmdesign/ccm-ds/assets/css/03-objects/grid.css',
    '@ccmdesign/ccm-ds/assets/css/03-objects/polarized.css',
    '@ccmdesign/ccm-ds/assets/css/03-objects/stack.css',
    '@ccmdesign/ccm-ds/assets/css/03-objects/switcher.css',
    'assets/css/global.scss',
  ],
  components: {
    "dirs": [
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/03-objects'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/04-components'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/05-modules'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/06-sections'),
        "global": true
      },
      "~/components"
    ]
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
});
