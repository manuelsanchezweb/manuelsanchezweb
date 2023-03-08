import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type ButtonPrevProps = {
  buttonPrevUrl: string;
  buttonPrevLabel: string;
};

export const ButtonPrev = component$(
  ({ buttonPrevUrl = "/", buttonPrevLabel }: ButtonPrevProps) => {
    return (
      <Link
        href={buttonPrevUrl}
        class="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        {buttonPrevLabel}
      </Link>
    );
  }
);
