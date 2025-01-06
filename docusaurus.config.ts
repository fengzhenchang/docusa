import type * as Preset from "@docusaurus/preset-classic"
import type { Config } from "@docusaurus/types"
import { themes } from "prism-react-renderer"
import social from "./data/social"
import type { GiscusConfig } from "./src/components/Comment"

const config: Config = {
  title: "振昌的博客",
  url: "https://augustf.top",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "振昌",
  projectName: "blog",
  customFields: {
    bio: "道阻且长，行则将至",
    description:
      "是一个由振昌创建的个人博客，主要分享编程开发知识和项目，该网站基于 React 驱动的静态网站生成器 Docusaurus 构建。"
  },
  themeConfig: {
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: ``,
    // },
    image: "img/zhenchang-social-card.jpg",
    metadata: [
      {
        name: "author",
        content: "振昌"
      },
      {
        name: "keywords",
        content: "blog, javascript, typescript, node, react, vue, web"
      },
      {
        name: "keywords",
        content: "编程爱好者, Web开发者, 主攻ts全栈"
      }
    ],
    docs: {
      sidebar: {
        hideable: true
      }
    },
    navbar: {
      logo: {
        alt: "振昌",
        src: "img/logo.png",
        srcDark: "img/logo.png"
      },
      hideOnScroll: true,
      items: [
        { label: "博客", position: "right", to: "blog" },
        // { label: "笔记", position: "right", to: "docs/skill" },
        {
          label: "笔记",
          position: "right",
          items: [
            {
              type: "docSidebar",
              sidebarId: "frontEnd",
              label: "前端框架"
            },
            {
              type: "docSidebar",
              sidebarId: "typeScript",
              label: "TypeScript"
            },
            { label: "更多笔记", to: "docs/skill" }
          ]
        },

        { label: "书签", position: "right", to: "resources" },
        {
          label: "更多",
          position: "right",
          items: [
            { label: "归档", to: "blog/archive" },
            { label: "工具推荐", to: "docs/tools" }
          ]
        },
        { label: "关于", position: "right", to: "about" }
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "学习",
          items: [
            { label: "博客", to: "blog" },
            { label: "归档", to: "blog/archive" },
            { label: "技术笔记", to: "docs/skill" }
            // { label: '实战项目', to: 'project' },
            // { label: '前端示例', to: 'https://example.augustf.top' },
          ]
        },
        {
          title: "社交媒体",
          items: [
            { label: "关于我", to: "/about" },
            { label: "GitHub", href: social.github.href },
            { label: "Twitter", href: social.x.href },
            { label: "掘金", href: social.juejin.href }
            // { label: 'Discord', href: social.discord.href },
          ]
        },
        {
          title: "网站",
          items: [
            { label: "速查表", to: "https://static.augustf.top/notebook/" }
          ]
        },
        {
          title: "更多",
          items: [
            // { label: '友链', position: 'right', to: 'friends' },
            { label: "书签", position: "right", to: "resources" },
            {
              html: `
                <a href="https://docusaurus.io" target="_blank" rel="noreferrer noopener">
                  <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                </a>
                `
            }
          ]
        }
      ],
      copyright: `
        <p>Copyright © 2020 - ${new Date().getFullYear()} Zhenchang's Blog. Built with Docusaurus. Hosted by Cloudflare.</p>
        `
    },
    algolia: {
      appId: "YXJ1HE1M61",
      apiKey: "082d2167b52397d6eb83431ace942fdb",
      indexName: "augustf"
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: [
        "bash",
        "json",
        "java",
        "python",
        "php",
        "graphql",
        "rust",
        "toml",
        "protobuf",
        "diff"
      ],
      defaultLanguage: "javascript",
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" }
        },
        {
          className: "code-block-error-line",
          line: "This will error"
        }
      ]
    },
    giscus: {
      repo: "fengzhenchang/Newman",
      repoId: "R_kgDOGM_wJA",
      category: "Announcements",
      categoryId: "DIC_kwDOGM_wJM4ClGKg",
      theme: "light",
      darkTheme: "dark_dimmed"
    } satisfies Partial<GiscusConfig>,
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4
    },
    liveCodeBlock: { playgroundPosition: "top" },
    zoom: {
      selector: ".markdown :not(em) > img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)"
      }
    }
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          sidebarPath: "sidebars.ts"
        },
        blog: false,
        theme: {
          customCss: ["./src/css/custom.css", "./src/css/tweet-theme.css"]
        },
        sitemap: {
          priority: 0.5
        },
        gtag: {
          trackingID: "G-S4SD5NXWXF",
          anonymizeIP: true
        },
        debug: process.env.NODE_ENV === "development"
      } satisfies Preset.Options
    ]
  ],
  plugins: [
    "docusaurus-plugin-image-zoom",
    // "@docusaurus/plugin-ideal-image",
    [
      "docusaurus-plugin-baidu-tongji",
      { token: "f3c897b7b62ae96a0af47df9363f0127" }
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: process.env.NODE_ENV === "development",
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString"
        ],
        pwaHead: [
          { tagName: "link", rel: "icon", href: "/img/logo.png" },
          { tagName: "link", rel: "manifest", href: "/manifest.json" },
          { tagName: "meta", name: "theme-color", content: "#12affa" }
        ]
      }
    ],
    // [
    //   "vercel-analytics",
    //   {
    //     debug: process.env.NODE_ENV === "development",
    //     mode: "auto"
    //   }
    // ],
    [
      "./src/plugin/plugin-content-blog", // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
      {
        path: "blog",
        // editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
        //   `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: "代码人生：编织技术与生活的博客之旅",
        blogSidebarCount: 10,
        blogSidebarTitle: "博文",
        postsPerPage: 12,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: "all",
          title: "振昌",
          description: "feedId:41215011978385457+userId:41840354283324416",
          copyright: `Copyright © ${new Date().getFullYear()} 振昌 Built with Docusaurus.`
        }
      }
    ],
    async function tailwindcssPlugin() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"))
          postcssOptions.plugins.push(require("autoprefixer"))
          return postcssOptions
        }
      }
    },
    async function injectMotto() {
      return {
        name: "docusaurus-motto",
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: "script",
                innerHTML: `
    (${function () {
      console.log(
        `%c Zhenchang Blog %c https://augustf.top/`,
        "color: #fff; margin: 1em 0; padding: 5px 0; background: #12affa;",
        "margin: 1em 0; padding: 5px 0; background: #efefef;"
      )

      const motto = `
This Webisite Powered By Zhenchang Blog.
Written by Docusaurus, Coding with Love.
--------
Love what you do and do what you love.
`

      if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
        document.prepend(document.createComment(motto))
      }
    }.toString()})();`
              }
            ]
          }
        }
      }
    }
  ],
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "description",
        content: "振昌的个人博客"
      }
    }
  ],
  stylesheets: [
    "https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css",
    "https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Medium.min.css",
    "https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Semibold.min.css"
  ],
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"]
  },
  onBrokenLinks: "warn"
}

export default config
