import React from "react";
import { Markdown } from "./Markdown";
import { Image } from "./Hero";

export type SectionProps = {
  id: string;
  type: string;
  header?: string;
  subHeader?: string;
  detail?: string;
  images: Image[];
  footer?: string;
};
export const FullWidth: React.FC<SectionProps> = ({
  id,
  type,
  header,
  subHeader,
  detail,
  images,
  footer,
}) => (
  <section className="flex flex-col w-full items-start justify-center mt-8 bg-brand-bg p-4">
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-color mb-8">
      <Markdown>{header}</Markdown>
    </h2>
    {subHeader && (
      <h4 className="text-2xl md:text-3xl leading-tight text-brand-color mb-8">
        <Markdown>{subHeader}</Markdown>
      </h4>
    )}
    {images?.length > 0 && (
      <img
        src={images[0]?.url}
        className="w-full h-48 lg:h-60"
        alt={images[0]?.altText}
      />
    )}
    <div className="text-lg lg:text-xl text-brand-text-gray py-6">
      <span>{detail}</span>
    </div>
    <Markdown>{footer}</Markdown>
  </section>
);
