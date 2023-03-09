import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
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
      <h1>Razones para aprender Qwik</h1>

      <p>
        {" "}
        Esta es una pregunta muy subjetiva, y lejos de responderte con una
        respuesta técnica y superabstracta, te quiero decir sencillamente que{" "}
        <strong>por comodidad</strong>. Me explico: viniendo del universo React,
        puedo afirmar que vengo de un ambiente muy cómodo. Y Qwik me recuerda en
        muchas cosas a React, y me hace sentir igual o más cómodo. Ahora mismo
        Qwik todavía no es <i>production-ready</i> como se suele decir, pero os
        aseguro que tiene mucho potencial. Te lo explico de una forma accesible.
      </p>

      <p>
        <strong>DISCLAIMER:</strong> si quieres una razón más técnica de la que
        te voy a dar, te invito a que le eches un vistazo a la documentación
        oficial, y que la guardes en favoritos, porque echaremos unos buenos
        momentos ahí.
      </p>

      <h2>Framework basado en componentes</h2>
      <p>
        Esto no es una novedad, muchísimos de los frameworks de JavaScript en la
        actualidad funcionan de la misma forma. Tenemos un componente, le
        pasamos unas props y ya empieza la magia: ya tenemos componentes
        modulares. Si no tienes mucha experiencia con props, no te preocupes, lo
        vemos más adelante en el curso en el apartado de{" "}
        <Link href="/cursos/qwik/basicos/componentes-qwik/">Componentes</Link>.
      </p>

      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
   // Componente sin props
   import { component$ } from '@builder.io/qwik';

   export default component$(() => {
     return (
       <button>Soy un botón inútil</button>
     );
   });
          `}
        </code>
      </pre>

      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
   // Componente con props
   import { component$ } from '@builder.io/qwik';

   export default component$(({ text = "Texto por defecto" }: { text: string }) => {
     return (
       <button>{text}</button>
     );
   });
          `}
        </code>
      </pre>

      <h2>SSR</h2>
      <p>
        Esto es quizá lo más espectacular. Si bien es cierto, que otros
        frameworks pueden lograr el SSR, lo característicos de Qwik es que ese
        es su <strong>default</strong>, es decir, que todo se carga desde el
        servidor a no ser que se diga lo contrario. Por lo cual, si todo ya
        viene desde el servidor, ganamos en velocidad y rendimiento, y en
        ahorrarle trabajo al cliente.
      </p>
      <h2>Lazy Loading por defecto</h2>
      <p>
        Qwik se basa en microscripts de JavaScript que se cargan{" "}
        <i>on demand</i> , es decir, solamente si realmente se necesitan.
        Imagínate: tenemos una página web en la que tenemos el botón típico para
        hacer el toggle del theme, también tenemos el botón que abre el menú
        desplegable, un par de botones para cargar más artículos, etc.{" "}
        <strong>
          {" "}
          Con Qwik podemos hacer que todos esas lógicas de JavaScript se carguen
          tan solo al hacer click al botón
        </strong>{" "}
        de manera que nos ahorramos toda esa lógica si el usuario no interactua
        con esos elementos.
      </p>

      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/"
        buttonPrevLabel="Volver a la overview de los básicos"
        buttonNextUrl="/cursos/qwik/basicos/requisitos"
        buttonNextLabel="Requisitos del sistema"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Razones para aprender Qwik",
};
