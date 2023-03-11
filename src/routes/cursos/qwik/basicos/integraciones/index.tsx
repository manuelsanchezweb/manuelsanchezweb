import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>Integraciones</h1>
      <p>
        Para que no te compliques la existencia y tengas que hacerlo desde cero,
        Qwik cuenta con unas utilidades para traer tus integraciones favoritas a
        la aplicación. La lista{" "}
        <a
          target="_blank"
          rel="nofollow noopener"
          title="Lista de integraciones con Qwik"
          href="https://qwik.builder.io/integrations/integration/overview/"
        >
          no para de crecer
        </a>
        : podemos tener adaptadores con <code>express server</code> , con{" "}
        <code>vercel edge</code> , con <code>netlify edge</code>; usar otros
        frameworks como <code>React</code>; sistemas de estilo como{" "}
        <code>Tailwind</code> , <code>PostCSS</code> o{" "}
        <code>Styled-Vanilla-Extract</code> , y mucho mucho más.{" "}
      </p>
      <p>
        Simplemente tienes que ejecutar el siguiente comando en la terminal y
        elegir la integración que quieres: <code>npm run qwik add</code>.
      </p>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/jsx/"
        buttonPrevLabel="Volver a ver JSX"
        buttonNextUrl="/cursos/qwik/basicos/styling/"
        buttonNextLabel="Ir a Styling"
      />
    </div>
  );
});
