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
        allReleaseNotes(sort: {fields: id}) {
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
      {(filteredReleaseNotes.length > 0) ? (
          <table className='table text-start table-sm table-striped align-middle table-hover'>
            <thead className='table-dark'>
              <tr>
                <th style={{ width: '15%' }} scope='col'>Issue</th>
                <th scope='col'>Title</th>
              </tr>
            </thead>
              <tbody>
              {filteredReleaseNotes.map(
                (issue, i): string | JSX.Element =>
                  issue && (
                    <tr>
                      <td><a target='_blank' rel='noopener noreferrer' href={issue.node.link}>{issue.node.id}</a></td>
                      <td>{issue.node.title}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
        ) : (
          <span>There are no available release notes for this version.</span>
        )}
      </div>
    </div>
  );
};

export default ReleaseNotesRender;
