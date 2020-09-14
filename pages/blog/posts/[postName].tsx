import { Layout } from "../../../components/Layout";
import React from "react";
import { Markdown } from "../../../components/Markdown";

type BlogPostProps = {
  title?: string;
  author?: string;
  date?: string;
  featuredImage: string;
};
type Props = {
  attributes: BlogPostProps;
  markdown: any;
};
export default function BlogPost({ attributes, markdown }: Props) {
  return (
    <Layout>
      <div className="p-8">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: "24em" }}
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
            }}
          ></div>
          <img
            src={attributes.featuredImage}
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              {attributes.title}
            </h2>
            <div className="flex mt-3">
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {attributes.author}
                </p>
                <p className="font-semibold text-gray-400 text-xs">
                  {attributes.date
                    ? new Date(attributes.date).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : null}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-0 mt-12 text-gray-900 max-w-screen-md mx-auto text-lg leading-relaxed">
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postName } = ctx.params;

  const { attributes, body } = await import(
    `../../../content/blog/posts/${postName}.md`
  );

  return {
    props: {
      attributes,
      markdown: body,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      return slug;
    });
    return data;
  })(require.context("../../../content/blog/posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/blog/posts/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
