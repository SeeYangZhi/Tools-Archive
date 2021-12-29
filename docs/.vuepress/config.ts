import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  base: '/Tools-Archive/',
  head: [
    ['link', { rel: 'icon', href: 'assets/images/logo.svg' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://seeyangzhi.github.io/Tools-Archive/',
      },
    ],
    ['meta', { property: 'og:title', content: 'Tools Archive' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'This is an archive of website links, tools and programs that I find useful/interesting.',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Tools Archive',
      description:
        'This is an archive of website links, tools and programs that I find useful or interesting over the years of my software engineer journey.',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '软件工程师的实用工具',
      description:
        '这是我在多年的软件工程师之旅中发现有用或有趣的网站链接、工具和程序',
    },
  },
  themeConfig: {
    logo: 'assets/images/logo.svg',
    darkMode: true,
    lastUpdated: false,
    contributors: false,
    locales: {
      '/': {
        selectLanguageName: 'English',
        sidebar: 'auto',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        sidebar: 'auto',
      },
    },
  },
  plugins: [
    [
      '@vuepress/docsearch',
      {
        appId: '2Y7MCLEHAJ',
        apiKey: 'c08cd227a55890eaad704f9e91d7c26f',
        indexName: 'Tools-Archive',
        locales: {
          '/': {
            placeholder: 'Search Documentation',
          },
          '/zh/': {
            placeholder: '搜索文档',
          },
        },
      },
    ],
  ],
});
