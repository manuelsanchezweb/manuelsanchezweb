import { component$ } from "@builder.io/qwik";
import CustomLink from "~/components/custom-link";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>Qwik SSR</h1>
      <CustomLink
        url="https://github.com/manuelsanchezweb/qwik-curso-principiantes/tree/lection/ssr"
        text="Enlace al repositorio"
        icon="github"
      />
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/props/"
        buttonPrevLabel="Volver a ver Props"
        buttonNextUrl="/cursos/qwik/basicos/lazy-loading/"
        buttonNextLabel="Lazy Loading"
      />
    </div>
  );
});
