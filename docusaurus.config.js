//TODO: Remove this
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

module.exports = {
  title: "Inforiver Documentation",
  tagline:
    "The fastest way to do everything in Power BI",
  //TODO: Change this url
  url: "https://valq.com",
  baseUrl: "/inforiverLearnDocusaurus/",
  noIndex: true, // Defaults to `false`
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Lumel", // Usually your GitHub org/user name.
  projectName: "inforiver-docusaurus", // Usually your repo name.
  //TODO: Install Google analytics
  // plugins: ["@docusaurus/plugin-google-analytics"],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themeConfig: {
    navbar: {
      hideOnScroll: true,
      // title: "Inforiver",
      logo: {
        alt: "Inforiver Logo",
        src: "img/inforiver-logo.svg",
      },
      items: [
        {
          to: "/",
          label: "Learn",
          activeBasePath: "/learn",
          position: "left",
        },
        {
          to: "https://docs.inforiver.com/",
          label: "Documentation",
          position: "left",
          //TODO: Check once
          // activeBaseRegex: '^((?!releases|references|how_to_videos).)*$',
          // title: "Docs",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Learn",
              to: "/learn/modules/module-a",
            },
            {
              label: "Documentation",
              to: "https://docs.inforiver.com/",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Inforiver Community",
              href: "#url",
            },
            {
              label: "Status",
              href: "#url",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              href: "#url",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lumel`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [require.resolve("docusaurus-lunr-search")],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // googleAnalytics: {
        //   trackingID: "UA-136298126-1",
        //   anonymizeIP: true,
        // },

        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
