import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { news } from "~/data/news";

export default component$(() => {
  const sortedNews = news.sort((a, b) => b.id - a.id);

  return (
    <>
      <h1>Estas son las novedades</h1>

      <h2>Logs del curso</h2>
      <dl>
        {sortedNews.map((newsElement) => (
          <div
            key={newsElement.id}
            class="flex gap-4 mt-4 flex-wrap md:flex-nowrap"
          >
            <dt class="w-[100px]">
              <strong>{newsElement.date}</strong>
            </dt>
            <dd class="text-center w-[100px]">{newsElement.version}</dd>
            <div class="block w-full">
              {newsElement.actions.map((action) => (
                <dd>- {action}</dd>
              ))}
            </div>
          </div>
        ))}
      </dl>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik Docs Starter",
};
