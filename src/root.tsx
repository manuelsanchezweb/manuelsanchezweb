import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

// TODO: fix this with SSR
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";

// hljs.registerLanguage("javascript", javascript);
// console.log(hljs);

import "./global.css";
// import { hljs } from "./highlight";

export default component$(() => {
  // useBrowserVisibleTask$(() => {
  //   // console.log(hljs);
  //   // @ts-ignore
  //   hljs.highlightAll();
  // });

  /*
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/mono-blue.min.css"
        ></link>
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
        <script>hljs.highlightAll();</script>
      </body>
    </QwikCityProvider>
  );
});
