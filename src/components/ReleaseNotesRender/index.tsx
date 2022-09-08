import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useQueryParam, StringParam } from 'use-query-params'

const ReleaseNotesRender = (): null | JSX.Element => {
  let selectedVersion
  let [versionParam] = useQueryParam('version', StringParam)
  if (versionParam) {
      selectedVersion = versionParam;
  }

  const { allReleaseNotes } = useStaticQuery(
    graphql`
      query {
        allReleaseNotes {
          edges {
            node {
              id
              title
              link
              version
            }
          }
        }
      }
    `
  )

  const filteredReleaseNotes = allReleaseNotes.edges.filter((releaseNote) => releaseNote.node.version === selectedVersion)

  return (
    <div className="p-5 text-center">
	    <div className="container">
      {selectedVersion ? (
        <h2>Release Notes for {selectedVersion}</h2>
      ) : (
        <>
        <h2>Oops... We couldn't find those release notes</h2>
        <span>Please ensure that you have a specified a version using the version URL parameter: <code>?version=x.x.x</code></span>
        </>
      )}
      {filteredReleaseNotes && (
          filteredReleaseNotes.map(
            (issue, i): string | JSX.Element =>
              issue && (
                <>
                <span><a href={issue.node.link}>{issue.node.title}</a></span>
                <br/>
                </>
              )
            )
        )}
      </div>
    </div>
  );
};

export default ReleaseNotesRender;
