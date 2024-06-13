---
title: "Warum Dart in der Umschulung?"
subtitle: "Gründe für den Sieg des Newcomers gegen Python, Java & Co"
date: "2021-07-14"
taxonomy:
    category:
        - Academy
    tag:
        - Umschulung
        - Dart
        - Programmierung
        - FIAE
author: "Andreas Höfer"
description: "Darlegung der Gründe für die Entscheidung darüber, welche Programmiersprachen in der Umschulung zum Fachinformatiker (AE) bei der cdemy Code Academy genutzt werden."
slug: "warum_dart"
---

<p class="intro">
    Für uns war schnell klar, dass wir mit HTML, CSS und Javascript in die 
    Programmierung einsteigen wollen, da diese Technologien einfach zu 
    grundlegend sind, um sie auszulassen. Außerdem kann man sie schnell 
    erlernen und erste brauchbare Ergebnisse erzielen. Viel schwieriger war 
    die Frage, wie man danach weiter verfahren sollte.
</p>

===

![](dart.jpg)

## Grundüberlegung

Unsere feste Überzeugung ist, dass der größte Fehler der meisten Umschulungen für Fachinformatiker:innen für Anwendungs&shy;entwicklung ist, dass die Umschüler:innen in viele verschiedene Programmiersprachen reinschnuppern - und hier jeweils die Basics erlernen. Zu den Basics gehören:

- Variablen definieren
- Funktionsdefinitionen
- Schleifen
- Fallunterscheidung

In jeder der Sprachen sieht die Syntax hierfür jeweils leicht anders aus, aber wer eine Fassung versteht, versteht sie alle. Der Lernerfolg ist also relativ gering, man lernt lediglich, das einem schon bekannte auf neue Weise zu schreiben. Zu fortgeschrittenen Konzepten wie asynchroner Programmierung, Interfaces, Entwurfsmustern, Clean Code, Streams, bitwise Operators, grafische Benutzeroberflächen kommt man dann aber nie oder erst sehr spät, weil man in jeder Sprache lediglich auf einem Basisniveau unterwegs ist. Unser Ansatz sollte bewusst anders sein. Uns war von vornherein klar: Wie wollen, dass unsere angehenden Anwendungsentwickler:innen nach Javascript genau eine [objektorientierte](https://de.wikipedia.org/wiki/Objektorientierung) und [stark typisierte](https://de.wikipedia.org/wiki/Starke_Typisierung) Programmiersprache lernen sollten, um optimalen Kontrast zu Javascript zu bieten. Die Frage war also nur, welche Sprache das werden sollte.

## Die Kandidaten

Für unsere <a href="/academy/umschulung_anwendungsentwicklung">Fachinformatiker:in-Umschulung für Anwendungs&shy;entwicklung in Kassel</a> haben wir daher einige Programmiersprachen miteinander verglichen. Die Ergebnisse lassen sich wie folgt zusammenfassen.

<div class="procontra">
    <div class="entry">
        <div class="head">
            <div class="icon">
                <img src="academy_warum_dart/icon_typescript.png"/>
            </div>
            <div class="name">
                Typescript
            </div>
        </div>
        <div class="body">
            <div class="pro">
                <ul>
                    <li>Setzt auf Javascript auf, was die verbreitetste Sprache ist</li>
                    <li>Knüpft an die Kenntnisse aus HTML & Javascript an</li>
                    <li>Gute Einsatzmöglichkeiten</li>
                </ul>
            </div>
            <div class="contra">
                <ul>
                    <li>Sprache ist oftmals unsauber zu lesen</li>
                    <li>Shortcut zu Javascript jederzeit möglich</li>
                    <li>Wieder HTML</li>
                    <li>Teilnehmer machen nicht die Erfahrung, in einer neuen Sprache von Beginn an anzufangen</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="entry">
        <div class="head">
            <div class="icon">
                <img src="academy_warum_dart/icon_java.png"/>
            </div>
            <div class="name">
                Java
            </div>
        </div>
        <div class="body">
            <div class="pro">
                <ul>
                    <li>Sehr verbreitet</li>
                    <li>Breite Einsatzmöglichkeiten</li>
                    <li>Guter Jobmarkt</li>
                    <li>Teilnehmer können für ihre Android-Handys programmieren</li>
                </ul>
            </div>
            <div class="contra">
                <ul>
                    <li>Tendenziell rückläufige Bedeutung</li>
                    <li>Wenige Befehle (statt Methoden), komplexer Einstieg</li>
                    <li>Wechsel zu Kotlin naheliegend für Android-Programme</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="entry">
        <div class="head">
            <div class="icon">
                <img src="academy_warum_dart/icon_c-sharp.png"/>
            </div>
            <div class="name">
                C#
            </div>
        </div>
        <div class="body">
            <div class="pro">
                <ul>
                    <li>Sehr verbreitet</li>
                    <li>Breite Einsatzmöglichkeiten</li>
                    <li>Guter Jobmarkt</li>
                    <li>Multiplattform mit Xamarin</li>
                    <li>Teilnehmer können für ihre Handys programmieren</li>
                </ul>
            </div>
            <div class="contra">
                <ul>
                    <li>Tendenziell rückläufige Bedeutung</li>
                    <li>Xamarin ist komplex</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="entry">
        <div class="head">
            <div class="icon">
                <img src="academy_warum_dart/icon_kotlin.png"/>
            </div>
            <div class="name">
                Kotlin
            </div>
        </div>
        <div class="body">
            <div class="pro">
                <ul>
                    <li>Sehr schöne Sprache</li>
                    <li>Teilnehmer können für ihre Android-Handys programmieren</li>
                </ul>
            </div>
            <div class="contra">
                <ul>
                    <li>Einsatzmöglichkeiten gegenwärtig relativ beschränkt auf Android-Geräte</li>
                </ul>
            </div>
        </div>
    </div>
</div>

Im Endeffekt hätten wir uns wahrscheinlich für Java entschieden, auch wenn das keine freudige Entscheidung gewesen wäre, aber dann lief uns Dart als Option über den Weg.

## Was ist Dart?

Dart ist eine stark typisierte, objektorientierte Programmiersprache, die von Google entwickelt wurde. Syntaktisch übernimmt die Sprache viele Anregungen aus den Standard-Sprachen Java, C# und Javascript. Prinzipiell ist die Sprache nicht auf einen besonderen Einsatzzweck festgelegt, es sind also prinzipiell alle Anwendungen denkbar, wenn entsprechende Bibliotheken vorhanden sind. Das war aber auch lange Zeit ein wenig das Problem: Die Sprache war ursprünglich als Ersatz auf die Vorherrschaft von Javascript gedacht, dümpelte aber jahrelang vor sich hin und war weitgehend vergessen. *Und dann kam Flutter!*

## Was ist Flutter?

Flutter ist ein Framework zur Erstellung von Apps, das sich durch Plattformunabhängigkeit auszeichnet. Das heißt, dass eine Flutter-App, einmal programmiert, lauffähig ist auf

- Andoid
- iOS
- Web (als Web-App)
- Windows
- MacOS

Nicht nur das, sondern die App wird hierfür jeweils kompiliert, läuft auf diesen Systemen also als native Anwendung. Hinzu kommt, dass das Framework zur Erstellung von grafischen Benutzeroberflächen sehr gut zu erlernen ist. Überhaupt etwas auf den Bildschirm zu bekommen, ist etwas schwieriger als es in HTML ist. Etwas Schönes auf den Bildschirm zu bekommen, ist hingegen gar einfacher.

Flutter nutzt als zugrundeliegende Programmiersprache Dart, und aufgrund dieser Kombination ist Dart inzwischen auch eine der am schnellsten an Verbreitung zulegenden Programmiersprachen.

## Was können Teilnehmer also nun erwarten?

Neben dem HTML, CSS & Javascript Teil der Umschulung werden wir in die Programmierung mit Dart & Flutter einsteigen. Diese Kombination gewährleistet, dass die Teilnehmer schnell in der Lage sind, Anwendungen zu programmieren, die dann (fast) ohne Code-Anpassungen auf allen genannten Plattformen lauffähig sind.

Dabei nutzen sie mit Flutter ein Framework, mit dem sie einfach in der Lage sind, grafische Benutzeroberflächen zu erstellen, Sounds abzuspielen und auf Gerätefunktionen wie GPS-Sensoren etc. zuzugreifen. Sie können darüber hinaus auch die Backend-Funktionalitäten für ihre Apps in Dart programmieren, diesen dann zum Beispiel in der Cloud platzieren und so schnell und produktiv arbeiten.

Darüber ist die Sprache konzeptionell und syntaktisch so nah zu C# und Java, dass ein späterer Umstieg erleichtert wird. Zu allem Überfluss wächst die Sprache und die Bedeutung des Frameworks derzeit so stark, dass auch die Arbeitsmarktlage für Absolventen mit Kenntnissen dieser Sprache in einigen Jahren ganz gut aussehen könnte.

## Dart reicht also?

Nein. Und das ist auch nicht gewollt von uns. Die angehenden Fachinformatiker:innen für Anwendungs&shy;entwicklung sollen Kenntnisse in mehreren Sprachen aufweisen und vor allem sich die Fähigkeit zugelegt haben, auch eine neue Sprache / Framework zu erlernen. Dieses ist für die Umschüler:innen und generell für jede:n Lerninteressierte:n aber einfacher, wenn sie in einer Sprache bereits sehr fortgeschrittene Kenntnisse haben. Dann kann man sich beim Erlernen von anderen Sprachen auf die wirklichen konzeptionellen Unterschiede konzentrieren und eine leicht veränderte Syntax ist nur eine Sache der Gewöhnung.

[UmschulungAd]