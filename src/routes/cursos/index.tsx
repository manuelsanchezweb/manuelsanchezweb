import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CustomLink from "~/components/custom-link";

export default component$(() => {
  return (
    <div class="flex flex-col justify-center items-center max-w-[700px] min-h-screen text-center">
      <h1>Bienvenido a manuelsanchezweb</h1>
      <p>
        ¡Ahora mismo estamos de construcciones, pero le puedes echar un vistazo
        a los cursos de Qwik que estoy preparando!
      </p>
      <img
        class="object-contain"
        width="250"
        height="250"
        src="../../img/illustration-construction-blue.png"
        alt="Bajo Construcciones"
      />
      <CustomLink linkIntern url="/cursos/qwik/" text="Ver curso de Qwik" />
    </div>
  );
});

export const head: DocumentHead = {
  title: "manuelsanchezweb - Página principal",
};
