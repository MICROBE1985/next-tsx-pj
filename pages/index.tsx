import { getPostBySlug } from "../libs/client";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Link from "next/link";
import Image from "next/image";

type Eyecatch = {
  url: string;
  width: number;
  height: number;
  slug: string;
};

type Props = {
  title: string;
  publish: string;
  content: string;
  slug: string;
  eyecatch: Eyecatch;
  categories: Array<{ name: string; slug: string }>;
};

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  slug,
  categories,
}: Props) {
  return (
    <>
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
      <p>{`/blog/${slug}`}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export async function getStaticProps() {
  const slug = "music";
  const post = await getPostBySlug(slug);

  // 指定したslugの記事の内容が取得できている
  console.log(post);

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  };
}
