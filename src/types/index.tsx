export interface AsciidocPage {
    id: string;
    html: string;
    document: {
        title: string;
        main: string;
    },
    fields: {
        slug: string;
    },
    pageAttributes: {
        authors: string;
    }
}

export interface File {
    relativePath: string;
}

export interface ReleaseNotePage {
    node: {
        id: string;
        version: string;
        title: string;
        priority: number;
        component: string;
        link: string;
    }
}

export interface AllReleaseNotes {
    edges: [
        node: ReleaseNotePage
    ];
}