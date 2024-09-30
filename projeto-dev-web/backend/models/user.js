// backend/models/user.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const User = {
  createUser: async (data) => {
    return await prisma.user.create({
      data,
    });
  },
  // Adicione outras funções conforme necessário, como find, update, delete, etc.
};

module.exports = User;
