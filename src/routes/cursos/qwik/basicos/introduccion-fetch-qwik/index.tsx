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
      <h1>Intro Fetch Qwik</h1>
      <CustomLink
        url="https://github.com/manuelsanchezweb/qwik-curso-principiantes/tree/lection/fetch"
        text="Enlace al repositorio"
        icon="github"
      />
      <p>
        Qwik presenta varias opciones para hacer fetch dependiendo del resultado
        que se quiera tener y del tipo de <code>API</code> que se trate. Para
        los propósitos del curso, te voy a enseñar dos métodos que podemos usar
        para hacer fetch de una API que no es del tipo <code>REST</code>, es
        decir, de las APIs en las que solo puedes hacer <code>GET</code>.
      </p>
      <p>
        Para todos los ejemplos, vamos a partir de que tenemos la siguiente
        función para hacer fetch. La pondré debajo de todo en el{" "}
        <code>index.tsx</code>, pero no dudes en ponerla en un archivo aparte.
        Ya sabes, buenas prácticas y eso.
      </p>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: src/routes/index.tsx
    export async function fetchCharacters(): Promise<[]> {
      const response = await fetch("https://dummyjson.com/users");
    
      if (!response.ok) {
        throw new Error("Ha habido un error a la hora de hacer fetch");
      }
      const results = await response.json();
    
      return results.users;
    }
          `}
        </code>
      </pre>
      <h2>Fetch a raíz de un evento</h2>
      <p>
        Si quieres hacer fetch a raíz de por ejemplo el click de un botón, lo
        puedes hacer de la siguiente manera:
      </p>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: src/routes/index.tsx
    export default component$(() => {
      const onLoadCharacters = $(async () => {
        const characters = await fetchCharacters();
        console.log(characters);
      });

      return (
        <div>
          <h1>Cómo hacer fetch con Qwik </h1>
          <button onClick$={onLoadCharacters}>Hacer fetch de los personajes</button>
        </div>
      );
    });
          `}
        </code>
      </pre>

      <p>
        Aquí tienes un vídeo de su funcionamiento. Fíjate en que el{" "}
        <strong>
          script de JavaScript que tiene que ver con el fetch se carga tan solo
          si se clica el botón.
        </strong>
        Esto tiene que ver con los conceptos de Lazy Loading y serialización que
        hemos visto en las lecciones anteriores.
      </p>

      <Video src="../../../../videos/fetch-event.mov" />
      <p>
        Si quisiéramos renderizar los personajes, lo podríamos hacer a través de{" "}
        <code>map</code>. Lo que hacemos en la función del botón es pasarle el
        resultado del fetch como valor a una store, y así lo podemos ver.
      </p>

      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: src/routes/index.tsx
    import { Character } from "~/types";
    // Character como type lo he definido en un archivo aparte, porque era muy largo. 
    // Si quieres verlo, puedes verlo en el archivo types.d.ts de la carpeta types en el repo

    interface CharactersProps {
      characters: Character[];
    }
    
    export default component$(() => {
      // Posibilidad 1
      const allCharacters = useStore<CharactersProps>({ characters: [] });
    
      const onLoadCharacters = $(async () => {
        const characters = await fetchCharacters();
        allCharacters.characters = characters;
      });
    
      return (
        <div>
          <h1>Cómo hacer fetch con Qwik </h1>
          <button onClick$={onLoadCharacters}>Hacer fetch de los personajes</button>
          {allCharacters.characters.map((character: Character) => (
            <div key={character.id}>
              <h2>{character.firstName}</h2>
              <p>{character.email}</p>
              <img src={character.image} alt={character.firstName} />
            </div>
          ))}
        </div>
      );
    });
          `}
        </code>
      </pre>

      <Video src="../../../../videos/fetch-event-map.mov" />

      <h2>Fetch al montarse un componente</h2>
      <p>
        Esta posibilidad es brutal, ya que nos permite hacer fetch desde el
        servidor y luego renderizarlo en la vista, y no verás en ningún momento
        que el cliente se ha descargado script alguno de JavaScript. Lo primero
        que tenemos que hacer es crear una función con <code>routeLoader$</code>{" "}
        que nos permite ejecutar una función desde el servidor.
      </p>

      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: src/routes/index.tsx
    export const useCharacters = routeLoader$(async () => {
      try {
        return await fetchCharacters();
      } catch (error) {
        console.error(
          "An error occurred while fetching Simpsons characters:",
          error
        );
        return [];
      }
    });
    
    export default component$(() => {
      const { value: characters } = useCharacters();

      return (
        <div>
          <h1>Cómo hacer fetch con Qwik </h1>
          {characters.map((character: Character) => (
            <div key={character.id}>
              <h2>{character.firstName}</h2>
              <p>{character.email}</p>
              <img src={character.image} alt={character.firstName} />
            </div>
          ))}
        </div>
      );
    });

    export async function fetchCharacters(): Promise<[]> {
      const response = await fetch("https://dummyjson.com/users");
    
      if (!response.ok) {
        throw new Error("Ha habido un error a la hora de hacer fetch");
      }
      const results = await response.json();
    
      return results.users;
    }
    

          `}
        </code>
      </pre>

      <Video src="../../../../videos/fetch-server.mov" />

      <p>
        Con esto ya tienes una pequeña overview de cómo funciona el tema de
        fetch con Qwik y de todo su potencial al efectuarlo directamente desde
        el servidor. Esta era la última gran lección de este curso para
        principiantes, ¡así que ya solo toca la despedida!
      </p>

      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/use-on/"
        buttonPrevLabel="Volver a ver useOn"
        buttonNextUrl="/cursos/qwik/basicos/fin-basicos/"
        buttonNextLabel="Ir a Fin del curso de principiantes"
      />
    </div>
  );
});
