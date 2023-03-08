import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import IconSwitcher from "../icon-switcher";
import { QwikLogo3 } from "../icons/qwik";

export default component$(() => {
  const version = import.meta.env.VITE_APP_VERSION;

  return (
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-start sm:items-end justify-between sm:justify-center">
          <div class="sm:hidden flex items-center justify-start">
            <button
              id="nav-button"
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex items-end justify-between w-full">
            <Link
              href="/"
              class="flex items-end ml-3 gap-2"
              style={{ lineHeight: 1 }}
            >
              Curso de Qwik
              <QwikLogo3 />
              <small class="text-gray-500">{version}</small>
            </Link>
            <small class="hidden sm:flex">
              <a
                style={{ lineHeight: 1 }}
                class="flex items-end gap-2"
                href="https://github.com/orgs/manuelsanchezweb/repositories"
              >
                <IconSwitcher icon="github" />
                <span> manuelsanchezweb</span>
              </a>
            </small>
          </div>
        </div>
      </div>
    </nav>
  );
});
