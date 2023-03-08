import { component$ } from "@builder.io/qwik";
import {
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
      default:
        return <IconInfo />;
    }
  }

  return renderIcon(icon);
});

//
