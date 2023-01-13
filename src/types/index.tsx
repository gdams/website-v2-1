export interface File {
    relativePath: string;
}

export interface MDXPage {
    totalCount?: number;
    edges: MDXPageItem[];
}

export interface MDXPageItem {
    node: {
        frontmatter: {
            title: string;
            author: string;
            date: string;
            describtion: string;
        },
        fields: {
            slug: string;
            postPath: string;
        },
        excerpt: string;
    }
}

export interface SingleMDXPage {
    id: string;
    excerpt: string;
    frontmatter: {
        title: string;
        author: string;
        date: string;
        description: string;
        tags: string[];
        featuredImage?: {
            childImageSharp: {
                gatsbyImageData: {
                    images: {
                        fallback: {
                            src: string;
                        }
                    }
                }
            }
        }
    }
}

export interface SingleMDXDocPage {
    id: string;
    fields: {
        slug: string;
    }
    frontmatter: {
    }
    tableOfContents?: {
        items: [
            tableOfContents[]
        ]
    }
}

export interface tableOfContents {
    title: string;
    url: string;
}

export interface SiteMetaData {
    siteMetadata: {
        title: string;
        siteUrl: string;
        social: {
            twitter: string;
        }
    }
}