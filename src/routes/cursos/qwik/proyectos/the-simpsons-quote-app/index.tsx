import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>The Simpsons Quote App</h1>
      <p>
        En esta aplicación tenemos un diseño original que realizaremos con
        Tailwind. Tendremos un único layout hecho con grid, y realizaremos un
        fetch sencillo a una API externa.
      </p>
      <img src="../../../../img/project-simpsons.png" alt="Proyecto Simpsons" />
      <Pagination
        buttonPrevUrl="/cursos/qwik/proyectos/"
        buttonPrevLabel="Volver a la overview de los Proyectos"
        buttonNextUrl="/cursos/qwik/proyectos/weather-app"
        buttonNextLabel="Ir al proyecto Weather App"
      />
    </div>
  );
});
