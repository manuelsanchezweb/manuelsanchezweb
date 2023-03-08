import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Pagination from "~/components/pagination";
import { basics } from "~/data/basics";

export default component$(() => {
  // TODO: replace link con Udemy
  return (
    <div>
      <h1>Empecemos por lo básico</h1>{" "}
      <p>
        En esta página encontrarás todas las temáticas que considero base para
        poder trabajar con Qwik. Todos estos temas forman parte del{" "}
        <a
          rel="nofollow noopener"
          target="_blank"
          title="Curso Qwik Principiantes Español"
          href="https://www.google.de"
        >
          curso gratuito de Qwik de Udemy.
        </a>
        .
      </p>
      <p>
        La gente de Qwik está trabajando duramente para sacar el framework
        adelante y puede que llegue a haber problemas entre las versiones de mis
        proyectos. Si te encuentras con algún problema entre versiones, te
        invito a que me dejes un comentario directamente en el curso o si
        quieres a través de un correo a{" "}
        <a href="mailto:manuelsanweb@gmail.com">manuelsanweb@gmail.com</a> para
        que lo solucione / actualice cuanto antes.
      </p>
      <h2>Contenido del curso de principiantes de Qwik</h2>
      <p>A continuación tienes todo el contenido que vamos a ver:</p>
      <ul class="flex flex-wrap gap-4">
        {basics.map((element) => (
          <li key={element.id}>
            <Link
              href={element.url}
              class="flex items-center p-4 text-white transition duration-75 rounded-lg group bg-[var(--color-brand-primary)] hover:text-white hover:bg-[var(--color-brand-secondary)]"
            >
              <span>{element.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        buttonNextLabel="Primer tema: ¿Por qué aprender Qwik?"
        buttonNextUrl="/basicos/razones-aprender-qwik"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Básicos del curso de Qwik",
  meta: [
    {
      name: "description",
      content:
        "En esta página encontrarás todas las temáticas que considero base para poder trabajar con Qwik.",
    },
    {
      name: "keywords",
      content: "qwik, curso, principiantes, español, udemy",
    },
    {
      name: "author",
      content: "Manuel Sanchez",
    },
    {
      name: "og:image",
      content:
        "https://manuelsanchezweb-tau.vercel.app/img/qwik-principiantes.png",
    },
    {
      name: "twitter:image",
      content:
        "https://manuelsanchezweb-tau.vercel.app/img/qwik-principiantes.png",
    },
  ],
};
