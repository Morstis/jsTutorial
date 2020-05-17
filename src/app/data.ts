export default [
  {
    titel: 'Vorwort von Herrn Brand ',
    text: `<p> Wie geht es weiter? </p>
    <p> Auf diese Frage haben immerhin 11 von 16 Personen geantwortet. Da stellt sich natürlich die Frage: interessiert die Anderen das Thema oder der Informatik-WPU nicht? </p>
    <p> Egal, von den 11 Leuten waren 9 der Meinung, dass sie mit Javascript gerne weiterarbeiten möchten und das machen wir jetzt.</p>
    <p> Lucas Wiese hat sich bereit erklärt, ein Tutorial zu schreiben, mit dem alle die, die zu Hause bleiben müssen, lernen können. Herzlichen Dank an Lucas! </p>
    <p> Alle die, die anwesend sind, werden noch einmal in die Digitalelektronik einsteigen. </p>
    <p> Das bedeutet für jeden von euch: eine Woche Javascript, eine Woche Digitalelektronik, und das im Wechsel </p>
    <p> Und hier beginnen wir jetzt mit JavaScript. </p>`,
    code: () => {},
  },
  {
    titel: 'Stackblitz',
    text: `
    <p>Nach Absprache mit Herrn Brand haben wir uns entschlossen, das Tool <a href="https://stackblitz.com/" target="_blank">Stackblitz</a> zu verwenden.</p>
    <p>Hier der Link für ein einfaches JavaScript Projekt. <a href="https://stackblitz.com/fork/js" target="_blank">JavaScript</a></p>
    <p>Wenn ihr auf den Link klickt, sollte sich ein neuer Tab öffnen und ihr landet in einem online Code Editor.</p>
    <p>Hier befindet ihr euch automatisch in der JavaScript Datei.</p>
    <p>Löscht zuerst den gesamten Inhalt in dieser <span class="green">(1)</span>.</p>
    <p><span class="red">2</span> zeigt den Output eures Codes an.</p>
    <p>Und bei <span class="orange">3</span> müsst ihr drauf klicken, um euch die Console anzeigen zu lassen.</p>
    <p>Fahrt jetzt mit dem nächtsten Tutrial fort.</p>
    </br>
    </br>
    <p>Sollte es Probleme mit Stackblitz geben, wendet euch an Herrn Brand oder mich.</p>
 `,

    code: () => {},
    foto: 'assets/Bildschirmfoto vom 2020-05-17 12-20-26.png',
    foto2: undefined,
  },
  {
    titel: 'Kommentare',
    text: `<p>Kommentare werden mit <span class="blue">//</span> angeben.</p>
    <p>Das was hinter den <span class="blue">//</span> wird nicht ausgeführt und kann somit vom Programmierer benutzt werden, um sich Annmerkungen im Code zu machen.</p>
    <p><span class="blue">//</span> gilt nur für eine Zeile. Will man über mehrer Zeilen Kommentieren, </br>wird <span class="blue">/* Kommentar */</span> verwendet.</p>
    `,
    code: () => {
      // Das ist ein Kommentar
      /*
      Das ist ein Kommentar
      über mehrere Zeilen
      */
    },
  },
  {
    titel: 'Die Console',
    text: `
    <p>Die Console ist die grundlegende Ausgabe eines Computers.</p>
    <p>Auf dieser Website wird de Console unten rechts ausgegben.</p>
    <p>Bei stackblitz wird sie angezeigt wenn ihr auf den Pfeil unten rechts klickt (s. vorheriges Tutorial).</p>


    <div class="a">
    <ol>
    <li>Versuche in Stackblitz "Hallo Welt" in der Console auszugeben.</li>
    <li>Welchen Unterschied macht es, wenn ich Hallo Welt in ", in ' oder in \` setze? </li>
    <ol>
    </div>
    `,

    code: () => {
      console.log('Hallo Welt');
    },
  },
  {
    titel: 'Variablen',
    text: `
    <p>Variablen sind (ähnlich, wie in Mathe) Platzhalter für Werte.</p>
    <p>Wenn sie später im Code erneut aufgerufen werden, haben sie den zuvor gespeicherten Wert.</p>
    <p>Um eine Variable anzulegen wird <span class="blue">var</span> gefolgt von dem Namen der Variable benötigt.</p>
    <p>Die so angelete Variable hat noch keinen Wert. das heißt, wenn man versucht sie zu loggen <span class="orange">(s. Z.6)</span>, wird 'undefined' (Undefiniert) angezeigt.</p>
    <p>Um der Variable anzulegt, die einen Wert hat, wird <span class="blue">var</span> gefolgt von dem Namen der Variable, gefolgt von <span class="blue">=</span>, gefolgt von dem Wert verwendet <span class="orange">(s. Z. 3/4)</span>.</p>
    <p>Um den Wert einer angelegten Variable im nachhinein zu ändern, wird das <span class="blue">var</span> weggelassen und nur der Name der Variable gefolgt von <span class="blue">=</span>, gefolgt von dem Wert verwendet <span class="orange">(s. Z. 10)</span>.</p>
  

    `,

    code: () => {
      // Variable Definition
      var eineVariable;
      var einWort = 'test';
      var eineZahl = 1;
      // Ausgabe der Variablen
      console.log(eineVariable);
      console.log(einWort);
      console.log(eineZahl);

      // Anpassung einer Variable
      eineVariable = 11;
      console.log(eineVariable);
    },
  },
  {
    titel: 'Aufgaben zu Variablen',
    text: `<p> Überprüfe die korrekte Funktionsweise eines JavaScript-Programms, indem du geeigneten Code schreibst. </p>

    <p> Gib den Variablen Werte: </p>
    <ul>
    <li> X = 1 </li>
    <li> x = 5 </li>
    <li> y = 8 </li>
    <li> z = '2' (Die Hochkommazeichen sind wichtig)</li>
    </ul>
    <p> Gib auf der Console folgendes aus:</p>
    <ul>
    <li> den Wert für X </li>
    <li> den Wert für x+y </li>
    <li> den Wert für x * y </li>
    <li> den Wert für y + z </li>
    <li> den Wert für y - z </li>
    <li> den Wert für y * z </li>
    </ul>
    <p> Notiere Ausgaben, die deiner Erwartung nicht entsprechen. </p>
    <p> Notiere außerdem was die Console ausgibt, wenn du <span class="blue">console.log("X");</span> schreibst.</p>
    `,
    code: () => {},
  },

  // {
  //   titel: 'Local Storage',
  //   text: '',
  //   code: () => {
  //     localStorage.setItem('test', 'Hier steht etwas');
  //     let x = localStorage.getItem('test');
  //     console.log(x);
  //   },
  // },
];
