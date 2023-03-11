import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";

import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import styles from "highlight.js/styles/mono-blue.css?inline";
import CustomLink from "~/components/custom-link";
import Pagination from "~/components/pagination";
import Video from "~/components/video";

export default component$(() => {
  useStylesScoped$(styles);

  useVisibleTask$(() => {
    hljs.registerLanguage("typescript", typescript);
    hljs.highlightAll();
  });

  return (
    <div>
      <h1>useSignal</h1>
      <CustomLink
        url="https://github.com/manuelsanchezweb/qwik-curso-principiantes/tree/lection/usesignal"
        text="Enlace al repositorio"
        icon="github"
      />
      <p>
        Este método, junto a <code>useStore</code>es uno de los métodos
        fundamentales de Qwik en cuanto a <code>state management</code>, sobre
        todo cuandos nos referimos a estados dinámicos.
      </p>{" "}
      En esta lección nos centraremos en useSignal y en la siguiente, en
      useStore.
      <p>
        Con useSignal podemos guardar un único valor de una variable. Se suele
        utilizar para los tipos primitivos, como <strong>boolean</strong>,{" "}
        <code>string</code>, o <code>number/integer</code>, aunque también
        puedes almacenar los datos de <code>objecto simple</code>, es decir, que
        no tiene varios niveles de profundidad. El método useSignal toma el
        valor inicial de dicha variable como argumento y devuelve lo que se
        denomina una <code>reactive signal</code>. Para acceder al valor de la
        variable, de la signal, debemos acceder a{" "}
        <code>nombredelavariableelegida.value</code>. En{" "}
        <a
          target="_blank"
          rel="nofollow noopener"
          title="Documentación oficial de Qwik sobre state management"
          href="https://qwik.builder.io/docs/components/state/"
        >
          la documentación oficial de Qwik tienes el ejemplo típico del botón
          contador
        </a>
        , pero aquí tienes un par de ejemplos menos prototípicos:
      </p>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: src/routes/index.tsx
    import { component$, useSignal } from "@builder.io/qwik";
    
    export default component$(() => {
      const userName = useSignal("manuelsanchezweb");
      const isDinnerDone = useSignal(false);
    
      const translateBool = (value: boolean) => {
        return value ? "Sí" : "No";
      };
    
      return (
        <div>
          <h1>useSignal</h1>
          <div>
            <p>
              Nombre de la variable: <strong>{userName.value}</strong>.
            </p>
            <button onClick$={() => (isDinnerDone.value = !isDinnerDone.value)}>
              Cambiar estado de la cena
            </button>
            <button
              onClick$={() =>
                userName.value === "manuelsanchezweb"
                  ? (userName.value = "Paco")
                  : (userName.value = "manuelsanchezweb")
              }
            >
              Alternar entre Paco y manuelsanchezweb
            </button>
            <p>¿Está la cena hecha?: {isDinnerDone.value.toString()}</p>
            <p>¿Está la cena hecha?: {translateBool(isDinnerDone.value)}</p>
          </div>
        </div>
      );
    });
          `}
        </code>
      </pre>
      <Video src="../../../../videos/usesignal.mov" />
      <p>
        Como puedes ver en el código y en el vídeo, tenemos una par de signals y
        un par de funciones dentro de los <code>onClick$</code> que nos permiten
        hacer un toggle entre los valores de las señales.
      </p>
      <p>
        Si bien useSignal es muy entretenido y fácil de usar, cuando trabajamos
        con arrays o con objectos con varios niveles de profundidad, haremos
        mejor en utilizar <code>useStore</code>.
      </p>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/styling/"
        buttonPrevLabel="Volver a ver Styling"
        buttonNextUrl="/cursos/qwik/basicos/use-store/"
        buttonNextLabel="Ir a useStore"
      />
    </div>
  );
});
