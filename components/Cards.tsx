import React from "react";
import { Markdown } from "./Markdown";
import { Image } from "./Hero";
import { SectionProps } from "./FullWidth";

type LinkProps = {
  title?: string;
  url?: string;
};

type FooterProps = {
  detail: string;
  link: LinkProps;
};

type CardProps = {
  image?: Image;
  header?: string;
  subHeader?: string;
  detail?: string;
  footer?: FooterProps;
};

export const Cards: React.FC<SectionProps & { cards: CardProps[] }> = ({
  id,
  type,
  header,
  subHeader,
  detail,
  images,
  footer,
  cards,
}) => (
  <section className="flex flex-wrap flex-row w-full items-start justify-center mt-8">
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-color mb-8">
      <Markdown>{header}</Markdown>
    </h2>
    {images?.length > 0 && (
      <img
        src={images[0].url}
        className="h-48 lg:h-60"
        alt={images[0].altText}
      />
    )}
    <div className="mt-4 flex flex-col">
      {cards.map((card, index) => (
        <div key={index}>
          {card.image && (
            <img
              src={card.image.url}
              className="h-48 lg:h-60"
              alt={card.image.altText}
            />
          )}
          {card.header}
        </div>
      ))}
    </div>
  </section>
);
