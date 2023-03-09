import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Materiales complementarios</h1>
      <p>
        He pensado que sería buena idea dejar por aquí una serie de recursos que
        nos pueden servir de ayuda a la hora de hacer nuestros proyectos:
      </p>
      <ul class="flex flex-col gap-2 my-4 list-disc pl-6">
        <li>
          <a
            href="https://qwik.builder.io/"
            title="Documentación de Qwik"
            rel="nofollow noopener"
            target="_blank"
          >
            Docu de Qwik:{" "}
          </a>
          La documentación oficial donde verás todas las actualizaciones.
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/mswebco"
            title="Documentación de Qwik"
            rel="nofollow noopener"
            target="_blank"
          >
            mswebco:{" "}
          </a>
          Es un paquete asistente de commits. Lo hice siguiendo uno de los
          tutoriales de Twitch de midudev, y la verdad que me encanta.
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik Docs Starter",
};
