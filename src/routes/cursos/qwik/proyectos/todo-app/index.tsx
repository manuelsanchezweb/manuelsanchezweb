import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>To Do App</h1>
      <p>
        En esta aplicación tendremos un sencillo sistema de autenticación con
        Supabase en el que podremos hacer una To Do List compartida.
      </p>
      <img src="../../../../img/project-todoapp.png" alt="Proyecto To Do App" />
      <Pagination
        buttonPrevUrl="/cursos/qwik/proyectos/weather-app"
        buttonPrevLabel="Volver al proyecto Weather App"
        buttonNextUrl="/cursos/qwik/proyectos/blog-app"
        buttonNextLabel="Ir al proyecto Blog App"
      />
    </div>
  );
});
