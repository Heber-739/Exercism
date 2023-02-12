/* 
Instrucciones Bob es un adolescente indiferente. En la conversación, sus respuestas son muy limitadas.
Bob responde 'Claro'. si le haces una pregunta, como "¿Cómo estás?". Él responde '¡Vaya, relájate!' si le
GRITAS (en mayúsculas). Él responde '¡Cálmate, sé lo que estoy haciendo!' si le gritas una pregunta. Él
dice 'Bien. ¡Sé así! si te diriges a él sin decir nada. Él responde 'Lo que sea'. a cualquier otra cosa
El compañero de conversación de Bob es un purista en lo que respecta a la comunicación escrita y siempre
sigue las reglas normales con respecto a la puntuación de las oraciones en inglés.
 */

export function hey(message: string): string {
  if (message.length < 1) {
    return "Fine. Be that way!";
  }
  let question: boolean = false;
  let wordsCapitals: number = 0;
  let len = message.length;
  if (message[len] === "?") {
    question = true;
    console.log(question);
  }
  for (let i = 0; i < message.length; i++) {
    if (message[i].match(/[A-Z]/)?.length == 1) {
      wordsCapitals++;
    }
  }
  if (question && wordsCapitals < 2) {
    return "Sure.";
  } else if (!question && wordsCapitals >= 2) {
    return "Whoa, chill out!";
  } else if (question && wordsCapitals >= 2) {
    return "Calm down, I know what I'm doing!";
  }
  return "Whatever.";
}
hey("ajshdkhlsks?");
