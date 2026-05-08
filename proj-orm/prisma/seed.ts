import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Jonatan",
        email: "jonatan@email.com",
      },
      {
        name: "Bruno",
        email: "bruno@email.com",
      },
      {
        name: "Mikael",
        email: "mikael@email.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded");
  prisma.$disconnect();
});
