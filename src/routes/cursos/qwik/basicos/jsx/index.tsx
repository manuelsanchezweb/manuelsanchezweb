import { component$ } from "@builder.io/qwik";
import Pagination from "~/components/pagination";

export default component$(() => {
  return (
    <div>
      <h1>JSX and Qwik</h1>
      <p>
        JSX es una extensión de la sintaxis de JavaScript que se utiliza en
        muchos frameworks en la actualidad. Es una herramienta que nos permite
        introducir código que parece (es) HTML dentro de un archivo JavaScript,
        o en este caso <code>.tsx</code>.
      </p>
      <p>
        Lo hemos estado viendo en las lecciones anteriores, y aunque dominar JSX
        se escapa del alcance de este curso introductorio de Qwik, sí me
        gustaría explicar que hay que dominarlo si queremos dominar Qwik, ya que
        estaremos utilizando todo el poder que nos da, a la hora de por ejemplo
        hace <code>conditional rendering</code>, <code>map</code> o con{" "}
        <code>conditional classes</code>.
      </p>
      <Pagination
        buttonPrevUrl="/cursos/qwik/basicos/lazy-loading/"
        buttonPrevLabel="Volver a ver Lazy Loading"
        buttonNextUrl="/cursos/qwik/basicos/integraciones/"
        buttonNextLabel="Ir a Integraciones"
      />
    </div>
  );
});
