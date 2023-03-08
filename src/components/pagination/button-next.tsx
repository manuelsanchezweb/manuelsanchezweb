import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type ButtonNextProps = {
  buttonNextUrl: string;
  buttonNextLabel: string;
};

export const ButtonNext = component$(
  ({ buttonNextUrl = "/", buttonNextLabel }: ButtonNextProps) => {
    return (
      <Link
        href={buttonNextUrl}
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 "
      >
        {buttonNextLabel}
        <svg
          aria-hidden="true"
          class="w-5 h-5 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </Link>
    );
  }
);
