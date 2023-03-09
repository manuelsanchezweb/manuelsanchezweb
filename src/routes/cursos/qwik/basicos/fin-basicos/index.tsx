import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>Fin de los básicos</h1>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/"
        buttonPrevLabel="Volver al comienzo del curso"
        buttonNextUrl="/cursos/qwik/proyectos/"
        buttonNextLabel="Ir a la overview del curso avanzado"
      />
    </div>
  );
});
