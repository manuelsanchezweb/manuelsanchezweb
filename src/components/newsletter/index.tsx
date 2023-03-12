import { $, component$, useStore } from "@builder.io/qwik";

const formUrl = import.meta.env.VITE_MAILCHIMP_ENDPOINT;

export default component$(() => {
  const formStore = useStore({
    email: "",
    isSubmitted: false,
    isError: false,
  });

  const handleSubmit = $(async (event: any) => {
    event.preventDefault();

    // Use the Mailchimp API to submit the form data
    let selectedEmail = formStore.email;
    formStore.email = "";

    // validate email
    if (!selectedEmail || !selectedEmail.includes("@")) {
      formStore.isError = true;
      return;
    }

    formStore.isSubmitted = true;
    formStore.isError = false;

    const response = await fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: selectedEmail,
        status: "subscribed",
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
      action={formUrl}
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
        {formStore.isError == true && (
          <p class="text-red-500 text-xs">
            ¡Por favor, introduce un email válido!
          </p>
        )}
        <label>
          <input
            onChange$={(event) => {
              formStore.email = event.target.value;
            }}
            placeholder="Correo"
            type="email"
            name="EMAIL"
            value={formStore.email}
          />
        </label>

        {formStore.isSubmitted ? (
          <p class="text-green-500 text-xs">¡Gracias por suscribirte!</p>
        ) : (
          <button class="custom-link max-w-fit mx-auto" type="submit">
            Enviar
          </button>
        )}
      </div>
    </form>
  );
});
