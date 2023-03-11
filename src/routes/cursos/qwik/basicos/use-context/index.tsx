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
      <h1>useContext</h1>
      <CustomLink
        url="https://github.com/manuelsanchezweb/qwik-curso-principiantes/tree/feature/usecontext"
        text="Enlace al repositorio"
        icon="github"
      />
      <p>
        En esta lección vamos a hablar de uno de mis puntos favoritos de Qwik y
        de otros frameworks del estilo, y es del uso de un <code>context</code>.
        Lo primero que nos preguntamos es qué es un contexto y para qué lo
        necesitamos. Imagina que tienes una aplicación en la que necesitas que
        el usuario inicie sesión para realizar alguna acción, como un e-commerce
        o una plataforma de cursos. A nosotros nos interesa que si el usuario
        inicia sesión en alguna página,{" "}
        <strong>
          este estado se encuentre disponible en el resto de la aplicación, y
          que persista
        </strong>
        .
      </p>
      <p>
        Para este tipo de situaciones podríamos hacer uso de un contexto que, a
        través de un <code>provider</code> va a hacerle como un wrapper a la
        aplicación (le va a hacer la envolvente). Así, podemos hacer que una
        serie de variables y métodos se encuentren disponibles en toda la
        aplicación. Y de esta forma hasta el más pequeño de los componentes
        puede acceder al los datos del contexto (store), que llamaremos{" "}
        <code>authStore</code> en el siguiente código. Es una buena forma de
        evitar el <strong>prop drilling</strong>, que es básicamente cuando nos
        dedicamos a pasar todo el rato datos desde componentes que están más
        arriba hasta los hijos más pequeños.
      </p>
      <p>Echémosle un vistazo al siguiente código:</p>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: src/root.tsx
    import {
      $,
      component$,
      createContextId,
      Signal,
      useContextProvider,
      useSignal,
      useStore }
      from "@builder.io/qwik";
    import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
    import { RouterHead } from "./components/router-head/router-head";

    import "./global.css";

    type AuthStoreProps = {
      userName: string;
      isLogged: Signal<boolean>;
      login: () => void;
      logout: () => void;
    };

    export const AuthContext = createContextId<AuthStoreProps>("Auth");

    export default component$(() => {
      
      const loginState = useSignal(false);

      const authStore = useStore<AuthStoreProps>({
        userName: "manuelsanchezweb",
        isLogged: loginState,
        login: $(() => {
          console.log("LOGIN");
          loginState.value = true;
        }),
        logout: $(() => {
          console.log("LOGOUT");
          loginState.value = false;
        }),
      });

      useContextProvider(AuthContext, authStore);

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
      <p>Vamos a hacer un análisis de lo que tenemos ahí:</p>
      <ul class="pl-6 flex flex-col gap-4 mb-6">
        <li class="list-disc">
          Tenemos el primer método que nos sirve para crear un contexto,{" "}
          <code>createContextId</code>. Le pasamos el{" "}
          <code>AuthStoreProps</code> para decirle el tipo de datos que vamos a
          meter en el contexto y le damos un nombre que lo identifique ("Auth").
        </li>
        <li class="list-disc">
          A través de <code>useStore</code> le damos a la variable authStore los
          valores iniciales de las variables y métodos. Dado que no encontré una
          forma de cambiar una variable de dentro del store con uno de los
          métodos también de dentro del store, hice el workaround asignado a{" "}
          <code>isLogged</code> el valor de un Signal (loginState), de forma que
          al modificar el Signal también modificamos el valor de isLogged.
        </li>
        <li class="list-disc">
          Finalmente llamamos al Provider. Este require dos argumentos: un
          context y los datos iniciales, así que le debemos pasar como
          parámetros las dos variables que hemos creado. Así{" "}
          <code> useContextProvider(AuthContext, authStore).</code>
        </li>
      </ul>
      <p>
        Si ahora nos vamos a nuestro <code>index.tsx</code> principal, el de la
        primera ruta del proyecto, podemos acceder a los valores y métodos a
        través de <code>useContext</code>:
      </p>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: src/routes/index.tsx
    import { component$, useContext } from "@builder.io/qwik";
    import type { DocumentHead } from "@builder.io/qwik-city";
    import { AuthContext } from "~/root";
    
    export default component$(() => {
      const auth = useContext(AuthContext);
    
      return (
        <div>
          <h1>useContext</h1>
          <p>
            Ha iniciado sesión: <strong>{auth.isLogged.value.toString()}</strong>{" "}
          </p>
          {auth.isLogged.value == true ? (
            <p>El nombre del usuario es {auth.userName}</p>
          ) : (
            <p>No hay un usuario que haya iniciado sesión</p>
          )}
          <button onClick$={() => auth.login()}>Login</button>
          <button onClick$={() => auth.logout()}>Logout</button>
        </div>
      );
    });
          `}
        </code>
      </pre>
      <p>Esto sería el el resultado en pantalla:</p>
      <Video src="../../../../videos/usecontext.mov" />

      <p>
        Como hemos dicho anteriormente, también podríamos acceder al contexto
        desde un componente. En este caso he creado un componente llamado{" "}
        <code>User</code> que nos dirá simplemente el nombre del usuario y si ha
        iniciado sesión o no.
      </p>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: src/components/user/index.tsx
    import { component$, useContext } from "@builder.io/qwik";
    import { AuthContext } from "~/root";
    
    export const User = component$(() => {
      const auth = useContext(AuthContext);
      return (
        <div>
          {auth.userName}
          <div>{auth.isLogged.value.toString()}</div>
        </div>
      );
    });
    
          `}
        </code>
      </pre>
      <pre style="tab-size: 2;">
        <code lang="tsx">
          {`
    // Path: src/routes/index.tsx
    import { component$, useContext } from "@builder.io/qwik";
    import type { DocumentHead } from "@builder.io/qwik-city";
    import { AuthContext } from "~/root";
    
    export default component$(() => {
      const auth = useContext(AuthContext);
    
      return (
        <div>
          <h1>useContext</h1>
          <p>
            Ha iniciado sesión: <strong>{auth.isLogged.value.toString()}</strong>{" "}
          </p>
          {auth.isLogged.value == true ? (
            <p>El nombre del usuario es {auth.userName}</p>
          ) : (
            <p>No hay un usuario que haya iniciado sesión</p>
          )}
          <button onClick$={() => auth.login()}>Login</button>
          <button onClick$={() => auth.logout()}>Logout</button>
          <User />
        </div>
      );
    });
          `}
        </code>
      </pre>
      <Video src="../../../../videos/usecontext-component.mov" />
      <p>
        ¡Espero que te haya parecido interesante! ¡Te veo en la próxima lección!
      </p>

      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/use-store/"
        buttonPrevLabel="Volver a ver useStore"
        buttonNextUrl="/cursos/qwik/basicos/use-on/"
        buttonNextLabel="Ir a useOn"
      />
    </div>
  );
});
