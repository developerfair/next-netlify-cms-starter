import React from "react";
import Head from "next/head";
import { attributes } from "../content/header.md";
import { Navbar } from "./Navbar";

export const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>{attributes.title}</title>
      <meta name="description" content={attributes.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" href="/favicon.ico" />

      <link
        href="https://fonts.googleapis.com/css?family=Inter&display=swap"
        rel="stylesheet"
      />
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Head>
    <Navbar />
    <main>{children}</main>
  </>
);
