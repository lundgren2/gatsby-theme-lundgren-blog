module.exports = {
  pathPrefix: `/`, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: `Tobias Lundgren`, // Navigation and Site Title
  siteTitleAlt: `Tobias Lundgren personal blog`, // Alternative Site title for SEO
  siteUrl: `https://lundgren.tech/portfolio/gatsby-theme-lundgren-blog`, // Domain of your site. No trailing slash!
  siteLanguage: `sv`, // Language Tag on <html> element
  siteLogo: `/logos/logo-1024.png`, // Used for SEO and manifest
  siteDescription: `Tobias Lundgren personal blog`,
  author: `Tobias Lundgren <@lundgren2>`, // Author for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  ogSiteName: `lundgrendesign`, // Facebook Site Name
  ogLanguage: `sv_SE`, // Facebook Language
  userTwitter: `@lundgrendesign`, // Twitter Username
  googleAnalyticsID: 'UA-47519312-3',

  // Manifest and Progress color
  themeColor: `#0D1552`,
  backgroundColor: `#302B26`,

  // Github GraphQL
  githubApiToken: process.env.GITHUB_API_TOKEN,
  githubApiVariables: {
    number_of_repos: 12,
  },
};
