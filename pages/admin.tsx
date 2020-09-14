import React from "react";
import dynamic from "next/dynamic";
import { IndexPreview } from "../components/admin/IndexPreview";
import { NavbarPreview } from "../components/admin/NavbarPreview";
import { FooterPreview } from "../components/admin/FooterPreview";

const AdminWithNoSSR = dynamic(
  () =>
    import("netlify-cms-app").then((CMS: any) => {
      CMS.registerPreviewStyle("/admin/main.css");
      CMS.registerPreviewTemplate("navbar", NavbarPreview);
      CMS.registerPreviewTemplate("index", IndexPreview);
      CMS.registerPreviewTemplate("footer", FooterPreview);
      CMS.init();
    }) as any,
  { ssr: false }
);

export default AdminWithNoSSR;
