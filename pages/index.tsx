import { attributes } from "../content/index.md";
import { Layout } from "../components/Layout";
import React from "react";
import { Hero, HeroProps } from "../components/Hero";
import { FullWidth, SectionProps } from "../components/FullWidth";
import { TwoColsImagesLeft } from "../components/TwoColsImagesLeft";
import { TwoColsImagesRight } from "../components/TwoColsImagesRight";
import { Cards } from "../components/Cards";

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
          case "twoColsImageLeft":
            return <TwoColsImagesLeft key={index} {...section} />;
          case "twoColsImageRight":
            return <TwoColsImagesRight key={index} {...section} />;
          case "cardSection":
            return <Cards key={index} {...section} />;
          default:
            return null;
        }
      })}
    </Layout>
  );
}
