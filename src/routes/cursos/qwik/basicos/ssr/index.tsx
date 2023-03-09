import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>Qwik SSR</h1>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/props/"
        buttonPrevLabel="Volver a ver Props"
        buttonNextUrl="/cursos/qwik/basicos/lazy-loading/"
        buttonNextLabel="Lazy Loading"
      />
    </div>
  );
});
