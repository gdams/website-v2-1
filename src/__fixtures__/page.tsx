import {
    MDXPage,
    SingleMDXPage,
    SingleMDXDocPage,
    SiteMetaData
} from '../types';

export const createMDXData = (): {
    allMdx: MDXPage;
} => ({
    allMdx: {
        edges: [
            {
                node: {
                    frontmatter: {
                        title: 'MDX Page title',
                        author: 'pmc',
                        date: '2021-01-01',
                        describtion: 'MDX Page describtion',
                    },
                    fields: {
                        slug: '/mdx/mdx-page-title',
                        postPath: '/mdx/mdx-page-title',
                    },
                    excerpt: 'MDX Page excerpt',
                }
            }
        ]
    }
});

export const createSingleMDXData = (): {
    mdx: SingleMDXPage;
    site: SiteMetaData;
} => ({
    mdx: {
        id: 'mdx-1',
        excerpt: 'MDX Page excerpt',
        frontmatter: {
            title: 'MDX Page title',
            author: 'pmc',
            date: '2021-01-01',
            description: 'MDX Page describtion',
            tags: ['tag1', 'tag2'],
        }
    },
    site: {
        siteMetadata: {
            title: 'Site title',
            siteUrl: 'https://adoptium.net',
            social: {
                twitter: 'twitter',
            }
        }
    }
});

export const createMDXDocsData = (toc): {
    mdx: SingleMDXDocPage;
} => ({
    mdx: {
        id: 'mdx-1',
        fields: {
            slug: '/mdx/mdx-page-title',
        },
        frontmatter: {
            title: 'MDX Doc Page title',
            authors: 'pmc, pmc2',
            toc: toc ? true : false
        },
        tableOfContents: {
            items: [
                {
                    url: '#section1',
                    title: 'Section 1'
                },
                {
                    url: '#section2',
                    title: 'Section 2'
                }
            ],
        }
    }
});
