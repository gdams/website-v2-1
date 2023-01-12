---
title: 'Frequently Asked Questions'
authors: gdams, HanSolo, sw-fox, aumann
---

Wir haben unsere ersten Veröffentlichungen von Eclipse Temurin abgeschlossen und werden
diese FAQ aktualisieren, sobald die Dinge fertiggestellt und verfügbar sind. Falls Ihre
Frage nicht durch die unten stehenden Einträge beantwortet wird oder Sie
direkt mit uns sprechen möchten bzw. zusätzliche Fragen haben, ist der beste Ort unser
[Slack-Channel](/slack) oder über einen Issue im
[Support-Kanal](https://github.com/adoptium/adoptium-support).

## Wo sind die neuesten JDKs?

Die meisten der Eclipse Temurin builds mit HotSpot für 8u322-b06, 11.0.14+9 und
jdk-17.0.2+8 sind nun auf dieser Seite verfügbar.

## Was ist mit AdoptOpenJDK passiert?

Kurze Antwort: Das Projekt ist dermaßen gewachsen und um die Stabilität des Projektes in der Zukunft zu gewährleisten, haben wir uns entschieden
es in der [Eclipse Foundation unterzubringen](https://projects.eclipse.org/projects/adoptium), [wie bereits Ende letzten Jahres angekündigt](https://blog.adoptopenjdk.net/2020/06/adoptopenjdk-to-join-the-eclipse-foundation/).

Längere Antwort: Die Builds, welche Sie als AdoptOpenJDK kennen, sind jetzt "Eclipse Temurin by Adoptium"([release blog post](/blog/2021/08/adoptium-celebrates-first-release/))
Aber keine Sorge - trotz der Änderungen im Branding sind es die gleichen offenen Build-Prozesse, AQAvit-Test-Suites und hauptsächlich das gleiche Team, welches die builds erstellt.
Allerdings sind jetzt [mehr größere Unternehmen](/members) an der Arbeitsgruppe beteiligt.

## Warum wird man von der AdoptOpenJDK Seite nicht direkt hierhin umgeleitet?

Aus folgenden zwei Gründen, erstens: Da noch immer Benutzer in der Umstellungsphase sind, haben wir die alte Seite so belassen, wie sie war, mit dem gleichen Layout und Buttons.
Über die Links auf der alten Website erhalten Sie die neuesten Temurin builds. Allerdings sollte man sich nicht darauf verlassen sondern lieber auf die Adoptium-API und -Webseite
umsteigen um Temurin Binaries herunterzuladen. Es gibt einige Varianten, welche noch nicht auf der Adoptium-Webseite verfügbar sind. Diese lassen sich jedoch [weiterhin](#werden-durch-die-migration-meine-api-links-ungültig) über die alte Website beziehen,
weshalb wir diese nicht entfernen, da dieses dazu führen würde, dass einige Funktionen ohne Vorwarnung verschwinden würden.
Dieses ist nicht optimal und führt zu einer gewissen SEO-Verwirrung, aber wir denken, dass es im MOment die richtige Option ist.
In Zukunft wird die Adoptium-Webseite mehr als nur Temurin anbieten, weswegen eine reine Weiterleitung zwischen den Domains nicht angemessen wäre.

Zweitens: Wie bereits im vorigen Absatz erwähnt, sind einige Dinge nicht auf Adoptium.net verfügbar und aus diesem Grund wird die alte Webseite ohne explizite Weiterleitung beibehalten, um diese Dinge weiterhin zur Verfügung zu stellen. Dazu gehören Sachen wie [Upstream builds](https://adoptopenjdk.net/upstream.html) und [IcedTea-WEB](https://adoptopenjdk.net/icedtea-web.html).
Würden diese Sachen einfach verschwinden, so wäre das für unsere Kunden nicht die beste Option und wir würden eine Menge Beschwerden erwarten.

## Was bedeutet der Name "Eclipse Temurin"?

Dies ist der Projekt- und Markenname für die Binaries, welche die Eclipse Foundation produziert.
Sie können diese Binaries als Nachfolger von AdoptOpenJDK Binaries betrachten. Es ist allerdings zu beachten, dass diese Binaries nur einige von vielen sind, welche schließlich
im [Eclipse Adoptium Marketplace](https://github.com/adoptium/adoptium/issues/7) zur Verfügung stehen werden.
Wir verstehen, dass die Aufteilung des Namens in Adoptium/Temurin verwirrender ist als einfach nur "Adoptium", allerdings ist dieses auch ähnlich wie bei anderen Anbietern,
z.B. Amazon mit Corretto, Azul mit Zulu und andere. Das "Adoptium"-Projekt und die Arbeitsgruppe werden sich mit mehr als nur Temurin befassen weswegen es wichtig ist, diese
Unterscheidung beizubehalten.

## Wo sind die OpenJ9 builds?

Der Übergang zu Adoptium bedeutet leider, dass wir nicht mehr in der Lage sind die Builds von Eclipse OpenJ9 anzubieten.
Dieses hat nun IBM übernommen und dort sind sie nun verfügbar als "[IBM Semeru](https://developer.ibm.com/languages/java/semeru-runtimes/)".
Es gibt keinen Grund, sich über diese Änderung Sorgen zu machen - auch diese Distribution ist immer noch kostenlos verfügbar.

## Wo sind die Docker-Images?

Aufgrund der begrenzten Anzahl von Personen, welche an dem Projekt arbeiten, ist die Pflege der zahlreichen Docker-Images, welche wir on AdoptOpenJDK zur Verfügung gestellt
haben, nicht mehr tragbar. Aus diesem Grund werden wir ein reduziertes Set von Docker-Images für Temurin bereitstellen.
Jene Benutzer, welche sich eine containerbasierte Linux-Distribution wünschen, für die wir kein Image zur Verfügung stellen, verweisen wir an [diese Anleitung](/blog/2021/08/using-jlink-in-dockerfiles/).

## Wo sind die Linux RPM/DEB Pakete?

Linux-Installer sind unter packages.adoptium.net verfügbar.
Weitere Informationen finden Sie in [dieser Anleitung](/installation/linux).

## Warum beeinhalten die Pakete nicht IcedTea-Web?

Die Vereinbarungen, welche wir seit dem Umzug zur Eclipse Foundation getroffen haben, besagen, dass wir IcedTea-Web nicht mehr in unsere Installationsprogramme
aufnehmen können. Sie können diese Funktionalität jedoch immer noch, falls benötigt, hinzufügen, indem Sie [dieser Anleitung](https://blog.adoptopenjdk.net/2018/10/using-icedtea-web-browser-plug-in-with-adoptopenjdk/) folgen.

## Werden durch die Migration meine API-Links ungültig?

Es gibt eine [neue Download-API](https://api.adoptium.net/q/swagger-ui/)
die von Adoptium zum Herunterladen von Eclipse-Temurin-Builds bereitgestellt wird.

Die gute Nachricht ist, dass sie der API von AdoptOpenJDK sehr ähnlich sieht, so dass die Migration für all, die sie derzeit verwenden, nicht allzu schwierig ist.
Zur Zeit leitet die AdoptOpenJDK-API auf Temurin (oder Semeru) um (falls verfügbar) wenn Sie die neuesten Release-Builds anfordern.
Wir haben dies getan, da wir nicht die Zeit hatten die Community zur vollständigen Migration zu bewegen und weil wir noch nicht alles veröffentlicht haben, was bedeutet, dass es noch
fehlende Builds in der Adoptium-API gibt.
Bitte beachten Sie, dass dies eine vorübergehende Maßnahme ist und die AdoptOpenJDK API voraussichtlich dieses Verhalten nicht für immer beibehalten wird, wenngleich es zur Zeit
noch keinen Zeitplan zur Entfernung der Umleitung gibt.

## Können Sie einen Vortrag über das Projekt halten?

Die an dem Projekt beteiligten Personen sind leidenschaftlich bemüht, es zu fördern.
Wir sind sehr daran interessiert, Wege zu finden über unsere Arbeit bei Adoptium und den Temurin Binaries zu sprechen.
Falls also der Wunsch besteht, dass wir an einer Veranstaltung teilnehmen, werden wir sehen was wir tun können um dieses zu ermöglichen.
Der beste Weg um mit dem Team in Kontakt zu treten ist über den Slack-Channel.
