import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import styles from "highlight.js/styles/mono-blue.css?inline";
import Pagination from "~/components/pagination";

export default component$(() => {
  useStylesScoped$(styles);

  useVisibleTask$(() => {
    hljs.registerLanguage("typescript", typescript);
    hljs.highlightAll();
  });

  return (
    <div>
      <h1>Requisitos del sistema</h1>
      <p>
        De la misma forma que con otros frameworks y con JavaScript en general,
        tenemos que tener una{" "}
        <a
          target="_blank"
          rel="nofollow noopener"
          title="Node Official Page"
          href="https://nodejs.org/en/"
        >
          versión de Node actualizada
        </a>{" "}
        y, por supuesto, un buen IDE. Según leo en el <code>package.json</code>{" "}
        de cualquier proyecto con Qwik, a partir de la{" "}
        <strong>versión 16</strong> no debería haber problema. Si no sabes cuál
        es tu versión de node, abre la terminal y haz <code>node -v</code>.
      </p>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // package.json
    "engines": {
      "node": ">=15.0.0"
    },
          `}
        </code>
      </pre>
      <p>
        Como IDE, os voy a recomendar{" "}
        <a
          target="_blank"
          rel="nofollow noopener"
          title="VSCode Official Page"
          href="https://code.visualstudio.com/"
        >
          Visual Studio Code
        </a>{" "}
        . Seguramente haya mejores, pero este es el que conozco y el que además
        tiene una extensión de Qwik que vamos a utilizar. Así que ya de paso,
        cuando tengamos VSCode,{" "}
        <a
          target="_blank"
          rel="nofollow noopener"
          title="Marketplace para la extension de Qwik"
          href="https://marketplace.visualstudio.com/items?itemName=johnreemar.vscode-qwik-snippets"
        >
          la instalamos
        </a>
        .
      </p>
      <a
        target="_blank"
        rel="nofollow noopener"
        title="Marketplace para la extension de Qwik"
        href="https://marketplace.visualstudio.com/items?itemName=johnreemar.vscode-qwik-snippets"
      >
        <figure>
          <img
            src="../../../../img/qwik-extensions.png"
            alt="Extensión de snippets para Qwik"
          />
        </figure>
      </a>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/razones-aprender-qwik"
        buttonPrevLabel="Por qué aprender Qwik"
        buttonNextUrl="/cursos/qwik/basicos/primeros-pasos/"
        buttonNextLabel="Primeros pasos"
      />
    </div>
  );
});
