let operations: { [key: string]: string } = {
  plus: "+",
  minus: "-",
  multiplied: "*",
  divided: "/",
  raised: "**",
};

export const answer = (input: string): number | never => {
  if (
    !input.includes("What is") ||
    input.includes("square") ||
    input.includes("cube")
  ) {
    throw new Error("Unknown operation");
  }
  if (!input.match(/[\d]+/)) {
    throw new Error("Syntax error");
  }
  let text: string[] = input.replace("?", "").split(" ");

  let op: boolean = false;
  console.log(text);

  let ev: string = "";
  for (let i = 0; i < text.length; i++) {
    let e = text[i];

    if (e.match(/[\d]+/)) {
      try {
        ev = `(${eval(ev.concat("(", e, ")"))})`;
        op = false;
      } catch (error) {
        throw new Error("Syntax error");
      }
    }

    if (operations[e]) {
      ev = ev.concat(operations[e]);
      op = true;
      if (e === "raised") {
        for (let ind = i; ind < text.length; ind++) {
          const el = text[ind];
          if (el.match(/[\d]+/)) {
            ev = ev.concat(el.match(/[\d]+/)![0]);
            break;
          }
        }
        break;
      }
    }
  }
  if (op) {
    throw new Error("Syntax error");
  }
  return eval(ev);
};
try {
  eval("1*");
} catch (error) {
  throw new Error("Syntax error");
}
console.log(answer("What is??"));
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
