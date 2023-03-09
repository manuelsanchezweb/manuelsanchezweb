import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>Qwik Lazy Loading</h1>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/ssr/"
        buttonPrevLabel="Volver a ver SSR"
        buttonNextUrl="/cursos/qwik/basicos/qwik-urls/"
        buttonNextLabel="Qwik Urls o QRLs"
      />
    </div>
  );
});
