// import React from 'react'
// import { Link, graphql } from 'gatsby'
// import MDXRenderer from 'gatsby-mdx/mdx-renderer'
// // import SEO from '../components/SEO/index'

// const BlogPostTemplate = ({ data }) => {
//   const post = data.mdx
//   console.log(data)

//   return (
//     <React.Fragment>
//       {/* <SEO title={post.frontmatter.title} description={post.excerpt} /> */}
//       <h1>{post.frontmatter.title}</h1>
//       <p>{post.frontmatter.date}</p>
//       <MDXRenderer>{post.code.body}</MDXRenderer>
//       <hr style={{}} />

//       <ul
//         style={{
//           display: `flex`,
//           flexWrap: `wrap`,
//           justifyContent: `space-between`,
//           listStyle: `none`,
//           padding: 0,
//         }}
//       >
//         <li />
//         <li />
//       </ul>
//     </React.Fragment>
//   )
// }

// export default BlogPostTemplate

// export const pageQuery = graphql`
//   query($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     mdx(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//       code {
//         body
//       }
//     }
//   }
// `
