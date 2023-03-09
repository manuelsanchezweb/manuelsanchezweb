import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/mono-blue.css";
import CustomLink from "~/components/custom-link";
import Pagination from "~/components/pagination";

export default component$(() => {
  useVisibleTask$(() => {
    hljs.registerLanguage("typescript", typescript);
    hljs.highlightAll();
  });

  return (
    <div>
      <h1>Componentes Qwik</h1>
      <CustomLink
        url="https://github.com/manuelsanchezweb/qwik-curso-principiantes/tree/lection/components"
        text="Enlace al repositorio"
        icon="github"
      />

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
      <figure>
        <img
          src="../../../../img/qwik-extensions-show.png"
          alt="Cómo activar el snippet de código de Qwik"
        />
      </figure>
      <p>Tienes dos formas de declarar el componente:</p>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: src/components/headline/index.tsx
    import { component$ } from "@builder.io/qwik";

    // Forma 1: Con export default
    export default component$(() => {
      return <div>Hello Qwik!</div>;
    });

    // Forma 2: Con export const y el nombre del componente
    export const Headline = component$(() => {
      return <div>Hello Qwik!</div>;
    });
      
          `}
        </code>
      </pre>
      <p>
        Elijas la forma que elijas, ya podrás importar el archivo en nuestro{" "}
        <code>index.tsx</code> dentro de routes. Para hacer un import de forma
        automática, usa el símbolo <code>&lt;</code> y empieza a escribir el
        nombre del componente, en este caso <strong>Headline</strong>, y te
        deberá salir la sugerencia de import.
      </p>
      <figure>
        <img
          src="../../../../img/vscode-autoimport.png"
          alt="Cómo activar sugerencia de import con VSCode"
        />
      </figure>
      <p>
        <strong>IMPORTANTE: </strong>es cierto que ver tanto mismo archivo
        llamado index.tsx puede llegar a causar confusión. Cuesta un poco
        acostumbrarse al principio, pero el orden establecido a través del
        sistema de rutas con las carpetas compensa.
      </p>
      <p>
        En el vídeo de la explicación con los componentes hablamos además de qué
        es la <strong>component rendering function</strong>, de las limitaciones
        que tiene el return al solo permitir un <strong>JSX node</strong>, y de
        cómo podemos solventar eso a través de <strong>fragments</strong>.
      </p>
      <p>
        En la siguiente lección vamos a crear componentes dinámicos, y vamos a
        hablar entonces de un tema muy importante: <strong>props</strong>.
      </p>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/primeros-pasos/"
        buttonPrevLabel="Volver a los primeros pasos"
        buttonNextUrl="/cursos/qwik/basicos/props"
        buttonNextLabel="Props"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Componentes de Qwik",
};
