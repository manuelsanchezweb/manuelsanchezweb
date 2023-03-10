import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>Blog App</h1>
      <p>
        Uno de los proyectos más ambiciosos: haremos una aplicación tipo blog en
        la que podremos acceder a los distintos posts, autores y categorías.
      </p>
      <img src="../../../../img/project-blog.png" alt="Proyecto To Do App" />
      <Pagination
        buttonPrevUrl="/cursos/qwik/proyectos/todo-app"
        buttonPrevLabel="Volver al proyecto To Do App"
      />
    </div>
  );
});
