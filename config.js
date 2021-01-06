const config = {
  gatsby: {
    pathPrefix: '/prasanna/public',
    siteUrl: 'https://prashub.com/', //file:///Users/p/Documents/gatsby/gatsby-gitbook-starter/public', //',
    gaTrackingId: null,
    trailingSlash: true,
  },
  header: {
    logo: '',
    logoLink: '',
    title:
      "PRASANNA PAVANI",
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    // social: `<li>
		//     <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		//       <div class="twitterBtn">
		//         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		//       </div>
		//     </a>
		//   </li>
		// 	<li>
		//     <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		//       <div class="discordBtn">
		//         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		//       </div>
		//     </a>
		//   </li>`,
    links: [{ text: '', link: '' }],
    // search: {
    //   enabled: false,
    //   indexName: '',
    //   algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
    //   algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    //   algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    // },
  },
  sidebar: {
    forcedNavOrder: [
      '/about/', // add trailing slash if enabled above
      '/biography/',
      '/work/',
      '/talks/',
      '/publications/',
      '/research/',
      // '/tweets',
      '/contact/'
    ],
    collapsedNav: [
      '/publications/', // add trailing slash if enabled above
      '/research/',
    ],
    links: [{ text: '', link: '' }],
    frontline: false,
    ignoreIndex: true,
    title: "",
  },
  siteMetadata: {
    title: 'Prasanna Pavani',
    description: 'Prasanna Pavani',
    ogImage: null,
    docsLocation: '',
    favicon: 'https://prashub.com/prasanna/images/favicon.ico',
  },
  // pwa: {
  //   enabled: false, // disabling this will also remove the existing service worker.
  //   manifest: {
  //     name: 'Gatsby Gitbook Starter',
  //     short_name: 'GitbookStarter',
  //     start_url: '/',
  //     background_color: '#6b37bf',
  //     theme_color: '#6b37bf',
  //     display: 'standalone',
  //     crossOrigin: 'use-credentials',
  //     icons: [
  //       {
  //         src: 'src/pwa-512.png',
  //         sizes: `512x512`,
  //         type: `image/png`,
  //       },
  //     ],
  //   },
  // },
};

module.exports = config;
