import { component$, useVisibleTask$ } from "@builder.io/qwik";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/mono-blue.css";
import Pagination from "~/components/pagination";
import Video from "~/components/video";

export default component$(() => {
  useVisibleTask$(() => {
    hljs.registerLanguage("typescript", typescript);
    hljs.highlightAll();
  });

  return (
    <div>
      <h1>useOn</h1>
      <p>
        Tanto <code>useOn</code> como <code>useOnDocument</code> y{" "}
        <code>useOnWindow</code> son otro tipo de métodos de extrema utilidad
        que nos proporciona Qwik.
      </p>
      <ul class="pl-6 flex flex-col gap-4 mb-6">
        <li class="list-disc">
          useOn nos permite acoplarle un listener al componente en el que nos
          encontremos. Muchas veces, lo preferiremos hacer de esta forma en
          lugar de dentro del markup. Recibe como primer parámetro el evento al
          que quieras escuchar, y como segundo el callback.
        </li>
        <li class="list-disc">
          Los otros dos métodos nos sirven para acoplarle listeners al{" "}
          <code>document</code> y al <code>window</code>, respectivamente.
        </li>
      </ul>
      <p>
        Puedes encontrar un ejemplo de la combinación entre por ejemplo{" "}
        <code>useOnWindow</code>y un par de listeners en una aplicación que
        pretenda hacer un burger menú en pequeños dispositivos y un menú lista
        en dispositivos con una mayor resolución. Aquí te dejo{" "}
        <a
          target="_blank"
          rel="nofollow noopener"
          title="Ejemplo de código con listeners en window object"
          href="https://github.com/manuelsanchezweb/qwik-menu-burger/blob/master/src/components/navigation/navigation.tsx"
        >
          un ejemplo de código
        </a>
        :
      </p>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: https://github.com/manuelsanchezweb/qwik-menu-burger/blob/master/src/components/navigation/navigation.tsx
    import { $, component$, useOnWindow, useStore } from "@builder.io/qwik";
    import { IconClose, IconMenu } from "../icons";
    
    export const Navigation = component$(() => {
      const store = useStore({
        isNavOpen: false,
        windowWidth: 0,
      });
    
      useOnWindow(
        "load",
        $(() => {
          store.windowWidth = window.innerWidth;
        })
      );
    
      useOnWindow(
        "resize",
        $(() => {
          store.windowWidth = window.innerWidth;
        })
      );
    
      return (
        <nav>
          {/* Desktop Menu  */}
          {store.isNavOpen || store.windowWidth > 768 ? (
            <ul class={store.isNavOpen ? "open" : ""}>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/about">Sobre mí</a>
              </li>
              <li>
                <a href="/contact">Contacto</a>
              </li>
            </ul>
          ) : (
            ""
          )}
          {/* Open Button  */}
          {!store.isNavOpen ? (
            <button
              class="nav-open"
              aria-label="Open Menu"
              onClick$={() => (store.isNavOpen = !store.isNavOpen)}
            >
              <IconMenu />
            </button>
          ) : (
            ""
          )}
          {/* Close Button  */}
          {store.isNavOpen ? (
            <button
              class="nav-close"
              aria-label="Close Menu"
              onClick$={() => (store.isNavOpen = !store.isNavOpen)}
            >
              <IconClose />
            </button>
          ) : (
            ""
          )}
        </nav>
      );
    });
    
          `}
        </code>
      </pre>

      <Video src="../../../../videos/useonwindow-qwik.mov" />

      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/use-context/"
        buttonPrevLabel="Volver a ver useContext"
        buttonNextUrl="/cursos/qwik/basicos/introduccion-fetch-qwik/"
        buttonNextLabel="Ir a Introducción a Fetch con Qwik"
      />
    </div>
  );
});
