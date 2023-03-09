import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { projects } from "~/data/projects";
import { AsideListItemDropdown } from "./aside-list-item-dropdown";

export const Projects = component$(() => {
  const location = useLocation();
  const dropdownId: string = "dropdown-projects";

  return (
    <li>
      <AsideListItemDropdown
        url="/cursos/qwik/proyectos/"
        icon="jetpack"
        locationUrl={location.url.pathname}
        label="Proyectos"
        dropdownId={dropdownId}
        isPro
      />
      <ul id={dropdownId} class="hidden py-1 space-y-2">
        {projects.map((element) => (
          <li key={element.id}>
            <Link
              href={element.url}
              class={`flex items-center w-full p-1 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 ${
                location.url.pathname == element.url ? "!font-semibold" : ""
              }`}
            >
              <span>{element.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
});
