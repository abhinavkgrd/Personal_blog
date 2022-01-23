/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    author {
                        name
                        location
                        locationLink
                    }
                    work {
                        name
                        link
                        description
                    }
                    social {
                        username
                    }
                    description
                }
            }
        }
    `)

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author
    const work = data.site.siteMetadata?.work
    const description = data.site.siteMetadata?.description

    return (
        <>
            <div className="bio">
                {author?.name && (
                    <ul>
                        <li>
                            Hii 👋, I am <strong>{author.name}</strong>{' '}
                            {author?.summary || null}
                        </li>
                        <li>
                            I live and break stuff from 📍
                            <strong>
                                <a target={'_blank'} href={author.locationLink}>
                                    {' '}
                                    {author.location}
                                </a>
                            </strong>
                        </li>
                        <li>
                            I am currently, with a bunch of awesome people,
                            building
                            <strong>
                                <a target={'_blank'} href={work.link}>
                                    {' '}
                                    {work.name}{' '}
                                </a>
                            </strong>
                            - {work.description}
                        </li>
                    </ul>
                )}
                {/* <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={['auto', 'webp', 'avif']}
                src="../images/me.jpg"
                width={100}
                height={100}
                quality={95}
                objectFit={'cover'}
                alt="Profile picture"
            /> */}
            </div>
            <p>{description}</p>
        </>
    )
}

export default Bio
