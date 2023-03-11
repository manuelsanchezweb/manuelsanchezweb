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
      <h1>Styling</h1>
      <CustomLink
        url="https://github.com/manuelsanchezweb/qwik-curso-principiantes/tree/lection/styling"
        text="Enlace al repositorio"
        icon="github"
      />
      <p>
        Además de las formas usuales de utilizar hojas de estilos, y otras
        integraciones del tipo Talwind, Qwik presenta dos métodos que nos hacen
        dar un salto de nivel en cuanto a rendimiento: <code>useStyles$</code> y{" "}
        <code>useStylesScoped$</code>. Vamos a ver cómo se aplica cada una de
        ellas.
      </p>

      <ul class="pl-6 flex flex-col gap-4 mb-6">
        <li class="list-disc">
          Utilizamos useStyles$ cuando queremos aplicar estilos de una manera
          global. Por ejemplo, si queremos aplicar estilos a la página entera, o
          a un componente que se renderiza en todas las páginas de la
          aplicación. La mayor diferencia entre este método y un simple{" "}
          <strong>import</strong> o <strong>estilos inline</strong> incluso es
          que en este caso los estilos se insertan directamente como parte del
          Server Side Rendering.
        </li>
        <li class="list-disc">
          Utilizamos useStylesScoped$ cuando queremos aplicar a un componente en
          cuestión, y por lo tanto, solo se cargarán si el componente se
          encuentra en la vista.
        </li>
      </ul>
      <p>
        Un ejemplo de <code>useStyles$</code> puede tener lugar en el archivo{" "}
        <code>root.tsx</code>, que es donde se importa el{" "}
        <code>global.css</code>. Podemos transformar el código para importar el
        css de la siguiente forma:
      </p>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: root.tsx
    import { component$, useStyles$ } from "@builder.io/qwik";
    import {
      QwikCityProvider,
      RouterOutlet,
      ServiceWorkerRegister,
    } from "@builder.io/qwik-city";
    import { RouterHead } from "./components/router-head/router-head";
    
    import styles from "./global.css?inline";
    
    export default component$(() => {
      useStyles$(styles);
    
      return (
        <QwikCityProvider>
          <head>
            <meta charSet="utf-8" />
            <link rel="manifest" href="/manifest.json" />
            <RouterHead />
          </head>
          <body lang="en">
            <RouterOutlet />
            <ServiceWorkerRegister />
          </body>
        </QwikCityProvider>
      );
    });
          `}
        </code>
      </pre>

      <p>
        Y un ejemplo de <code>useStylesScoped$</code> lo tienes en el estilo que
        aplicas en por ejemplo el componente <code>Button</code>{" "}
      </p>

      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: src/components/button/button.css
    button {
      background: green;
    }

    // Path: src/components/button/button.tsx
    import { component$, useStylesScoped$ } from "@builder.io/qwik";
    import styles from "./button.css?inline";

    export const Button = component$(() => {
      useStylesScoped$(styles);

      return <button>Botón estilado</button>;
    });
          `}
        </code>
      </pre>
      <p>
        Aquí tienes un vídeo en el que ves la interacción de ambos métodos en
        acción. Verás que hay dos páginas: ambas tendrán una serie de estilos
        globales, pero solamente la segunda cargará los estilos del{" "}
        <strong>button</strong>
      </p>
      <Video width={350} height="auto" src="../../../../videos/usestyles.mov" />
      <p>
        Espero que te haya gustado esta lección. Vamos ahora a entrar de llenos
        en nuestro primer método de Qwik: <code>useSignal</code>.
      </p>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/integraciones/"
        buttonPrevLabel="Volver a ver Integraciones"
        buttonNextUrl="/cursos/qwik/basicos/use-signal/"
        buttonNextLabel="Ir a useSignal"
      />
    </div>
  );
});
