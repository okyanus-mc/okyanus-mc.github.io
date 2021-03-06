module.exports = {
  title: "Okyanus",
  locales: {
    "/": {
      lang: "en-US",
      description: "Serverside API for Fabric"
    }
  },
  themeConfig: {
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "Edit this page",
        sidebar: [
          {
            title: "Development",
            path: "/dev/getting-started",
            children: ["dev/getting-started", "dev/guide", "dev/permissions"]
          },

          {
            title: "Contributing",
            path: "/dev/okyanus/contributing",
            children: ["dev/okyanus/workspace"]
          }
        ],
        nav: [
          { text: "Javadocs", link: "https://okyanus-mc.github.io/api/" },
          { text: "GitHub", link: "https://github.com/okyanus-mc" }
        ]
      }
    }
  }
};
