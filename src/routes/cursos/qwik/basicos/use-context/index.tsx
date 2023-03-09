import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>useContext</h1>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/use-store/"
        buttonPrevLabel="Volver a ver useStore"
        buttonNextUrl="/cursos/qwik/basicos/use-on/"
        buttonNextLabel="Ir a useOn"
      />
    </div>
  );
});
