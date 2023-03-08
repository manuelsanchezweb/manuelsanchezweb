import { component$ } from "@builder.io/qwik";
import IconSwitcher from "../icon-switcher";

type CustomLinkProps = {
  url: string;
  icon?: string;
  text: string;
};

export default component$(
  ({
    url = "https://github.com/orgs/manuelsanchezweb/repositories",
    icon,
    text,
  }: CustomLinkProps) => {
    return (
      <a
        target="_blank"
        rel="nofollow noopener"
        title={text}
        style={{ lineHeight: 1 }}
        class="custom-link"
        href={url}
      >
        {icon && <IconSwitcher icon={icon} />}
        <span>{text}</span>
      </a>
    );
  }
);
