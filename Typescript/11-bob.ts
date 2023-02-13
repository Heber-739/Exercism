/* 
Instrucciones Bob es un adolescente indiferente. En la conversación, sus respuestas son muy limitadas.
Bob responde 'Claro'. si le haces una pregunta, como "¿Cómo estás?". Él responde '¡Vaya, relájate!' si le
GRITAS (en mayúsculas). Él responde '¡Cálmate, sé lo que estoy haciendo!' si le gritas una pregunta. Él
dice 'Bien. ¡Sé así! si te diriges a él sin decir nada. Él responde 'Lo que sea'. a cualquier otra cosa
El compañero de conversación de Bob es un purista en lo que respecta a la comunicación escrita y siempre
sigue las reglas normales con respecto a la puntuación de las oraciones en inglés.
 */

export function hey(mess: string): string {
  let message: string = mess.trim();
  if (message.match(/\S/)) {
    if (message.match(/[a-z0-9]+[?]$/) || message.match(/[OK][?]$/)) {
      return "Sure.";
    }
    if (message.match(/[^a-z]+[a-zA-Z]+[?]$/g)) {
      return "Calm down, I know what I'm doing!";
    }
    if (message.match(/[a-zA-Z]/g)) {
      if (message.match(/[A-Z]+[!]/g) || message == message.toUpperCase()) {
        return "Whoa, chill out!";
      }
    }
    return "Whatever.";
  }
  return "Fine. Be that way!";
}
hey("ajshdkhlsks?");
