import React from "react";
import dynamic from "next/dynamic";
import { IndexPreview } from "../components/admin/IndexPreview";

const AdminWithNoSSR = dynamic(
  () =>
    import("netlify-cms-app").then((CMS: any) => {
      CMS.registerPreviewStyle("/styles/tailwind.css");
      CMS.registerPreviewTemplate("index", IndexPreview);
      CMS.init({
        config: {
          backend: {
            name: "git-gateway",
          },
        },
      });
    }) as any,
  { ssr: false }
);

export default AdminWithNoSSR;
