import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>Qwik Styling</h1>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/qwik-add/"
        buttonPrevLabel="Volver a ver qwik add"
        buttonNextUrl="/cursos/qwik/basicos/use-signal/"
        buttonNextLabel="Ir a useSignal"
      />
    </div>
  );
});
