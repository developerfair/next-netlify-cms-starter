import React from "react";
import { Markdown } from "./Markdown";
import { Image } from "./Hero";
import { SectionProps } from "./FullWidth";

export const TwoColsImagesLeft: React.FC<SectionProps> = ({
  id,
  type,
  header,
  subHeader,
  detail,
  images,
  footer,
}) => (
  <section>
    <div className="flex mb-4">
      <div className="w-1/4 p-4">
        {images?.length > 0 && (
          <img
            src={images[0].url}
            className="w-full h-48 lg:h-60"
            alt={images[0].altText}
          />
        )}
      </div>
      <div className="w-3/4">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-color mb-2">
          <Markdown>{header}</Markdown>
        </h2>
        <div className="text-lg lg:text-xl text-brand-text-gray">
          <span>{detail}</span>
        </div>
      </div>
    </div>
  </section>
);
