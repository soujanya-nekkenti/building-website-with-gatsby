module.exports = {
  siteMetadata: {
    title: "Soujanya Nekkanti",
    description:
      "Personal website, my resume, skills and interests along with a blog about web development",
    author: "Soujanya Nekkanti",
    twitter: "https://twitter.com/soujanya1604",
    linkedin: "https://www.linkedin.com/in/lakshmisowjanyanekkanti1604/",
    github: "https://github.com/soujanya-nekkenti",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-styled-components",
    },
    {
      resolve: "gatsby-source-file-system",
      options: {
        name: "pages",
        path: "${_dirname}/src/pages",
      },
    },
    {
      resolve: "gatsby-source-file-system",
      options: {
        name: "posts",
        path: "${_dirname}/src/posts",
      },
    },
    {
      resolve: "gatsby-source-file-system",
      options: {
        name: "images",
        path: "${_dirname}/src/images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsbyremark-images",
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
  ],
}
