import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>Intro Fetch Qwik</h1>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/use-on/"
        buttonPrevLabel="Volver a ver useOn"
        buttonNextUrl="/cursos/qwik/basicos/fin-basicos/"
        buttonNextLabel="Ir a Fin del curso de principiantes"
      />
    </div>
  );
});
