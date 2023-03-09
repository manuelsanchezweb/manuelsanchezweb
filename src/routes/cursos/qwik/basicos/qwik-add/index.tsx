import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>Qwik Add</h1>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/jsx/"
        buttonPrevLabel="Volver a ver JSX"
        buttonNextUrl="/cursos/qwik/basicos/qwik-styling/"
        buttonNextLabel="Ir a Styling"
      />
    </div>
  );
});
