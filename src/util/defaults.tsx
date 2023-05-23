// This file is used to store defaults which can be accessed by other Javascript/Typescript functions

export const oses = ['Linux', 'alpine-linux', 'Windows', 'mac', 'AIX', 'Solaris'];
export const arches = ['x64', 'x86', 'aarch64', 's390x', 'ppc64le', 'ppc64', 'arm', 'sparcv9'];
export const packageTypes = ['JDK', 'JRE'];

const apiUrl = 'https://api.adoptium.net/v3/info/available_releases';

let versions = [];
let defaultVersion = '17';
let defaultPackageType = 'jdk';
let defaultArchitecture = 'x64';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const { available_releases, available_lts_releases, most_recent_lts } = data;

    versions = available_releases.map(version => {
      if (available_lts_releases.includes(version)) {
        return `${version} - LTS`; // Mark LTS versions with '- LTS'
      } else {
        return version;
      }
    });

    defaultVersion = `${most_recent_lts} - LTS`;
  })
  .catch(error => {
    console.error('Failed to retrieve Java versions from the API:', error);
    versions = ['20', '19', '18', '17', '16', '11', '8']; // Use string values
    defaultVersion = '17 - LTS';
  });

export { versions, defaultVersion, defaultPackageType, defaultArchitecture };
