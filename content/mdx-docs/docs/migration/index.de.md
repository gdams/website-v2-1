---
title: 'Migration Guide'
authors: gdams, HanSolo, MBoegers
---

## Migration zu Eclipse Temurin

Wenn Sie von Oracle JDK auf OpenJDK von Adoptium umsteigen wollen, haben Sie
wahrscheinlich ein paar wichtige Fragen im Kopf.
Vermutlich möchten Sie zuerst wissen, wo die Unterschiede zwischen dem Oracle JDK
und Temurin liegen und welche Schritte Sie für die Migration unternehmen müssen.
Fragen rund um diese Entscheidungen werden in den folgen Abschnitten behandelt.

## Migration von Oracle JDK

Die folgende Tabelle veranschaulicht die proprietären Komponenten, die im Oracle JDK 8
enthalten sind, und die alternativen Technologien, die entweder geplant oder verfügbar
sind, um sie zu ersetzen.
Klicken Sie auf die Links um mehr über die einzelnen Komponenten zu erfahren und über
die Schritte, die nötig sind um diese zu übernehmen.

| Oracle JDK 8 proprietäre Komponente| Alternative Komponente      | Temurin 8 | Temurin 11 |
| ---------------------------------- | ---------------------------- | --------- | ---------- |
| Java Web Start                     | [IcedTea-Web](#icedtea-web)  | <Tick />  | <Cross />  |
| JavaFX                             | [OpenJFX](#openjfx)          | <Cross /> | <Tick />   |
| T2K font rendering engine          | [FreeType](#freetype-font-rendering-bibliothek) | <Tick />  | <Tick /> |
| Monotype Lucida fonts              | [Relizeniserte Lucida fonts](#relizeniserte-lucida-fonts) | <Cross /> (coming soon) | <Cross /> (coming soon) |
| Ductus 2D renderer                 | [Pisces/Marlin](#pisces-und-marlin) | <Tick /> (Pisces) | <Tick /> (Marlin) |
| Kodac Color Matching System (KCMS) library | [LCMS](#lcms)        | <Tick />  | <Tick />   |
| SNMP                               | Use [JMX](#jmx) (or SNMP4J) | <Tick /> (not bundled)  | <Tick /> (not bundled) |
| Sound treiber                      | Use [Windows sound treiber](#windows-sound-treiber) | <Tick /> (not bundled)  | <Tick /> (not bundled) |
| Java Flight Recorder (JFR)         | [Java Flight Recorder](#java-flight-recorder) | <Tick />  | <Tick /> |
| Java Mission Control (JMC)         | Use [Eclipse Mission Control](#eclipse-mission-control) | <Tick />  | <Tick /> |

### IcedTea-Web

Java Web Start wurde von Oracle in Java SE 8 als deprecated markiert und in
Java SE 9 entfernt. IcedTea-Web kann eine gleichwertige Funktionalität für
Temurin 8 für den Benutzer bieten.

IcedTea-Web steht zum Download unter der
[Iced-Tea Web project page](https://adoptopenjdk.net/icedtea-web.html) in
Linux, Windows, MacOS und portablen Paketformaten zur Verfügung.

Verwenden Sie IcedTea-Web genauso wie Java Web Start. Für weitere Informationen,
schauen Sie sich bitte
[Entwicklung einer Java Web Start Anwendung](https://docs.oracle.com/javase/tutorial/deployment/webstart/developing.html)
und [Bereitstellen einer Java Web Start Anwendung](https://docs.oracle.com/javase/tutorial/deployment/webstart/deploying.html) an. Während IcedTea-Web so geschrieben ist, dass es sich wie Java Web Start verhält, gibt es dennoch ein paar bekannte Unterschiede, die als Probleme in den folgen Dokumenten angesprochen werden [GitHub-Projekt](https://github.com/AdoptOpenJDK/icedtea-web). Es wird daran gearbeitet daran, diese Unterschiede zu minimieren oder zu beseitigen.

IcedTea-Web 1.8.x und 2.0.x sind kompatibel mit Temurin 8 Builds. Wir wissen, dass Software, welche
auf IcedTea-Web basiert, die Ausführung von OpenJDK 11 basierten JNLP-Anwendungen unterstützt, aber IcedTea-Web
enthält keine Tests, um die OpenJDK 11 Unterstützung zu überprüfen und wir bündeln es daher nicht mit Temurin 11 Builds.

### OpenJFX

In 2017 wurde JavaFX vom Oracle JDK entkoppelt und in die OpenJDK-Community eingebracht. Die OpenJFX-Community konzentriert
sich auf OpenJFX 11+ und stellt Binaries zur Verfügung, die Sie mit Temurin verwenden können.

OpenJFX 8 wird nicht mehr länger aktiv gepflegt. Wenn Sie dieses benötigen, empfehlen wir ein Upgrade auf OpenJFX 11.

### Freetype Font Rendering Bibliothek

OpenJDK verwendet die quelloffene Freetype Font Rendering Bibliothek anstelle der proprietären T2K-Font Bibliothek.

### Relizeniserte Lucida fonts

Die Lucida Schriften, welche in Oracle JDK 8 verfügbar sind, haben eine
proprietäre Lizenz eines Drittanbieters. Adoptium beabsichtigt, neu
lizensierte Lucida Schriften anzubieten. Es wird daran gearbeitet,
Darstellungsprobleme zu minimieren, wenn diese Schriftarten mit
Freetype gerendert werden.

### Pisces und Marlin

Oracle JDK 8 verwendet einen proprietären 2D-Grafik Renderer namens Ductus,
während OpenJDK einen Open-Source-Renderer namens Pisces verwendet. Seit
OpenJDK 9 wird der Marlin-Renderer verwendet. Bei Adoptium sind Arbeiten
geplant, um entweder Marlin auf OpenJDK 8 zurück zu portieren und/oder
Darstellungsprobleme zwischen den beiden zu minimieren.

### LCMS

OpenJDK verwendet die Open-Source-Bibliothek Little Color Matching System (LCMS)
anstelle der proprietären Kodac CMS library.

### JMX

Das proprietäre SNMP-Paket, das mit Oracle JDK 8 ausgeliefert wird, ist nicht im
OpenJDK. Verwenden Sie JMX als Alternative oder SNMP4J. Diese Pakete sind nicht
mit den Temurin Builds gebündelt.

### Windows Sound Treiber

Oracle JDK bietet native Sound-Treiber für Java 8 unter Windows an, welche nicht
im OpenJDK vorhanden sind. Verwenden Sie stattdessen die Sound-Treiber, die unter
Microsoft Windows verfügbar sind.

### Java Flight Recorder

Java Flight Recorder (JFR) wurde vom Oracle JDK entkoppelt und in die OpenJDK-Community eingebracht.
Es wird daran gearbeitet, JFR zurück zu portieren von OpenJDK 11 auf OpenJDK 8. Wenn diese Arbeit
abgeschlossen ist, wird Temurin JFR in die OpenJDK 8 Binaries mit aufnehmen.

### Eclipse Mission Control

Das [Eclipse Mission Control](https://projects.eclipse.org/projects/adoptium.mc) Projekt bietet einen Download von JMC an, welcher unter dem folgen Link zur Verfügung steht [Download Page](/jmc).
