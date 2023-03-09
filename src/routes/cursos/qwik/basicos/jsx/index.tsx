import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>JSX and Qwik</h1>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/qwik-urls/"
        buttonPrevLabel="Volver a ver Qwik Urls"
        buttonNextUrl="/cursos/qwik/basicos/qwik-add/"
        buttonNextLabel="Ir a qwik add"
      />
    </div>
  );
});
