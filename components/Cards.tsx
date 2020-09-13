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
  <section
    id="yourSoftware"
    className="section py-8 md:py-16 bg-brand-bg overflow-hidden max-w-full"
  >
    <div className="relative max-w-screen-xl container mx-auto md:m-x-0">
      <div className="px-6 md:flex-col md:flex md:justify-between ">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-color mb-8">
          <Markdown>{header}</Markdown>
        </h2>

        {images?.length > 0 && (
          <img
            src={images[0].url}
            className="my-8 mx-auto w-80"
            alt={images[0].altText}
          />
        )}
      </div>
      <div className="mx-auto max-w-screen-xl pb-8 sm:pb-0 lg:px-6">
        <div className="py-4 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:items-stretch scrollTrigger">
          {cards.map((card, index) => (
            <Card {...card} key={index} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Card = ({ image, header, subHeader, detail, footer }: CardProps) => {
  return (
    <div className="feature md:border-gray-200 border md:border-b sm:p-4 bg-white items-center h-full hover:border-brand-color transition-colors duration-300">
      <div className="flex flex-col lg:flex-row flex-no-wrap">
        <span className="flex justify-center items-start lg:items-center flex-shrink-0 py-4">
          <img src={image.url} alt={image.altText} className="w-24 h-24" />
        </span>
        <div className="flex w-full flex-col p-4 lg:py-4 lg:px-6">
          <h3 className="flex font-semibold items-center flex-no-wrap w-full text-brand-800 mb-2">
            {header}
          </h3>
          <div className="text-lg text-brand-text-gray">
            <Markdown>{detail}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};
