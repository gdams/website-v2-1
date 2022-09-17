import {
    AllReleaseNotes,
    AsciidocPage,
    File,
    ReleaseNotePage
} from '../types';

export const createAsciidocData = (): {
    asciidoc: AsciidocPage;
    file: File;
  } => ({
    asciidoc: {
        id: 'asciidoc-1',
        html: `
            <p>Hello World, this is a <pre><code>test</code></pre></p>
            <table><thead><td>Header 1</td><td>Header 2</td></thead><tbody><tr><td>Cell 1</td><td class="icon">Cell 2</td></tr></tbody></table>
            <a href="https://www.eclipse.org">Eclipse</a>
            <span class="icon">[docker]</span>
            <span class="icon">[check]</span>
        `,
        document: {
            title: 'Asciidoc Page title',
            main: 'Asciidoc Page content',
        },
        pageAttributes: {
            authors: 'author1, author2',
        },
        fields: {
            slug: '/asciidoc/asciidoc-page-title',
        }
    },
    file: {
        relativePath: 'test.adoc',
    }
});

export const createReleaseNoteData = (): {
    allReleaseNotes: AllReleaseNotes;
  } => ({
    allReleaseNotes: {
        edges: [
            {
                node: {
                    id: 'release-note-1',
                    version: '1.0.0',
                    title: 'Release Note title',
                    priority: 1,
                    component: 'component1',
                    link: 'https://release-note.com',
                }
            }
        ]
    }
});

