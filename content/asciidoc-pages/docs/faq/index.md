---
title: 'Frequently Asked Questions'
authors: gdams, karianna, sxa555, aahlenst, sxa, tellison, kemitix, Fishbowler
---

We have gathered together a few frequently asked questions (FAQs) into
this document. If you want to talk to us about these topics, or ask additional questions
the best place is via [Slack](/slack) or by raising an issue in the
[support channel](https://github.com/adoptium/adoptium-support).

## Where are the latest Adoptium&reg; JDKs?

Adoptium's JDKs are called Eclipse Temurin, and the releases we recommend for
use are available on our [latest releases page](/temurin/releases).

We also feature in all the notable Java installation managers such as
[Homebrew](https://formulae.brew.sh/cask/temurin), [SDKMAN](https://sdkman.io/),
[winget](https://github.com/microsoft/winget-cli), and [Chocolatey](https://chocolatey.org/), we appear in
[official Docker images](https://hub.docker.com/_/eclipse-temurin), and you can
use Temurin through the Github
["setup-java"](https://github.com/marketplace/actions/setup-java-jdk#basic)
action, and part of cloud providers' Java support.

Linux installers are available at packages.adoptium.net. For more
information see [this guide](/installation/linux).

## How can I link to the latest Temurin&trade; builds?

The
[Adoptium API cookbook](https://github.com/adoptium/api.adoptium.net/blob/main/docs/cookbook.adoc#example-two-linking-to-the-latest-jdk-or-jre)
has examples of stable URLs that link to specific or the latest Temurin JDKs and JREs. You can also promote Temurin by embedding html [buttons code](/temurin/buttons/) provided on the website.

## Is Temurin free to use?

Yes. The Eclipse Temurin binaries are provided at no cost to you by Adoptium to use,
forever, under the terms of the "GNU General Public License, version 2 with the
Classpath Exception". You may freely use, modify, and share the code as described
in the licenses included in the download.

## How can I help the project?

The Adoptium team welcome help in many different ways. For example:

* Anyone can contribute to the funds that keep the project running smoothy, either
as a [one-off donation](https://www.eclipse.org/donate/adoptium/) or through a
more structured [project sponsorship](/sponsors).

* Organizations that depend upon Adoptium are encouraged to join the
[Adoptium Working Group](/members) and gain a voice in the direction of the project.

* We welcome technical and creative help at the project to advance our goals through
promoting and marketing, writing blogs about your experience with Adoptium, answering
questions in our [active Slack community](/slack), helping to test the
software or diagnose problems, and [fixing some issues](/docs/first-timer-support) that have been reported.

* Many other ways either as a one-off adventure or longer term team member, just
join us and tell us your ideas!

## How long is Eclipse Temurin supported?

Our release frequency and support statement is available [here](/support).

## Has Eclipse Temurin passed the JCK?

Yes. Each Temurin release has passed the relevant Oracle Java Compatibility Kit (JCK)
to demonstrate that it is a compatible implementation of the Java specification.
In addition, Temurin releases must pass the [AQAvit quality verification suite](/aqavit)
to ensure they are ready for production usage. AQAvit tests check the release exhibits
great performance, security, resilience and endurance, and the ability to pass a wide
variety of application compatibility tests.

## Where do I report a bug or problem with Eclipse Temurin?

If you suspect a security vulnerability with any product of the Adoptium project,
please send a report to the [Eclipse Security Team](https://www.eclipse.org/security/)
who will manage and track the issue privately until it is resolved.

Where something is simply not behaving as you expect or you have questions about
how to configure Temurin please let us know publicaly by opening a
[support issue](https://github.com/adoptium/adoptium-support/issues/new/choose) and we will
work with you to seek a solution. Our support is ["community support"](/support)
so problems are addressed on a best effort basis. You should approach organizations
offering commercial support if you require a guaranteed service-level for your Java
usage.

## Can you deliver Temurin with my favorite Docker base OS image?

We have a set list of variants in our
[official Docker repository](https://hub.docker.com/_/eclipse-temurin) to ensure we
are responsive to the delivery of new images containing Temurin. Users
who want a containerized Linux distribution that we don’t provide can follow
the instructions in [this guide](/blog/2021/08/using-jlink-in-dockerfiles/).

## Will you support my favorite architecture and operating system?

Eclipse Temurin has the broadest range of platfom support across multiple Java API
versions. Each new platform incurs further cost and demand on the project's
resources so we constantly review the download and usage demand to ensure we
are releasing on platforms relevant to a large set of users. The current
set of platforms we target in our build and test process is listed [here](/supported-platforms).

## Can I automate the download of Temurin binaries?

Yes! There is a rich [download API](https://api.adoptium.net/q/swagger-ui/)
provided by Adoptium for downloading Eclipse Temurin builds. Using the API it is
possible to get information about the latest builds of Temurin, and pull
them down into your own application.

We provide [an example of automating a download](https://github.com/adoptium/api.adoptium.net/blob/main/docs/cookbook.adoc#example-three-scripting-a-download-using-the-adoptium-api)
in the
[Adoptium API cookbook](https://github.com/adoptium/api.adoptium.net/blob/main/docs/cookbook.adoc#adoptium-api-cookbook).

## What is this "Eclipse Temurin" name?

This is the project and brand name for the binaries that the Eclipse
Foundation produces. While we appreciate that the Adoptium/Temurin name split
is more confusing than just "Adoptium", this is similar to how other
vendors brand their binaries, e.g. Amazon has Corretto, Azul has Zulu
(and others). The "Adoptium" project and working group will deal with
more than just Temurin so the distinction is important to maintain.

## What happened to AdoptOpenJDK?

The AdoptOpenJDK builds are now known as "Eclipse Temurin by
Adoptium"([read the blog post](blog/2021/08/adoptium-celebrates-first-release/)).
Don’t worry though - despite the branding changes it is the same open build processes,
AQAvit test suites and primarily the same team producing them as before, but
there are [more larger companies](/members) bringing their expertise
to the working group.

To ensure a smooth transition we have left the old site active, however,
the links to latest builds on the old site will now bring you to the
Temurin builds. In time the old website will be fully retired.

Some items, such as the [Upstream builds](https://adoptopenjdk.net/upstream.html)
and [IcedTea-WEB](https://adoptopenjdk.net/icedtea-web.html) remain only available
via AdoptOpenJDK.

## Where are the OpenJ9 builds?

The transition to Adoptium means we have unfortunately not been able to
continue to distribute builds of Eclipse OpenJ9. IBM has now taken them
over and they are now available as
"[IBM Semeru](https://developer.ibm.com/languages/java/semeru-runtimes/)".
There is no need to be concerned about the change - it is still free.

## Why do the packages not include IcedTea-Web?

The agreements that we have since moving under the Eclipse Foundation
mean that we can no longer include IcedTea-Web in our installers.
However, you can still add the functionality if you require it using the
[instructions here](https://blog.adoptopenjdk.net/2018/10/using-icedtea-web-browser-plug-in-with-adoptopenjdk/).

## Can you give a talk on the project?

The people involved in the project are passionate about promoting it and
we are keen to find ways to promote the work we do at Adoptium and with
the Temurin binaries so feel free to get in touch with us if you have a
forum you wish us to participate in and we will see what we can do. In
general contacting the team via Slack is the best way to engage with us.
