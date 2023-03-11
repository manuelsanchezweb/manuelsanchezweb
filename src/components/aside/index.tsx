import { component$ } from "@builder.io/qwik";
import { AsideListItem } from "./aside-list-item";
import { Basics } from "./basics";
import { Projects } from "./projects";

export default component$(() => {
  return (
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 pb-10 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul class="space-y-2 mt-1">
          {/* About this course */}
          <AsideListItem
            url="/cursos/qwik/"
            label="Sobre el curso"
            icon="info"
          />
          <Basics />
          <Projects />
          <hr />
          <AsideListItem
            url="/cursos/qwik/materiales-complementarios/"
            label="Mat. Complementario"
            icon="tools"
          />
          <AsideListItem
            url="/cursos/qwik/novedades/"
            label="Novedades"
            icon="versions"
          />
        </ul>
      </div>
    </aside>
  );
});
