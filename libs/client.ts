import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

client.user.create({
  data: {
    email: "Test",
    name: "테스트",
  },
});

//export default new PrismaClient();
