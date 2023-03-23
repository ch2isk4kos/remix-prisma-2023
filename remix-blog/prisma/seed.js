const { PrismaClient } = require("@prisma-client");
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({ data: post });
    })
  );
}

seed();

function getPosts() {
  return [
    { title: "Title 1", content: "title one content" },
    { title: "Title 2", content: "title two content" },
    { title: "Title 3", content: "title three content" },
    { title: "Title 4", content: "title four content" },
  ];
}
