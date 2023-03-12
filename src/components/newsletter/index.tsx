import { $, component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  // EMAIL

  const formUrl = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const formStore = useStore({
    email: "",
    isSubmitted: false,
  });

  const handleSubmit = $(async (event: any) => {
    event.preventDefault();

    // Use the Mailchimp API to submit the form data
    formStore.isSubmitted = true;

    const response = await fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: formStore.email,
        status: "subscribed",
        // merge_fields: {
        //   FNAME: firstName,
        //   LNAME: lastName
        // }
      }),
    });

    // Handle any errors that occur
    if (!response.ok) {
      console.error("Failed to submit form:", response);
      return;
    }

    // Display a success message
    console.log("Form submitted successfully!");
  });

  return (
    <form
      onSubmit$={handleSubmit}
      action={import.meta.env.VITE_FORMSPREE_ENDPOINT}
      method="POST"
      noValidate
      target="_blank"
    >
      <p>
        ¡Ahora mismo estamos de construcciones, estoy preparando un montón de
        contenido interesante para ti. Si no te quieres perder nada,{" "}
        <strong>¡te recomiendo que te suscribas a mi newsletter!</strong>
      </p>
      <div class="flex flex-col gap-4">
        <label>
          <input
            onChange$={(event) => (formStore.email = event.target.value)}
            placeholder="Correo"
            type="email"
            name="EMAIL"
          />
        </label>

        {formStore.isSubmitted ? (
          <p class="text-green-500 text-xs">¡Gracias por suscribirte!</p>
        ) : (
          <button
            class="custom-link max-w-fit mx-auto"
            data-do-not-redirect
            type="submit"
          >
            Enviar
          </button>
        )}
      </div>
    </form>
  );
});
