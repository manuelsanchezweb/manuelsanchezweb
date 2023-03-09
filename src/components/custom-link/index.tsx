import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import IconSwitcher from "../icon-switcher";

type CustomLinkProps = {
  url: string;
  icon?: string;
  text?: string;
  linkIntern?: boolean;
};

export default component$(
  ({
    url = "https://github.com/orgs/manuelsanchezweb/repositories",
    icon,
    text,
    linkIntern = false,
  }: CustomLinkProps) => {
    return linkIntern ? (
      <Link
        title={text || icon}
        style={{ lineHeight: 1 }}
        class="custom-link"
        href={url}
      >
        {icon && <IconSwitcher icon={icon} />}
        {text && <span>{text}</span>}
      </Link>
    ) : (
      <a
        target="_blank"
        rel="nofollow noopener"
        title={text || icon}
        style={{ lineHeight: 1 }}
        class="custom-link"
        href={url}
      >
        {icon && <IconSwitcher icon={icon} />}
        {text && <span>{text}</span>}
      </a>
    );
  }
);
