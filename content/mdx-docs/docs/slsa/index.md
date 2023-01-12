---
title: 'Adoptium&reg; Secure Supply Chain Management'
authors: tellison, sxa, gdams
---

The [Supply chain Levels for Software Artifacts (SLSA)](https://slsa.dev/) is a security framework that helps to provide confidence that a set of inputs such as source code, libraries, and software packages, lead to a set of well-defined outputs such as a binary and software bill of materials. It is a structured set of technical requirements to help a producer trust the parts of the supply chain that are in their direct control and helps provide confidence in the build process to catch any upstream supply chain attacks.

Adoptium has evaluated the [secure engineering practices of our project](/docs/secure-software)
to determine the appropriate level of SLSA attestation. Details of the SLSA level requirements and how they are being met by Adoptium are given below. Note that SLSA is still in "alpha" state and the requirements are subject to change, particularly for SLSA Levels 3 and 4.

## SLSA Level One

The following requirements for Adoptium's build of Eclipse Temurin have been achieved, and satisfy the necessary requirements to meet SLSA Level 1.

This level means that Adoptium's build process is fully scripted and automated, and publishes formally structured software bill of material (SBOM) attestations listing the components, libraries, and modules that are required to build each binary.

**Build - [Scripted build](https://slsa.dev/spec/v0.1/requirements#scripted-build)**

All steps for producing Eclipse Temurin are defined by version-controlled
[Jenkins pipelines](https://github.com/adoptium/ci-jenkins-pipelines) that invoke build scripts stored in the
[adoptium/temurin-build](https://github.com/adoptium/temurin-build) repository.
The pipeines and build scripts are available for anyone to view and verify, and
[the Jenkins system](https://ci.adoptopenjdk.net/) runs are open to scrutiny.
Documentation for using the build scripts is available in the build repository's
[readme file](https://github.com/adoptium/temurin-build#readme).

**Provenence - [Available](https://slsa.dev/spec/v0.1/requirements#available)**

Adoptium provides SBOM attestations for the provenance of Eclipse Temurin builds.
The SBOM is in [OWASP CycloneDX](https://cyclonedx.org/)
format and available alongside each of our Temurin release artifacts.

The SBOM includes the information required to recreate the build if required, including the source repository tags used by the build process, the full set of parameters used, the output from the configuration steps, and various other pieces of information. We are [continually evolving](https://github.com/adoptium/temurin-build/issues/3013) the specific details included in the SBOM.

## SLSA Level Two

The following additional requirements for Adoptium's build of Eclipse Temurin have been achieved, and satisfy the necessary requirements to meet SLSA Level 2.

This level adds in additional requirements to provide some tamper resistance of the build process, mostly in the areas of having all code version controlled and using a build service to produce and distribute builds.

**Source - [Version controlled](https://slsa.dev/spec/v0.1/requirements#version-controlled)**

Adoptium mirrors the [OpenJDK](https://openjdk.org/) Java SE reference implementation source code into our local Github repository (e.g. [adoptium/jdk17u](https://github.com/adoptium/jdk17u)).
Every change to the source we build and the scripts we use is tracked by GitHub's version control system. This ensures a record of the history of changes that went into each revision. Each change contains the identities of the uploader and reviewers, timestamps of the reviews and submission, the change description/justification, the content of the change, and the parent revisions. All committers and reviewers undergo strong authentication, and all contributors must execute and abide by the
[Eclipse Contributor Agreement](https://www.eclipse.org/legal/ECA.php).

Each immutable revision of the code under our control has a unique reference with an indefinite lifespan via Github (repo URL + branch/tag/ref + commit ID). Eclipse Temurin is built from tagged revisions of our mirror, and we make source archive files available for each release.

**Build - [Build service](https://slsa.dev/spec/v0.1/requirements#build-service)**

All Adoptium's build steps run on [our own managed Jenkins build service](https://ci.adoptopenjdk.net/) and the Eclipse Foundation's code signing service. These services perform the builds, generate the SBOMs, and build the installers where applicable. The output from the builds are uploaded to GitHub release repositories by the Jenkins CI system. No parts of the process run on a developer’s workstation.

Access to build services is carefully managed by the project. The build system is as open as possible to allow scrutiny by the community without compromising security.

**Provenance - [Authenticated](https://slsa.dev/spec/v0.1/requirements#authenticated)**

TODO: The provenance’s authenticity and integrity can be verified by the consumer. This SHOULD be through a digital signature from a private key accessible only to the service generating the provenance.

**Provenance - [Service generated](https://slsa.dev/spec/v0.1/requirements#service-generated)**

All of Adoptium provenance data is generated directly by the project continuous build and test systems. Service users cannot inject or alter the contents of the provenance. Eclipse Temurin's GNU Privacy Guarg (GPG) code signatures are generated by the Eclipse code-signing service, other provenance data including the software bill of materials, cryptographic hashes, build metadata, etc. is directly emitted by the project build system.

## SLSA Level Three - *In progress*

Some of the following additional requirements for Adoptium's build of Eclipse Temurin have been achieved. Work continues on the remaining items as we seek to achieve SLSA Level 3.

**Source - [Retained 18mo]( https://slsa.dev/spec/v0.1/requirements#retained-indefinitely)**

All revisions to source code and its change history are preserved indefinitely and cannot be deleted, except when subject to an established and transparent policy for obliteration, such as a legal or Eclipse Foundation policy requirement. This level of superuser control for changing or deleting history is maintained directly and exclusively by
[the Eclipse Foundation](https://ecliipse.org) on behalf of the project.

Since we store all our code in GitHub it is not be possible for persons to delete or modify the history, even with multi-party approval, except by trusted Eclipse Foundation platform admins with two-party approval following the foundation's obliterate policy. Questions about this policy should be [addressed to the Eclipse Foundation](https://www.eclipse.org/org/foundation/contact.php).

**Build - [Build as code](https://slsa.dev/spec/v0.1/requirements#build-as-code)**

Adoptium's build definition and configuration executed by
[the build service](https://ci.adoptopenjdk.net/) is verifiably derived from text file definitions stored in our version control system.

**Build - [Ephemeral environment](https://slsa.dev/spec/v0.1/requirements#ephemeral-environment)**

Ephemeral environment builds such as a container or VM, provisioned solely for this build, and not reused from a prior build is in place for Linux x86, ARM32, and aarch64 builds. Other platforms are still a work in progress at the project.

**Build - [Isolated](https://slsa.dev/spec/v0.1/requirements#isolated)**

The Adoptium build service ensures that each build step runs in an isolated environment free of influence from other build instances, whether prior or concurrent.

It is not possible for a build to access any secrets of the build service, such as the provenance signing key, as these are stored outside the build system and accessed by a remote call to a separate system. It is not be possible for two builds that overlap in time to influence one another. Each build step runs in an isolated machine environment orchestrated by the Jenkins CI system, and steps from each build are assembled through the use of managed pipelines. Build caches, where used, are purely content-addressable to prevent tampering.

We continue to work on ensuring that is not possible for one build to persist or influence the build environment of a subsequent build. Each part of the environment is specified in the build scripts. This will be ensured by running builds on ephemoral machines everywhere and checking the results are identical.

**Provenance - [Non-falsifiable](https://slsa.dev/spec/v0.1/requirements#non-falsifiable)**

The SBOM provenence informaton cannot be falsified by service users since it is machine generated by the build process and cryptographically signed by the Eclipse Foundation code signing service to prevent tampering. The code signing service is not accessible to regular project committers or Jenkins users.

## SLSA Level Four - *In progress*

Adoptium is working on items required to meet the requirements of SLSA Level 4. These are being tracked via our
[issue tracking system](https://github.com/adoptium/adoptium/issues/160), and contributions are welcome for those tasks.
