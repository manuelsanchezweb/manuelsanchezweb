import {
  $,
  component$,
  Slot,
  useOnWindow,
  useVisibleTask$,
} from "@builder.io/qwik";
import Aside from "~/components/aside";
import Navigation from "~/components/navigation";

export default component$(() => {
  const initHandleLinks = $(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth > 640) return;
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        const navButton = document.querySelector(
          "#nav-button"
        ) as HTMLButtonElement;
        if (!navButton) return;
        navButton.click();
      });
    });
  });

  useOnWindow(
    "resize",
    $(() => {
      initHandleLinks();
    })
  );

  useVisibleTask$(() => {
    initHandleLinks();
  });

  return (
    <>
      <Navigation />
      <Aside />
      <div class="p-4 sm:ml-64">
        <div class="mt-14">
          <Slot />
        </div>
      </div>
    </>
  );
});
