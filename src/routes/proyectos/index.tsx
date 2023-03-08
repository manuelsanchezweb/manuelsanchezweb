import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import { projects } from "~/data/projects";

export default component$(() => {
  // TODO: replace link con Udemy

  return (
    <>
      <h1>Esta es la parte de proyectos</h1>
      <p>
        {" "}
        En esta página encontrarás una serie de proyectos que hemos realizado
        con Qwik. Encontrarás todos ellos en el{" "}
        <a
          rel="nofollow noopener"
          target="_blank"
          title="Curso Qwik Intermedio Español"
          href="https://www.google.de"
        >
          Curso Intermedio de Qwik de Udemy
        </a>
        . Por ello, lo de{" "}
        <span class="inline-flex items-center justify-center px-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">
          Pro
        </span>
        . Antes de hacer ese curso, ¡te recomiendo dominar los básicos del{" "}
        <a
          rel="nofollow noopener"
          target="_blank"
          title="Curso Qwik Principiantes Español"
          href="https://www.google.de"
        >
          curso para principiantes
        </a>
        !
      </p>
      <p>
        La lista se irá actualizando, pero por ahora los proyectos que hacemos
        en el curso son los siguientes:
      </p>

      <ul class="flex flex-wrap gap-4">
        {projects.map((element) => (
          <li key={element.id}>
            <Link
              href={element.url}
              class="flex flex-col gap-4 items-center transition duration-75 rounded-lg group hover:text-black"
            >
              <figure class="overflow-hidden max-w-fit border-black border-2">
                <img
                  class="w-[400px] max-h-[300px] h-[300px] object-cover hover:scale-105 transition-transform"
                  src={element.thumbnail}
                  width="400"
                  height="300"
                  alt={element.label}
                />
              </figure>
              <span>
                <strong>{element.label}</strong>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik Docs Starter",
};
