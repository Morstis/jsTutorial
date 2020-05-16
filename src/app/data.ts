export default [
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
