import * as React from 'react'

import Bio from 'components/bio'
import Layout from 'components/layout'
import Seo from 'components/seo'

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Home" />
            <Bio />

            <hr />
        </Layout>
    )
}

export default BlogIndex
