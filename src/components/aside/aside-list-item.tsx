import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import IconSwitcher from "../icon-switcher";

type AsideListItemProps = {
  url: string;
  icon: string; // This will be only available from a list
  label: string;
};

export const AsideListItem = component$(
  ({
    url = "/",
    icon = "info",
    label = "Default text",
  }: AsideListItemProps) => {
    const location = useLocation();

    return (
      <li>
        <Link
          href={url}
          class={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100" ${
            location.url.pathname == url ? "!font-semibold" : ""
          }`}
        >
          <IconSwitcher icon={icon} />

          <span class="ml-3">{label}</span>
        </Link>
      </li>
    );
  }
);
