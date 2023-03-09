import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>useSignal</h1>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/qwik-styling/"
        buttonPrevLabel="Volver a ver Qwik Styling"
        buttonNextUrl="/cursos/qwik/basicos/use-store/"
        buttonNextLabel="Ir a useStore"
      />
    </div>
  );
});
