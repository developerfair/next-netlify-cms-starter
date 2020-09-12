import { attributes } from "../content/index.md";
import { Layout } from "../components/Layout";
import React from "react";
import { Hero, HeroProps } from "../components/Hero";
import { FullWidth, FullWidthProps } from "../components/FullWidth";

type Props = {
  sections: any;
};
export default function Index({ sections = attributes.sections }: Props) {
  return (
    <Layout>
      {(sections ?? []).map((section, index) => {
        switch (section.type) {
          case "hero":
            return <Hero key={index} {...section} />;
          case "fullWidth":
            return <FullWidth key={index} {...section} />;
          default:
            return null;
        }
      })}
    </Layout>
  );
}
