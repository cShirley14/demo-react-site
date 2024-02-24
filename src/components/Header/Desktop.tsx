import { Box, Link } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { Icon } from "./Icon";
import { links } from "../../schemas/profileConstants";

export const Desktop = () => (
  <>
    <Box m={["0", ".2em 1em"]}>
      <NavLink color="whiteAlpha.900" href="#top" text="Cloud Druid 👋🏽" />
    </Box>
    {links.slice(1, 4).map((l) => {
      return (
        <NavLink key={l.name} href={l.href} text={l.name!} icon={l.icon!} />
      );
    })}
    {links.slice(4, 6).map((l) => {
      return (
        <Link key={l.name} aria-label={l.ariaLabel} href={l.href}>
          <Icon icon={l.icon!} />
        </Link>
      );
    })}
  </>
);
