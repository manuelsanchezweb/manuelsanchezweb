import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import styles from "highlight.js/styles/mono-blue.css?inline";
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
      <h1>Qwik Lazy Loading</h1>
      <p>
        En la lección anterior hemos visto como el SSR es el defecto, y como
        algunos scripts son cargados on demand solamente si se necesitan. Tiene
        mucho sentido: al fin y al cabo, ¿para qué cargar scripts de JavaScript
        que no son requeridas por el usuario?
      </p>
      <p>
        Es aquí donde entran en juego dos conceptos importantes de entender:{" "}
        <code>hydration</code> y <code>serialization</code> o{" "}
        <code>resumability</code>. Mientras que los frameworks a los que estamos
        acostumbrados optan por una estrategia de <strong>hydration</strong>,{" "}
        <strong>Qwik apuesta fuerte por serializar su código</strong>. Veamos
        qué es esto a lo que nos referimos:
      </p>
      <ul class="pl-6 flex flex-col gap-4 mb-6">
        <li class="list-disc">
          Una estrategia de hidratación hace que la misma lógica que se corrió
          en el servidor se vuelva a correr en el cliente. Esto supone un gran
          coste en cuanto a rendimiento ya que, en el caso de una aplicación por
          ejemplo, implica descargarse todos los componentes, todos sus scripts
          de JavaScript, parsear ese JavaScript y vincular los listeners a los
          elementos.
        </li>
        <li class="list-disc">
          Serializar el código implica, en palabras de los creadores de Qwik,
          poder pausar la ejecución en el servidor, y reanudarla en el cliente,
          pero solo si así se requiere.
        </li>
      </ul>
      <p>
        La{" "}
        <a
          target="_blank"
          rel="nofollow noopener"
          title="Resumability Qwik"
          href="https://qwik.builder.io/docs/concepts/resumable/#introducing-resumability"
        >
          documentación de Qwik
        </a>{" "}
        lo ejemplifica de maravilla de la siguiente forma:
      </p>
      <figure>
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F04681212764f4025b2b5f5c6a258ad6e?format=webp&width=2000"
          alt=""
        />
      </figure>
      <p>
        Cuando hablamos de serializar el código, hablamos también de cómo Qwik
        conecta el componente con el script que tiene que cargar. Compara lo que
        escribimos en el JSX y lo que se renderiza en el DOM (utilizaremos el
        ejemplo del botón de la lección del SSR).
      </p>

      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
   // Path: src/routes/index.tsx
   import { component$ } from "@builder.io/qwik";
   
   export default component$(() => {
     console.log("SERVIDOR: Cuando me monto, aparezco 🐴");
     return (
       <div>
         <button onClick$={() => console.log("CLIENTE: me cargo on demand 👨‍🍳")}>
           Hazme click
         </button>
       </div>
     );
   });
          `}
        </code>
      </pre>

      <Video src="../../../../videos/serializing-qwik.mov" />

      <p>
        Aquí os dejo otra forma de contemplarlo, según lo explica Miško Hevery,
        creador de Builder.io/Qwik y Angular, en{" "}
        <a
          title="Hilo de Twitter hablando de las ventajas del lazy loading de Qwik"
          rel="nofollow noopener"
          target="_blank"
          href="https://twitter.com/mhevery/status/1630251211130564609"
        >
          un hilo de Twitter
        </a>
        :
      </p>
      <div class="flex gap-4">
        <figure>
          <img
            width="auto"
            height="300px"
            class="min-h-[300px]"
            src="https://pbs.twimg.com/media/Fp_Q1JZaIAEBMvk?format=png&name=4096x4096"
            alt="Ejecución normal de una página y sus componentes al montarse."
          />
          <figcaption>
            Ejecución normal de una página y sus componentes al montarse.
          </figcaption>
        </figure>
        <figure>
          <img
            width="auto"
            height="300px"
            class="min-h-[300px]"
            src="https://pbs.twimg.com/media/Fp_Q2B3aMAUHkWj?format=jpg&name=4096x4096"
            alt="El uso de Signals nos permite ahorrarnos esa ejecución inicial"
          />
          <figcaption>
            El uso de Signals nos permite ahorrarnos esa ejecución inicial.
          </figcaption>
        </figure>
        <figure>
          <img
            width="auto"
            height="300px"
            class="min-h-[300px]"
            src="https://pbs.twimg.com/media/Fp_Q2zIaMAIfiVb?format=jpg&name=4096x4096"
            alt="Cuando surge la interacción, se carga únicamente el efecto del
            componente interactuado."
          />
          <figcaption>
            Cuando surge la interacción, se carga únicamente el efecto del
            componente interactuado.
          </figcaption>
        </figure>
      </div>

      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/ssr/"
        buttonPrevLabel="Volver a ver SSR"
        buttonNextUrl="/cursos/qwik/basicos/jsx/"
        buttonNextLabel="JSX y Qwik"
      />
    </div>
  );
});
