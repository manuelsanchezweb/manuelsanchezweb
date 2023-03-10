import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>Fin de los básicos</h1>
      <p>
        Si has llegado hasta aquí,{" "}
        <strong>
          ¡te doy la enhorabuena! Has concluido lo que considero los básicos del
          framework Qwik.
        </strong>{" "}
        Está claro que se han quedado muchísimas cosas en el tintero, como los
        usos de otros métodos característicos de Qwik como son
        <code>useResouce$</code> , <code>useLocation</code>,
        <code>useVisibleTask$</code> o <code>routeLoader$</code>.
      </p>
      <p>
        Si quieres profundizar en Qwik, te aconsejo entonces que participes en
        mi curso intermedio de Qwik. En él iremos viendo técnicas más avanzadas
        del framework con la que lograr aplicaciones profesionales.
      </p>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/introduccion-fetch-qwik"
        buttonPrevLabel="Volver a la introducción a fetch"
        buttonNextUrl="/cursos/qwik/proyectos/"
        buttonNextLabel="Ir a la overview del curso avanzado"
      />
    </div>
  );
});
