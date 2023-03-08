import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { basics } from "~/data/basics";
import { AsideListItemDropdown } from "./aside-list-item-dropdown";

export const Basics = component$(() => {
  const location = useLocation();
  const dropdownId: string = "dropdown-basics";

  return (
    <li>
      <AsideListItemDropdown
        url="/basicos/"
        icon="learn"
        locationUrl={location.url.pathname}
        label="Básicos"
        dropdownId={dropdownId}
      />
      <ul id={dropdownId} class="py-1 space-y-2">
        {basics.map((element) => (
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
