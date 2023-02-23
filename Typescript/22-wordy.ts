let operations: { [key: string]: string } = {
  plus: "+",
  minus: "-",
  multiplied: "*",
  divided: "/",
  raised: "**",
};

export const answer = (input: string): any => {
  let text: string[] = input.replace("?", "").split(" ");
  let ev: string = "";
  console.log(text);

  let searchNumber = (index: number) => {
    for (let i = index; i < text.length; i++) {
      if (text[i].match(/[\d]+/)) {
        ev = eval(ev.concat("(", text[i], ")")).toString();
        text[i + 1] ? searchOperator(i++) : null;
      }
    }
  };

  let searchOperator = (index: number) => {
    for (let i = index; i < text.length; i++) {
      const e = text[i];

      if (operations[e]) {
        ev = ev.concat(operations[e]);

        if (e === "raised") {
          for (let ind = i; ind < text.length; ind++) {
            const el = text[ind];
            if (el.match(/[\d]+/)) {
              ev = ev.concat(el.match(/[\d]+/)![0]);
              break;
            }
          }
          throw new Error("Unknown operation");
        }

        searchNumber(i);
      }
    }
    throw new Error("Unknown operation");
  };
  searchNumber(0);

  console.log(ev);
  return parseInt(ev) ? parseInt(ev) : new Error("Unknown operation");
};
console.log(answer("What is 5 plus 2?"));
console.log(eval("-1"));
/* 
  
  Instrucciones
  Analice y evalúe problemas matemáticos sencillos que devuelvan la respuesta como un número entero.
  
  Iteración 0 — Números
  Los problemas sin operaciones simplemente se evalúan al número dado.
  
  ¿Qué es 5?
  
  Evalúa a 5.
  
  Iteración 1 — Suma
  Suma dos números juntos.
  
  ¿Cuánto es 5 más 13?
  Evalúa a 18.
  
  Manejar números grandes y números negativos.
  
  Iteración 2 — Resta, multiplicación y división
  Ahora, realiza las otras tres operaciones.
  
  ¿Cuánto es 7 menos 5?
  2
  
  ¿Cuánto es 6 multiplicado por 4?
  24
  
  ¿Cuánto es 25 dividido por 5?
  5
  
  Iteración 3: operaciones múltiples
  Manejar un conjunto de operaciones, en secuencia.
  
  Dado que estos son problemas verbales, evalúe la expresión de izquierda a derecha, ignorando el orden típico de las operaciones.
  
  ¿Cuánto es 5 más 13 más 6?
  24
  
  ¿Cuánto es 3 más 2 multiplicado por 3?
  15 (es decir, no 9)
  
  Iteración 4 — Errores
  El analizador debe rechazar:
  
  Operaciones no admitidas ("¿Cuánto es 52 al cubo?")
  Preguntas no matemáticas ("¿Quién es el presidente de los Estados Unidos?")
  Problemas verbales con sintaxis no válida ("¿Cuánto es 1 más 2?")
  Bonus — Exponentials
  Si lo desea, maneje exponenciales.
  
  ¿Cuánto es 2 elevado a la quinta potencia?
  
  32
  */
