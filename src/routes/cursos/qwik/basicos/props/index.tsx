import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import styles from "highlight.js/styles/mono-blue.css?inline";
import CustomLink from "~/components/custom-link";
import Pagination from "~/components/pagination";

export default component$(() => {
  useStylesScoped$(styles);

  useVisibleTask$(() => {
    hljs.registerLanguage("typescript", typescript);
    hljs.highlightAll();
  });

  return (
    <div>
      <h1>Props</h1>
      <CustomLink
        url="https://github.com/manuelsanchezweb/qwik-curso-principiantes/tree/lection/props"
        text="Enlace al repositorio"
        icon="github"
      />

      <p>
        Denominamos props a aquellos parámetros que le podemos pasar a los
        componentes. En la lección anterior hemos visto como hacer un
        componente, importarlo y llamarlo escribiendo tan solo{" "}
        <code>&lt;Headline /&gt;</code>. Aunque esto nos sirva para algunos
        componentes (podríamos guardar los <code>svg</code> de esta forma),{" "}
        <strong>
          en la mayoría de las ocasiones querremos pasar algún que otro
          argumento.
        </strong>
      </p>
      <p>
        Por ejemplo, podríamos hacer un <code>Headline</code> algo más dinámico
        de la siguiente forma:
      </p>

      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: src/components/headline/index.tsx
    import { component$ } from "@builder.io/qwik";

    export default component$(({ text }: { text: string }) => {
      return <h1>{text}</h1>;
    });
          `}
        </code>
      </pre>
      <p>
        Lo importamos donde queramos utilizarlo pasándole ahora el texto que
        queramos pasarle.
      </p>

      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
   // Path: src/routes/index.tsx
   import { component$ } from "@builder.io/qwik";
   import type { DocumentHead } from "@builder.io/qwik-city";
   
   export default component$(() => {
     return (
       <div>
         <Headline text="Este headline me representa" />
       </div>
     );
   });
  
          `}
        </code>
      </pre>
      <p>
        Si no estás familiarizado con TypeScript, te recomiendo que le eches un
        vistazo a cómo funciona el tema de los <code>types</code> y/o las{" "}
        <code>interfaces</code> ya que el ejemplo de arriba es muy sencillo,
        pero te alegrará ganar en legibilidad usando esas herramientas de
        TypeScript. Por ahora, simplemente quiero explicarte que{" "}
        <strong>
          podemos hacer algo más flexible nuestro componente añadiendo textos
          por defecto (el parámetro que pasemos automáticamente sobreescribe el
          default) y hacer los parámetros opcionales.
        </strong>
      </p>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: src/components/headline/index.tsx
    import { component$ } from "@builder.io/qwik";

    export default component$(({ text = "Texto por defecto" }: { text?: string }) => {
      return <h1>{text}</h1>;
    });
          `}
        </code>
      </pre>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
   // Path: src/routes/index.tsx
   import { component$ } from "@builder.io/qwik";
   import type { DocumentHead } from "@builder.io/qwik-city";
   
   export default component$(() => {
     return (
       <div>
         <Headline /> // Este mostrará el texto por defecto
         <Headline text="Este headline me representa" /> // Sobreescribe el default text
       </div>
     );
   });
  
          `}
        </code>
      </pre>
      <p>
        En la siguiente lección vamos a cubrir uno de los temas fundamentales
        que destacan a Qwik frente a otros frameworks: <strong>el SSR</strong>.
      </p>

      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/componentes-qwik/"
        buttonPrevLabel="Volver a ver Componentes"
        buttonNextUrl="/cursos/qwik/basicos/ssr/"
        buttonNextLabel="Server Side Rendering"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Componentes de Qwik",
};
