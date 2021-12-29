module.exports = {
  base: '/Tools-Archive/',
  head: [['link', { rel: 'icon', href: 'assets/images/logo.svg' }]],
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
  theme: '@vuepress/theme-default',
  themeConfig: {
    darkMode: true,
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
};
