const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const test = await prisma.user.create({
    data: {
      name: "developer",
      passwordHash:
        "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
    },
  });

  await Promise.all(
    getPosts().map((post) => {
      const data = { userId: test.id, ...post };
      return prisma.post.create({ data });
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
