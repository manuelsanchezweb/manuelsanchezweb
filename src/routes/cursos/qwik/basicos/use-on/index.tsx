import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>useOn</h1>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/use-context/"
        buttonPrevLabel="Volver a ver useContext"
        buttonNextUrl="/cursos/qwik/basicos/introduccion-fetch-qwik/"
        buttonNextLabel="Ir a Introducción a Fetch con Qwik"
      />
    </div>
  );
});
