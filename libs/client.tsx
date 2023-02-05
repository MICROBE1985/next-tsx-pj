import { createClient } from "microcms-js-sdk";

const serviceDomain = process.env.SERVICE_DOMAIN;
const apiKey = process.env.API_KEY;

if (!serviceDomain || !apiKey) {
  throw new Error("Missing SERVICE_DOMAIN and/or API_KEY in .env.local");
}
// .env.localファイルを作成して、APIキーが第三者に見られないように
export const client = createClient({
  serviceDomain,
  apiKey,
});

// GET /api/v1/{endpoint}
// https://document.microcms.io/content-api/get-list-contents

// 一つの記事
export async function getPostBySlug(slug: string) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: {
        filters: `slug[equals]${slug},categories`,
      },
    });
    return post.contents[0];
  } catch (err) {
    console.log("~~ getPostBySlug ~~");
    console.log(err);
  }
}

// 記事一覧の関数
export async function getAllSlugs(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "title,slug,eyecatch,publishDate,categories",
        orders: "-publishDate",
        limit: limit,
        offset: 0,
        q: "",
      },
    });
    return posts.contents;
  } catch (err) {
    console.log("~~ getAllSlugs ~~");
    console.log(err);
  }
}
