import { component$ } from "@builder.io/qwik";
import CustomLink from "~/components/custom-link";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>useContext</h1>
      <CustomLink
        url="https://github.com/manuelsanchezweb/qwik-curso-principiantes/tree/feature/usecontext"
        text="Enlace al repositorio"
        icon="github"
      />

      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/use-store/"
        buttonPrevLabel="Volver a ver useStore"
        buttonNextUrl="/cursos/qwik/basicos/use-on/"
        buttonNextLabel="Ir a useOn"
      />
    </div>
  );
});
