import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import IconSwitcher from "../icon-switcher";

type AsideListItemDropdownProps = {
  url: string;
  icon: string; // This will be only available from a list
  label: string;
  locationUrl: string;
  isPro?: boolean;
  dropdownId: string;
};

export const AsideListItemDropdown = component$(
  ({
    url = "/",
    icon = "info",
    label = "Default text",
    locationUrl = "/",
    isPro,
    dropdownId,
  }: AsideListItemDropdownProps) => {
    return (
      <div class="flex justify-between w-full">
        <Link
          class={`flex w-full p-2 rounded-lg hover:bg-gray-100 hover:font-bold hover:text-gray-900 focus:text-gray-900 focus:font-bold ${
            locationUrl == url ? "!font-bold" : ""
          }`}
          href={url}
        >
          <IconSwitcher icon={icon} />
          <span
            class="flex-1 ml-3 text-left whitespace-nowrap"
            sidebar-toggle-item
          >
            {label}
          </span>
        </Link>
        <button
          type="button"
          class="flex items-center text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 px-1"
          aria-controls={dropdownId}
          data-collapse-toggle={dropdownId}
        >
          {isPro ? (
            <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">
              Pro
            </span>
          ) : (
            ""
          )}

          <svg
            sidebar-toggle-item
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    );
  }
);
