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
    </div>
  );
});
export const head: DocumentHead = {
  title: "manuelsanchezweb - Página principal",
};
