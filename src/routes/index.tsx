import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Newsletter from "~/components/newsletter";

export default component$(() => {
  return (
    <div class="flex flex-col justify-center items-center max-w-[600px] min-h-screen text-center px-4">
      <img
        width="350"
        height="350"
        src="../../img/manuel-keyboard.svg"
        alt="Bajo Construcciones"
      />
      <h1 class="mt-6">manuelsanchezweb</h1>

      <Newsletter />
      {/* <p>O échale un vistazo al curso de Qwik que estoy preparando</p>
      <CustomLink linkIntern url="/cursos/qwik/" text="Ver curso de Qwik" /> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: "manuelsanchezweb - Página principal",
};
