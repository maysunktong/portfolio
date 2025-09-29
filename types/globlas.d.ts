import { ReactElement } from "react";

type LinkButtonTypes= {
  href: string;
  label: string;
  bg?: string,
  textColor?: string;
  icon?: ReactElement;
};

type VideoProps = {
  title: string;
  src: string | null;
};
