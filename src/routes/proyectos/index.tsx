import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Esta es la parte de proyectos</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik Docs Starter",
};
