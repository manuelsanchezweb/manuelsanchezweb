import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Bienvenido a tu plataforma de cursos de Qwik JS</h1>
      <div class="flex flex-col-reverse gap-4 mb-4 lg:my-4 lg:flex-row">
        <a href="https://www.google.es" target="_blank" rel="nofollow noopener">
          <figure class="overflow-hidden max-w-fit border-black border-2">
            <img
              class="min-w-[300px] hover:scale-105 transition-transform"
              src="./img/qwik-principiantes.png"
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
        <a href="https://www.google.es" target="_blank" rel="nofollow noopener">
          <figure class="overflow-hidden max-w-fit border-black border-2">
            <img
              class="min-w-[300px] hover:scale-105 transition-transform"
              src="./img/qwik-intermedio.png"
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
    </>
  );
});

export const head: DocumentHead = {
  title: "Plataforma Cursos Qwik",
};
