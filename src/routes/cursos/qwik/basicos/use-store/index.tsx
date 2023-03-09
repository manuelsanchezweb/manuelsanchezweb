import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>useStore</h1>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/use-signal/"
        buttonPrevLabel="Volver a ver useSignal"
        buttonNextUrl="/cursos/qwik/basicos/use-context/"
        buttonNextLabel="Ir a useContext"
      />
    </div>
  );
});
