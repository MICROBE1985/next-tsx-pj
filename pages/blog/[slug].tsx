import { getPostBySlug, getAllSlugs } from "../../libs/client";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import Link from "next/link";
import Image from "next/image";
import { GetStaticPropsContext } from "next";

// 非同期処理
// Dinamic Routes
// getStaticPathsはgetStaticPropsとセットで使う(Next.js)

// getStaticPathsの中にDynamic Routesから
// 渡されるオブジェクトと同様のものを用意しておくと、
// ビルドの際にcontextを通してgetStaticPropsに渡され、プリレンダリングが行われる

// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs();
  return {
    paths: allSlugs.map(({ slug }: { slug: string }) => `/blog/${slug}`),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // const slug = context.params.slug;
  const slug = context.params?.slug || "";
  const post = await getPostBySlug(String(slug));
  // const description = extractText(post.content);

  // 指定したslugの記事の内容が取得できている
  // console.log(post);

  return {
    props: {
      // hoge: "ここで「hoge」を指定している",
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
      mentalmap: post.mentalmap,
    },
  };
}
type Eyecatch = {
  url: string;
  width: number;
  height: number;
};

type Props = {
  hoge: string;
  title: string;
  publish: string;
  content: string;
  mentalmap: string;
  eyecatch: Eyecatch;
  categories: Array<{ name: string; slug: string }>;
};

export default function Schedule({
  hoge,
  title,
  publish,
  content,
  eyecatch,
  categories,
  mentalmap,
}: Props) {
  return (
    // JSX
    <>
      <h2>{hoge}</h2>
      <h1>{title}</h1>
      <figure className="ofi">
        <Image
          src={eyecatch.url}
          alt=""
          width={eyecatch.width}
          height={eyecatch.height}
        />
      </figure>
      <p>{publish}</p>
      <ul>
        {categories.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/blog/category/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: mentalmap }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
