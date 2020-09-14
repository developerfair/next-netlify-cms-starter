import React from "react";
import { Markdown } from "./Markdown";

export type Image = {
  url: string;
  altText: string;
  title: string;
};
export type HeroProps = {
  id: string;
  type: string;
  header?: string;
  subHeader?: string;
  detail?: string;
  image?: Image;
  video?: string;
  footer?: string;
};
export const Hero: React.FC<HeroProps> = ({
  id,
  type,
  header,
  subHeader,
  detail,
  image,
  video,
  footer,
}) => (
  <section className="mt-8 ml-8 lg:grid lg:grid-cols-12 lg:gap-8">
    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
      <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
        <Markdown>{header}</Markdown>
      </h2>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        {detail}
      </p>
    </div>
    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
      <div className="relative mx-auto w-full p-4">
        <img className="w-1/2" src={image?.url} alt={image?.altText} />
      </div>
    </div>
  </section>
);
