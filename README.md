# Christophe Damas – Swiss Paralympic Ski Team

Eine OnePage-Website für den Schweizer Para-Ski-Athleten **Christophe Damas** aus Herisau. Christophe fährt für das Swiss Paralympic Ski Team in der Kategorie LW12-1 (Sitzkategorie) und debütierte an den Paralympischen Spielen 2026 in Milano Cortina. Die Website dient als persönliche Athleten-Präsenz und Sponsoring-Plattform – mit dem Ziel, bis 2030 auf dem Paralympics-Podest zu stehen.

## Inhalt der Website

Die Seite ist als moderner OnePager gestaltet und enthält folgende Sections:

- **Hero** – Einstieg mit Titelbild und CTA
- **Video/Athletenprofil** – Steckbrief mit Disziplinen und Kategorie
- **Über Christophe** – Persönlichkeit, Sportart, Stats
- **Erfolge** – Meilensteine der Karriere im Grid-Layout
- **Ziele** – Roadmap 2026–2030
- **Sponsoren** – Sponsoring-Pakete mit CTA
- **Kontakt/Footer** – Direkter Kontakt per Mail und Instagram

## Technologie

- HTML5 (semantisch: `header`, `main`, `section`, `footer`, `nav`)
- CSS3 (Custom Properties, Grid, Flexbox, Animationen, Dark Mode via `prefers-color-scheme`)
- JavaScript (GSAP ScrollTrigger, Mobile-Menu, Video-Facade, Theme-Toggle)
- Keine CSS-Frameworks oder externe Libraries ausser GSAP

## CSS-Namenskonvention: Client First

Die CSS-Klassen folgen dem **Client First**-System von Finsweet. Das Prinzip: Klassenname = `block_element` oder `block_element-modifier`. Zum Beispiel `.nav_wrapper`, `.hero_title`, `.about_card-gradient`. So ist auf einen Blick klar, zu welchem Block ein Element gehört, ohne tief in den HTML-Code schauen zu müssen. Modifier wie `is-open`, `is-dark` oder `is-first` beschreiben Zustände und Varianten. Das System macht den Code lesbarer und verhindert Namenskonflikte – besonders hilfreich wenn das Projekt wächst.

---

## Reflexion

### 1. Was hat beim Projekt gut funktioniert?

Das Layout mit CSS Grid für die Milestones-Section hat sehr gut funktioniert — die asymmetrische Anordnung (grosses Item links, zwei rechts) liess sich sauber umsetzen. Auch der Dark Mode war einfacher als erwartet: Mit CSS Custom Properties reicht ein einziger `[data-theme="dark"]`-Block, um die gesamte Farbpalette zu tauschen.

### 2. Wo bin ich an Grenzen gestossen?

Besonders herausfordernd war die Einstiegsanimation mit GSAP. Ursprünglich wollte ich eine Flip-Animation integrieren, bei der Elemente aus dem Preloader nahtlos in ihre finale Position auf der Seite übergehen. Trotz mehrerer Versuche hat die Animation nicht zuverlässig funktioniert und hat unverhältnismässig viel Zeit gekostet — weshalb ich sie schlussendlich weggelassen habe. Es war ein gutes Beispiel dafür, wann man einen Ansatz aufgeben und pragmatisch entscheiden muss.

### 3. Was habe ich dabei gelernt, das ich nicht erwartet hätte?

Wie elegant sich eine Navigation mit GSAP animieren lässt. Ich hatte erwartet, dass ein smooth erscheinender Nav-Hintergrund beim Scrollen aufwändig zu implementieren ist — mit Event-Listenern, manuellen Scroll-Positionen und viel Logik. Tatsächlich hat GSAP ScrollTrigger das in wenigen Zeilen gelöst, und das Resultat sieht professioneller aus als gedacht. Es hat mir gezeigt, dass gute Animationen nicht zwingend komplex sein müssen.
