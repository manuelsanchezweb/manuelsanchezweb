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
      <h1>useStore</h1>
      <CustomLink
        url="https://github.com/manuelsanchezweb/qwik-curso-principiantes/tree/lection/usestore"
        text="Enlace al repositorio"
        icon="github"
      />
      <p>
        Como hemos dicho en la lección anterior, este método es junto a{" "}
        <code>useSignal</code>uno de los métodos fundamentales de Qwik en cuanto
        a <code>state management</code>, sobre todo cuandos nos referimos a
        estados dinámicos. La diferencia con useSignal es que utilizamos
        useStore para almacenar datos, que llamaremos store, que pueden ser de
        cualquier tipo, normalmente más complejo que un simple valor, como puede
        ser <strong>un objeto con varios niveles de profundidad</strong> o un{" "}
        <strong>array</strong>.
      </p>
      <p>Echémosle un vistazo al siguiente código y al vídeo en cuestión:</p>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
     // Path: src/routes/index.tsx
    import { component$, useStore } from "@builder.io/qwik";
    
    interface ShoppingListProps {
      fruits: { banana: number; apple: number; oranges: number };
      vegetables: { pepper: number; broccoli: number };
    }
    
    const sum = (a: number, b: number) => a + b;
    
    export default component$(() => {
      const shoppingListStore = useStore<ShoppingListProps>(
        {
          fruits: {
            banana: 6,
            apple: 1,
            oranges: 2,
          },
          vegetables: {
            pepper: 4,
            broccoli: 2,
          },
        },
        { deep: true }
      );
    
      return (
        <div>
          <h1>useStore</h1>
          <p>
            Con useStore podemos almacenar datos de variables más complejas,{" "}
            <strong>como pueden ser objetos anidados</strong>. En este caso, te
            presento mi lista de la compra ahora que estoy a dieta.
          </p>
          <div>
            <h2>Lista de la compra</h2>
            <p>
              Número de plátanos: <strong>{shoppingListStore.fruits.banana}</strong>
              .
            </p>
            <p>
              Número de manzanas: <strong>{shoppingListStore.fruits.apple}</strong>.
            </p>
            <p>
              Número de pimientos:{" "}
              <strong>{shoppingListStore.vegetables.pepper}</strong>.
            </p>
            <p>
              Número de brócolis:{" "}
              <strong>{shoppingListStore.vegetables.broccoli}</strong>.
            </p>
            <p>
              Total de verduras:{" "}
              <strong>
                {sum(
                  shoppingListStore.vegetables.pepper,
                  shoppingListStore.vegetables.broccoli
                )}
              </strong>
            </p>
            <button onClick$={() => shoppingListStore.vegetables.pepper++}>
              Añade un pimiento
            </button>
          </div>
        </div>
      );
    });
          `}
        </code>
      </pre>
      <Video src="../../../../videos/usestore.mov" width={350} height="auto" />
      <p>
        Como podemos ver, a la hora de declarar los valores del store, si vamos
        a utilizar más de un nivel de anidación, debemos pasarle{" "}
        <code>deep: true</code> como segundo argumento.
      </p>
      <p>
        Los datos funcionan de <strong>forma reactiva</strong>, al igual que con
        useSignal, es decir, que al cambiar el valor de una propiedad del store,
        se actualizará automáticamente el valor en cualquier componente que
        utilice dicha variable.
      </p>
      <p>
        A continuación vamos a ver una de las estrategias, también relacionada
        con state management, para hacer disponible una serie de variables y
        métodos en toda la aplicación.
      </p>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/use-signal/"
        buttonPrevLabel="Volver a ver useSignal"
        buttonNextUrl="/cursos/qwik/basicos/use-context/"
        buttonNextLabel="Ir a useContext"
      />
    </div>
  );
});
