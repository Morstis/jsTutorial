export default [
  {
    titel: 'Stackblitz',
    text: `
    <p>Nach Absprache mit Herr Brand haben wir uns entschlosssen, das Tool <a href="https://stackblitz.com/" target="_blank">Stackblitz</a> zu verwenden.</p>
    <p>Hier der Link für ein einfaches JavaScript Projekt. <a href="https://stackblitz.com/fork/js" target="_blank">JavaScript</a></p>
    <p>Wenn ihr auf den Link klickt, sollte sich ein neuer Tab öffnen und ihr landet in einem online Code Editor.</p>
    <p>Hier befindet ihr euch automatisch in der JavaScript Datei.</p>
    <p>Löscht zuerst den gesamten Inhalt in dieser <span class="green">(1)</span>.</p>
    <p><span class="red">2</span> zeigt den Output eures Codes an.</p>
    <p>Und bei <span class="orange">3</span> müsst ihr drauf klicken, um euch die Console anzeigen zu lassen.</p>
    <p>Fahrt jetzt mit dem nächtsten Tutrial fort.</p>
    </br>
    </br>
    <p>Sollte es Probleme mit Stackblitz geben, wendet euch an Herr Brand oder mich.</p>
 `,

    code: () => {},
    foto: 'assets/Bildschirmfoto vom 2020-05-17 12-20-26.png',
    foto2: undefined,
  },

  {
    titel: 'Die Console',
    text: `
    <p>Die Console ist die grundlegende Ausgabe von dem Browser.</p>
    <p>Auf dieser Website wird de console unten rechts ausgegben.</p>
    <p>Wenn ihr auf anderen Websites (oder euren eigenen) seit, könnt ihr mit f12 in die Entwicklertools gehen.</p>
    <p>Wenn ihr oben in der Leist auf Console klickt, solltet ihr den Consolen Output (also das was hier unten rechts angezeigt wird), sehen.</p>
    <p>Bei stackblitz ist wird sie angezeigt wenn ihr auf den Pfeil klickt (s. vorheriges Tutorial).</p>

    <div class="a"><p>Versuche in Stackblitz "Hallo Welt" in der Console auszugeben.</p>
    </div>
    `,

    code: () => {
      console.log(`Hallo Welt`);
    },
  },
  {
    titel: 'Variablen',
    text: `
    <p>Variablen sind (ähnlich, wie in Mathe) Platzhalter für Werte.</p>
    <p>Wenn sie später im Code erneut aufgerufen werden, haben sie den zuvor gespeicherten Wert.</p>
    <p>Um eine Variable anzulegen wird 'let' gefolgt von dem Namen der Variable benötigt.</p>
    <p>Die so angelete Variable hat noch keinen Wert. das heißt, wenn man versuch sie zu loggen (s. Z.4), wird 'undefined' (Undefiniert) angezeigt.</p>
    </br>
    `,

    code: () => {
      let eineVariable;
      const einWort = 'test';
      const eineZahl = 1;

      console.log(eineVariable);
      console.log(einWort);
      console.log(eineZahl);
    },
  },
  {
    titel: 'Viel Code Test',
    text: `
    <p>Ein Test, um zu gucken, ob viel Code gut dargestellt wird.</p>
    <p>Dazu habe ich eine mögliche Lösung von
     <a href='https://www.coderbyte.com/results/mors66:Find%20Intersection:TypeScript'>Coderbyte</a>
      genommen</p>
    `,
    code: () => {
      function FindIntersection(input) {
        const [firstList, secondList] = input.map((s) => s.split(', '));

        const resultMap = {};
        const result = [];

        for (const number of firstList) {
          resultMap[number] = true;
        }

        for (const number of secondList) {
          if (resultMap[number]) {
            result.push(number);
          }
        }

        return result.length ? result.join(',') : false;
      }
      console.log(FindIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']));
    },
  },
];
