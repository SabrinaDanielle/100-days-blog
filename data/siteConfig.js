module.exports = {
  siteTitle: '100 Days of Code Challenge by Bri',
  siteDescription: "👋 Blogging my attempt at the 100 days of code Challenge ",
  authorName: 'Sabrina Danielle Green',
  twitterUsername: '@brinadanielle',
  authorAvatar: 'avatar.jpeg', // file in content/images
  multilangPosts: false, // enable/disable flags in post lists
  authorDescription: `
 Throughout her career as a creative developer, educator, and resolutionist 🎩, <br> Sabrina Danielle Green has found fulfillment and success in seeing projects from ideation to manifestation 🌟.<br>
  She is currently focused on Full Stack Javascript development with a special interest in ReactJS.<br>
  As an experienced remote worker she welcomes collaboration request from any location 🌎 with great tools for communication  <br>
  Do you want to know more? <a href="https://www.doingdot.com/about" target="_blank">Visit my website!</a>
  `,
  siteUrl: 'https://www.doingdot.com/',
  disqusSiteUrl: 'https://bricode100.netlify.com',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'cover.jpg', // file in content/images
  googleAnalyticsId: 'UA-141256198-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/avatar.jpeg',
  postsPerPage: 6,
  disqusShortname: 'sabrinadanielle',
  headerLinks: [
    {
      label: '❤️🤔✨',
      url: '/',
    },
    // {
    //   label: 'Blog',
    //   url: '/',
    // },
    // {
    //   label: 'About',
    //   url: '/gatsby-starter-morning-dew',
    // },
    // {
    //   label: 'Installation',
    //   url: '/how-to-install',
    // },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    // {
    //   // sectionName: 'Explore',
    //   // links: [
    //   //   {
    //   //     label: 'Blog',
    //   //     url: '/',
    //   //   },
    //     // {
    //     //   label: 'About',
    //     //   url: '/gatsby-starter-morning-dew',
    //     // },
    //     // {
    //     //   label: 'Installation',
    //     //   url: '/how-to-install',
    //     // },
    //   // ],
    // },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'Github',
          url: 'https://github.com/SabrinaDanielle',
        },
        {
          label: 'Website',
          url: 'https://www.doingdot.com',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/brinadanielle',
        },
      ],
    },
  ],
}
