import { getAllSlugs, client } from "../../libs/client";
import Link from "next/link";
import Image from "next/image";
import Hero from "../../components/hero";
// import ConvertDate from "components/convert-date";
import ConvertDate from "../../components/convertdate";

import styles from "styles/cardlist.module.scss";

//SSG
export async function getStaticProps() {
  const posts = await getAllSlugs();
  console.log(posts);
  return {
    props: {
      posts: posts,
    },
  };
}
// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "blogs" });

//   変数dataの中に各記事のAPIスキーマが取得できているのが確認できる
//   console.log(data);

//   return {
//     props: {
//       blog: data.contents,
//     },
//   };
// };
export default function Home({
  posts,
}: {
  posts: Array<{
    title: string;
    slug: string;
    eyecatch: { url: string; width: number; height: number };
    publishDate: string;
    categories: string;
  }>;
}) {
  return (
    <>
      <Hero title="Blogページ" subtitle="Blogページサブタイトル" />

      <ul className={styles["card-list"]}>
        {posts.map(({ title, slug, eyecatch, publishDate, categories }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`} />
            <div className={styles["img-box"]}>
              <Image
                src={eyecatch.url}
                alt=""
                width={eyecatch.width}
                height={eyecatch.height}
              />
            </div>
            <div className={styles["txt-box"]}>
              <p>{`/blog/${slug}`}</p>
              <p>{publishDate}</p>
              <ConvertDate convertDate={publishDate}></ConvertDate>
              {/* <p>{categories}</p> */}
              <p className={styles["ttl"]}>{title}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
