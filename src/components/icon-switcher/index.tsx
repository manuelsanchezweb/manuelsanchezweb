import { component$ } from "@builder.io/qwik";
import {
  IconBurger,
  IconGithub,
  IconInfo,
  IconJetpack,
  IconLearn,
  IconQwikLinear,
  IconTools,
  IconVersions,
} from "../icons";

export default component$(({ icon }: { icon: string }) => {
  function renderIcon(icon: string) {
    switch (icon) {
      case "info":
        return <IconInfo />;
      case "tools":
        return <IconTools />;
      case "jetpack":
        return <IconJetpack />;
      case "learn":
        return <IconLearn />;
      case "versions":
        return <IconVersions />;
      case "github":
        return <IconGithub />;
      case "burger":
        return <IconBurger />;
      case "qwik-linear":
        return <IconQwikLinear />;
      default:
        return <IconInfo />;
    }
  }

  return renderIcon(icon);
});

//
