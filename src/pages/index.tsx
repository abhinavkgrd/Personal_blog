import * as React from 'react'
import { graphql } from 'gatsby'
import CookingGIF from 'images/cooking.gif'
import Bio from 'components/bio'
import Layout from 'components/layout'
import Seo from 'components/seo'

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={'learnings'}>
            <Seo title="learnings" />
            <Bio />

            <hr />

            <div
                style={{
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    flex: '1',
                    flexDirection: 'column',
                }}>
                <h4>Something good is cooking 😋</h4>
                <p>please be patient 😌 </p>
                <div style={{ fontSize: '100px' }}>
                    <img src={CookingGIF} alt="cooking gif" />
                </div>
            </div>
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                }
            }
        }
    }
`

/*
// // import { Link, graphql } from 'gatsby'

// import Bio from 'components/bio'
// import Layout from 'components/layout'
// import Seo from 'components/seo'
// import CookingGIF from 'images/cooking.gif'

// const BlogIndex = ({ data, location }): JSX.Element => {
//     const siteTitle = data.site.siteMetadata?.title || `Title`
//     // const posts = data.allMarkdownRemark.nodes

//     return (
//         <Layout location={location} title={siteTitle}>
//             <Seo title="Home" />
//             <Bio />

//             <hr />
//             <div
//                 style={{
//                     display: 'flex',
//                     textAlign: 'center',
//                     justifyContent: 'center',
//                     flex: '1',
//                     flexDirection: 'column',
//                 }}>
//                 <h4>Something good is cooking 😋</h4>
//                 <p>please be patient 😌 </p>
//                 <div style={{ fontSize: '100px' }}>
//                     <img src={CookingGIF} alt="cooking gif" />
//                 </div>
//             </div>
//         </Layout>
//     )

//     // return (
//     //     <Layout location={location} title={siteTitle}>
//     //         <Seo title="All posts" />
//     //         <Bio />
//     //         <hr />
//     //         <ol style={{ listStyle: `none` }}>
//     //             {posts.map(post => {
//     //                 const title = post.frontmatter.title || post.fields.slug

//     //                 return (
//     //                     <li key={post.fields.slug}>
//     //                         <article
//     //                             className="post-list-item"
//     //                             itemScope
//     //                             itemType="http://schema.org/Article">
//     //                             <header>
//     //                                 <h2>
//     //                                     <Link
//     //                                         to={post.fields.slug}
//     //                                         itemProp="url">
//     //                                         <span itemProp="headline">
//     //                                             {title}
//     //                                         </span>
//     //                                     </Link>
//     //                                 </h2>
//     //                                 <small>{post.frontmatter.date}</small>
//     //                             </header>
//     //                             <section>
//     //                                 <p
//     //                                     dangerouslySetInnerHTML={{
//     //                                         __html:
//     //                                             post.frontmatter.description ||
//     //                                             post.excerpt,
//     //                                     }}
//     //                                     itemProp="description"
//     //                                 />
//     //                             </section>
//     //                         </article>
//     //                     </li>
//     //                 )
//     //             })}
//     //         </ol>
//     //     </Layout>
//     // )
// }

// export default BlogIndex

// // export const pageQuery = graphql`
// //     query {
// //         site {
// //             siteMetadata {
// //                 title
// //             }
// //         }
// //         allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
// //             nodes {
// //                 excerpt
// //                 fields {
// //                     slug
// //                 }
// //                 frontmatter {
// //                     date(formatString: "MMMM DD, YYYY")
// //                     title
// //                     description
// //                 }
// //             }
// //         }
// //     }
// // `
*/
