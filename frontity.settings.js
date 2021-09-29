const settings = {
  name: "frontity-chakra-react",
  state: {
    frontity: {
      url: "https://personalsitesource.xyz",
      title: "Trevor Mearns",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "frontity-chakra-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Blog", "/blog"],
            ["Portfolio", "/portfolio/"],
            ["Contact", "/contact-trevor/"]
          ],
          // socialLinks: [
          //   ["github", "https://github.com/Trevorton27/"],
          //   ["linkedin", "https://www.linkedin.com/in/trevor-mearns-8a042a56/"]
          // ],
          featured: {
            showOnArchive: true,
            showOnPost: true
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://personalsitesource.xyz",
          postsPage: "/blog",
          homepage: "/home"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
