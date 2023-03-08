import { component$ } from "@builder.io/qwik";
import { ButtonNext } from "./button-next";
import { ButtonPrev } from "./button-prev";

type NavigationProps = {
  buttonPrevUrl?: string;
  buttonPrevLabel?: string;
  buttonNextUrl?: string;
  buttonNextLabel?: string;
};

export default component$(
  ({
    buttonPrevUrl,
    buttonNextUrl,
    buttonPrevLabel = "Anterior",
    buttonNextLabel = "Siguiente",
  }: NavigationProps) => {
    return (
      <div class="flex items-center my-6 justify-end">
        {buttonPrevUrl && (
          <ButtonPrev
            buttonPrevUrl={buttonPrevUrl}
            buttonPrevLabel={buttonPrevLabel}
          />
        )}
        {buttonNextUrl && (
          <ButtonNext
            buttonNextUrl={buttonNextUrl}
            buttonNextLabel={buttonNextLabel}
          />
        )}
      </div>
    );
  }
);
