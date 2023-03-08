import { component$ } from "@builder.io/qwik";

const code = "p { color: red }";

export default component$(() => {
  return (
    <div>
      <pre data-src="prism.js">
        <code class="language-css">{code}</code>
      </pre>
    </div>
  );
});
