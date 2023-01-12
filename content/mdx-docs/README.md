# MDX Docs Pages

Most static pages on this site are written as MDX (Markdown) pages. These are similar to Markdown in format but give us more flexibility.

The directory layout of these files is very important as it determines the path to the file in the site. For example a documnet in `/foo/bar/index.md` will be served up as `/foo/bar` on the site.

```tree
.
├── docs
│   ├── aqavit-verification.adoc
│   ├── faq
│   │   ├── index.md
│   │   └── index.de.md
│   ├── first-timer-support
│   │   ├── index.md
│   │   └── index.de.md
│   └── qvs-policy
│       ├── index.md
│       └── index.de.md
└── installation
    ├── index.md
    └── index.de.md
```

## Required Attributes

Every MDX file must have a `title` and `authors` attribute at the top. If you are starting a new page then start with just your own GitHub username. There is a [GitHub Action](../../.github/workflows/check-contributors.yml) that will update contributors automatically once the doc has been merged so there is no need to add your username if you're editing an existing doc.

```md
title: A sample documentation title
authors: joe, bloggs, fred
```

Additionally you can add the `toc` attribute to the top of the MDX page if you want to display a table of contents at the start of the page.

## Localising Documentation

The site has multi-language support which means that documentation can be served up in the users local language. By default, the English version if served if a localised version doesn't exit.

Localised documentation is named with the language key in the name so a German version would be `index.de.md` and a Spanish version would be `index.es.md`.

If you want to modify an existing translation you can locate the file most easily using the `Edit this page` button at the bottom of the page:

![Edit this page](https://user-images.githubusercontent.com/20224954/157446389-2293e3cc-82b4-4375-96e8-7c60b8d5de56.png)

To add a newly translated document you must create a file called `/docs/foo/index.de.adoc` which contains the translated documentation. Please make sure that the `title` attribute is always in English and that the authors attribute only contains your own GitHub username if you're creating a new file.

## Adding Images

You may wish to add images to the MDX page. In order to do this you should add the image to the same directory as the `index.md` file. Once you've added the image you can reference it in the document using the following syntax:

```md
![a description of the image](sample_image.png)
```
