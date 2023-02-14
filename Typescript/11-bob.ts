/* 
Instrucciones Bob es un adolescente indiferente. En la conversación, sus respuestas son muy limitadas.
Bob responde 'Claro'. si le haces una pregunta, como "¿Cómo estás?". Él responde '¡Vaya, relájate!' si le
GRITAS (en mayúsculas). Él responde '¡Cálmate, sé lo que estoy haciendo!' si le gritas una pregunta. Él
dice 'Bien. ¡Sé así! si te diriges a él sin decir nada. Él responde 'Lo que sea'. a cualquier otra cosa
El compañero de conversación de Bob es un purista en lo que respecta a la comunicación escrita y siempre
sigue las reglas normales con respecto a la puntuación de las oraciones en inglés.
 */

export function hey(mess: string): string {
  let options: { [key: number]: string } = {
    1: "Sure.",
    3: "Calm down, I know what I'm doing!",
    2: "Whoa, chill out!",
    0: "Whatever.",
  };
  let message: string = mess.trim();
  if (message.match(/\S/)) {
    const question: number = mess[mess.length - 1] == "?" ? 1 : 0;
    const yell: number =
      /[A-Z]/.test(mess) && mess == mess.toUpperCase() ? 2 : 0;
    return options[question + yell];
  }
  return "Fine. Be that way!";
}
console.log(hey("SDFSDFSDF?"));
