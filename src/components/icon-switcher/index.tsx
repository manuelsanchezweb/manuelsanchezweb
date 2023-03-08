import { component$ } from "@builder.io/qwik";
import {
  IconGithub,
  IconInfo,
  IconJetpack,
  IconLearn,
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
      default:
        return <IconInfo />;
    }
  }

  return renderIcon(icon);
});

//
