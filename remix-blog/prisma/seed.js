const { PrismaClient } = require("@prisma/client");
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
    { title: "First Title", content: "first post content" },
    { title: "Second Title", content: "second post content" },
    { title: "Third Title", content: "third post content" },
    { title: "Fourth Title", content: "fourth post content" },
  ];
}
