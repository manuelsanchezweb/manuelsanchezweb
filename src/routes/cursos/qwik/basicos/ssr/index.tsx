import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import styles from "highlight.js/styles/mono-blue.css?inline";
import CustomLink from "~/components/custom-link";
import Pagination from "~/components/pagination";
import Video from "~/components/video";

export default component$(() => {
  useStylesScoped$(styles);

  useVisibleTask$(() => {
    hljs.registerLanguage("typescript", typescript);
    hljs.highlightAll();
  });

  return (
    <div>
      <h1>Qwik SSR</h1>
      <CustomLink
        url="https://github.com/manuelsanchezweb/qwik-curso-principiantes/tree/lection/ssr"
        text="Enlace al repositorio"
        icon="github"
      />
      <p>
        Este es uno de los conceptos fundamentales de Qwik. Mientras que muchos
        frameworks tienen herramientas para acceder a un modo SSR, Qwik ya lo
        trae por defecto. Según lo entiendo, el HTML ya viene dado desde el
        servidor. Esto lo podemos ver a través de la pestaña de{" "}
        <code>Response</code>. Por eso lo de tener tanta velocidad y
        performance.
      </p>
      <p>
        Observemos el siguiente ejemplo de un clásico <code>button</code>
      </p>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
   // Path: src/routes/index.tsx
   import { component$ } from "@builder.io/qwik";
   
   export default component$(() => {
     console.log("SERVIDOR: Cuando me monto, aparezco 🐴");
     return (
       <div>
         <button onClick$={() => console.log("CLIENTE: me cargo on demand 👨‍🍳")}>
           Hazme click
         </button>
       </div>
     );
   });
          `}
        </code>
      </pre>
      <p>
        Podemos ver muchas cosas novedosas a través de este ejemplo, como por
        ejemplo el tema de ese <code>onClick$</code>. Eso es un tema para la
        lección siguiente, la del Lazy Loading, así que te toca esperar un poco
        más. Ves que hay dos console.log, uno antes del <code>return</code> y
        otro en el evento del <code>button</code>. Observa dónde recibiremos
        cada uno de los logs.
      </p>
      <Video src="../../../../videos/ssr-qwik.mov" />

      <p>
        El componente viene disponible ya desde el servidor (por ello ese primer
        console.log sucede ahí y lo recibimos en la terminal). Esta es una de
        las magias de Qwik, y el encargado de hacer esto es el <code>$</code>{" "}
        que verás por todos lados en una aplicación de Qwik, como por ejemplo en{" "}
        <code>component$</code>.
      </p>
      <p>
        Si te has fijado, en el último vídeo vemos cómo al hacer un click en el
        botón se añade un nuevo script a la página. Hablemos más de ello en la
        siguiente lección.
      </p>

      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/props/"
        buttonPrevLabel="Volver a ver Props"
        buttonNextUrl="/cursos/qwik/basicos/lazy-loading/"
        buttonNextLabel="Lazy Loading"
      />
    </div>
  );
});
