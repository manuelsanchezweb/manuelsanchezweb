import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/mono-blue.css";
import Pagination from "~/components/pagination";

export default component$(() => {
  useVisibleTask$(() => {
    hljs.registerLanguage("typescript", typescript);
    hljs.highlightAll();
  });

  return (
    <div>
      <h1>Props</h1>
      <p>
        Lo primero que vamos a hacer es eliminar las rutas y los archivos de
        Qwik que venían con la plantilla. Vamos a dejar casi vacío el{" "}
        <code>index.tsx</code> que está dentro de <code>routes</code> y el
        layout.tsx que tiene al lado.{" "}
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
         <h1>Components</h1>
       </div>
     );
   });
   
   export const head: DocumentHead = {
     title: "Welcome to Qwik",
     meta: [
       {
         name: "description",
         content: "Qwik site description",
       },
     ],
   };
          `}
        </code>
      </pre>
      <p>
        Esta última parte, la del <code>DocumentHead</code>, también la podemos
        eliminar, ya que ahora mismo el foco no está en aprender a hacer SEO con
        Qwik, pero para que lo sepas, es aquí donde puedes encargarte de las
        metatags.
      </p>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
   // Path: src/routes/layout.tsx
   import { component$, Slot } from "@builder.io/qwik";

   export default component$(() => {
     return <Slot />;
   });
   
          `}
        </code>
      </pre>
      <p>
        A continuación, dentro de la carpeta <code>components</code> en{" "}
        <code>src</code> vamos a crear una nueva carpeta llamada{" "}
        <code>header</code>. Crea dentro de esa carpeta un archivo llamado{" "}
        <code>index.tsx</code>. Ahí dentro podemos crear nuestro primer
        componente. Si estás usando VSCode y tienes la extensión que recomendé
        al principio, entonces haciendo <code>q-</code> debería salirte la
        sugerencia del snippet de código.
      </p>

      <Pagination
        buttonPrevUrl="/basicos/componentes-qwik/"
        buttonPrevLabel="Volver a ver Componentes"
        buttonNextUrl="/basicos/qwik-ssr"
        buttonNextLabel="Server Side Rendering"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Componentes de Qwik",
};
