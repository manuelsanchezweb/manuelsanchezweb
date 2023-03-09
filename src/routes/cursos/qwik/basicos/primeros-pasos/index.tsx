import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CustomLink from "~/components/custom-link";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>Primeros pasos</h1>
      <p>
        En esta lección vamos a crear un proyecto de Qwik utilizando{" "}
        <code>npm create qwik@latest</code> y vamos a hablar de la estructura
        que nos vamos a encontrar al hacerlo. En el momento en el que hacemos
        este tutorial, lo hago con la versión 0.21 de Qwik, así que para que no
        haya problemas, te recomiendo que clones el repositorio principal del
        curso para principiantes. Por cierto, a partir de ahora en algunas
        lecciones te dejaré un enlace a una branch de un repositorio de GitHub
        donde discutimos todo lo que aprendemos aquí. Lo verás marcado de la
        siguiente forma:
      </p>
      <CustomLink
        url="https://github.com/manuelsanchezweb/qwik-curso-principiantes/tree/start"
        text="Enlace al repositorio"
        icon="github"
      />
      <p>
        Has un <code>npm i</code> después de hacer{" "}
        <code>git checkout start</code>. Para abrir el entorno de desarrollo haz{" "}
        <code>npm run dev</code>. Si se te abre la siguiente pantalla, vamos
        bien.
      </p>
      <img
        src="../../../../img/boilerplate-qwik.png"
        alt="Boilerplate de Qwik"
      />
      <p>
        En el vídeo de la lección te cuento largo y tendido cómo funciona la
        estructura de un proyecto con Qwik, sobre todo, lo importante es
        quedarse con la idea de <code>Slot</code>, <code>index y layout</code>.
        También hablaremos de{" "}
        <a
          target="_blank"
          rel="nofollow noopener"
          title="Qwik City en la documentación oficial de Qwik"
          href="https://qwik.builder.io/qwikcity/overview/"
        >
          Qwik City
        </a>{" "}
        .
      </p>
      <p>
        Una vez cubierto el tema, estamos listos para descubrir el mundo de los
        componentes de Qwik.
      </p>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/requisitos/"
        buttonPrevLabel="Volver a los requisitos"
        buttonNextUrl="/cursos/qwik/basicos/componentes-qwik"
        buttonNextLabel="Componentes"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Primeros pasos con Qwik",
};
