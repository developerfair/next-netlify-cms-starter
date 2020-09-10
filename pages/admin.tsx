import React from "react";
import dynamic from "next/dynamic";

const AdminWithNoSSR = dynamic(
  () =>
    import("netlify-cms-app").then((CMS: any) => {
      CMS.registerPreviewStyle("/styles/tailwind.css");
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
