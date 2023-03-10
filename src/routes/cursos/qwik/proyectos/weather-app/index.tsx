import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      {" "}
      <h1>Weather App </h1>
      <p>
        Una aplicación del tiempo que nos vendrá de perlas para practicar el
        useResource$ de Qwik. Haremos fetch a dos APIs: la de Open Weather y la
        de Unsplash Developer.
      </p>
      <img
        src="../../../../img/project-weather-app.png"
        alt="Proyecto Weather App"
      />
      <Pagination
        buttonPrevUrl="/cursos/qwik/proyectos/the-simpsons-quote-app"
        buttonPrevLabel="Volver al proyecto The Simpsons Quote App"
        buttonNextUrl="/cursos/qwik/proyectos/todo-app"
        buttonNextLabel="Ir al proyecto To Do App"
      />
    </div>
  );
});
