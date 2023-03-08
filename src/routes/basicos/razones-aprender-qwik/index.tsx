import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <h1>Razones para aprender Qwik</h1>

      <p>
        {" "}
        Esta es una pregunta muy subjetiva, y lejos de responderte con una
        respuesta técnica y superabstracta, te quiero decir sencillamente que{" "}
        <strong>por comodidad</strong>. Me explico: viniendo del universo React,
        puedo afirmar que vengo de un ambiente muy cómodo. Y Qwik me recuerda en
        muchas cosas a React, y me hace sentir igual o más cómodo. Ahora mismo
        Qwik todavía no es <i>production-ready</i> como se suele decir, pero os
        aseguro que tiene mucho potencial. Te lo explico de una forma accesible.
      </p>

      <p>
        <strong>DISCLAIMER:</strong> si quieres una razón más técnica de la que
        te voy a dar, te invito a que le eches un vistazo a la documentación
        oficial, y que la guardes en favoritos, porque echaremos unos buenos
        momentos ahí.
      </p>

      <h2>Framework basado en componentes</h2>
      <p>
        Esto no es una novedad, muchísimos de los frameworks de JavaScript en la
        actualidad funcionan de la misma forma. Tenemos un componente al que le
        pasamos unos <i>params</i> y ya empieza la magia: ya tenemos componentes
        modulares.
      </p>

      <pre>
        <code class="language-tsx">
          <span class="token comment">
            // File: src/routes/some/path/index.tsx
          </span>
          <span class="token keyword">import</span>{" "}
          <span class="token punctuation"></span> component${" "}
          <span class="token punctuation"></span>{" "}
          <span class="token keyword">from</span>{" "}
          <span class="token string">'@builder.io/qwik'</span>
          <span class="token punctuation">;</span>
          <span class="token comment">// Notice the default export</span>
          <span class="token keyword">export</span>{" "}
          <span class="token keyword">default</span>{" "}
          <span class="token function">component$</span>
          <span class="token punctuation">(</span>
          <span class="token punctuation">(</span>
          <span class="token punctuation">)</span>{" "}
          <span class="token operator">=&gt;</span>{" "}
          <span class="token punctuation"></span>
          <span class="token keyword">return</span>{" "}
          <span class="token tag">
            <span class="token tag">
              <span class="token punctuation">&lt;</span>h1
            </span>
            <span class="token punctuation">&gt;</span>
          </span>
          <span class="token plain-text">Hello World!</span>
          <span class="token tag">
            <span class="token tag">
              <span class="token punctuation">&lt;/</span>h1
            </span>
            <span class="token punctuation">&gt;</span>
          </span>
          <span class="token punctuation">;</span>
          <span class="token punctuation"></span>
          <span class="token punctuation">)</span>
          <span class="token punctuation">;</span>
        </code>
      </pre>
    </div>
  );
});
