import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import cloudflare from '@astrojs/cloudflare'
import remarkHeadingId from 'remark-heading-id'
import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Starlight Template',
    description: 'Starlight Template',
    // logo: {
    //   src: './src/assets/logo.png'
    // },
    // favicon: '/favicon.ico',
    customCss: [
      '@fontsource/noto-sans',
      '@fontsource/noto-sans-sc',
      './src/styles/docs.css'
    ],
    social: {
      github: 'https://github.com/ybw0014/starlight-template'
    },
    defaultLocale: 'root',
    locales: {
      root: {
        label: 'English',
        lang: 'en'
      },
      'zh-cn': {
        label: '简体中文',
        lang: 'zh-CN'
      }
    },
    head: [
      // uncomment the following to enable cloudflare analytics
      // {
      //   tag: 'script',
      //   attrs: {
      //     src: 'https://static.cloudflareinsights.com/beacon.min.js',
      //     'data-cf-beacon': '{"token": ""}',
      //     defer: true
      //   }
      // }
    ],
    sidebar: [
      // TODO: Replace sidebar with your own
    ]
  }), tailwind({
    applyBaseStyles: false
  })],
  markdown: {
    remarkPlugins: [
      remarkHeadingId
    ],
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  },
  output: 'static',
  adapter: cloudflare()
})
