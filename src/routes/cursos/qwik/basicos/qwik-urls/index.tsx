import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>Qwik Urls</h1>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/lazy-loading/"
        buttonPrevLabel="Volver a ver Lazy Loading"
        buttonNextUrl="/cursos/qwik/basicos/jsx/"
        buttonNextLabel="Ir a JSX"
      />
    </div>
  );
});
