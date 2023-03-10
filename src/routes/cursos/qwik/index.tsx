import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <>
      <h1>Bienvenido a tu plataforma de cursos de Qwik JS</h1>
      <p>
        Aquí encontrarás varios cursos que te servirán para familiarizarte con
        este framework de JavaScript. Aprenderemos cómo utilizar las
        herramientas y características de Qwik para hacer nuestras aplicaciones
        más rápidas y eficientes. Aunque para acceder tanto al curso de
        principiantes como intermedio-avanzado, no es necesario tener
        experiencia previa en Qwik, se recomienda tener conocimientos previos en
        otros frameworks de JavaScript.
      </p>
      <div class="flex flex-col-reverse gap-4 mb-4 lg:my-4 lg:flex-row">
        <a
          title="Curso de principiantes de Qwik en Udemy"
          href="https://www.udemy.com/user/manuel-sanchez-324/"
          target="_blank"
          rel="nofollow noopener"
        >
          <figure class="overflow-hidden max-w-fit border-black border-2">
            <img
              class="min-w-[300px] hover:scale-105 transition-transform"
              src="../../img/qwik-principiantes.png"
              width="300"
              height="auto"
              alt="Thumbnail del curso de Qwik para principiantes de Udemy"
            />
          </figure>
        </a>
        <div>
          <h3>Curso de Qwik para principiantes</h3>
          <div>
            En este curso, partimos desde lo más básico del framework hasta
            algunas de sus peculiaridades. Aprenderemos cómo utilizar las
            herramientas y características de Qwik para hacer nuestras
            aplicaciones más rápidas y eficientes. <br /> Es el equivalente a la
            pestaña{" "}
            <code>
              <strong>Básicos</strong>
            </code>
            .
          </div>
        </div>
      </div>

      <div class="flex flex-col-reverse gap-4 mb-4 lg:flex-row">
        <a
          title="Curso intermedio-avanzado de Qwik en Udemy"
          href="https://www.udemy.com/user/manuel-sanchez-324/"
          target="_blank"
          rel="nofollow noopener"
        >
          <figure class="overflow-hidden max-w-fit border-black border-2">
            <img
              class="min-w-[300px] hover:scale-105 transition-transform"
              src="../../img/qwik-intermedio.png"
              width="300"
              height="auto"
              alt="Thumbnail del curso de Qwik para intermedio de Udemy"
            />
          </figure>
        </a>
        <div>
          <h3>Curso de Qwik Intermedio Avanzado</h3>
          <div>
            Este curso da por sentado que dominas los básicos del framework.
            Veremos conceptos algo más avanzados de Qwik mientras hacemos varias
            aplicaciones. Haremos varias aplicaciones juntos, y todos los
            diseños son originales y únicamente realizados para este curso.{" "}
            <br /> Es el equivalente a la pestaña{" "}
            <code>
              <strong>Proyectos</strong>
            </code>
            .
          </div>
        </div>
      </div>
      <h2>Sobre mí</h2>
      <div class="flex flex-col lg:flex-row lg:items-center gap-6">
        <figure class="min-w-[250px] mb-0">
          <img
            width="250"
            height="250"
            src="../../img/manuel-keyboard.svg"
            alt="Bajo Construcciones"
          />
        </figure>
        <p>
          ¡Buenas! Soy Manuel Sánchez, y voy a ser tu instructor en estos cursos
          de Qwik. Soy Frontend Developer desde hace varios años, y{" "}
          <strong>
            tengo una pasión por escribir código lo más performántico posible
          </strong>{" "}
          y <strong>por enseñar</strong>. Soy autor de{" "}
          <a
            title="Cuenta de Udemy"
            rel="nofollow noopener"
            target="_blank"
            href="https://www.udemy.com/user/manuel-sanchez-324/"
          >
            {" "}
            varios cursos en Udemy
          </a>{" "}
          con miles de estudiantes, y además trato de publicar contenido de
          forma regular en mi cuenta de{" "}
          <a
            title="Cuenta de YouTube de manuelsanchezweb"
            rel="nofollow noopener"
            target="_blank"
            href="https://www.youtube.com/channel/UCX3IE_OjG20p_AwbX06YAEg"
          >
            YouTube
          </a>
          . En mi tiempo libre me gusta hacer kickboxing y aprender idiomas.
          ¡Bienvenido de nuevo a la plataforma!
        </p>
      </div>
      <Pagination
        buttonNextLabel="Conceptos básicos: una overview"
        buttonNextUrl="/cursos/qwik/basicos/"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Plataforma Cursos Qwik",
};
