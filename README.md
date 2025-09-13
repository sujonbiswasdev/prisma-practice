

    npm install prisma @prisma/client


    // prisma/schema.prisma
    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }

    generator client {
      provider = "prisma-client-js"
    }


    npx prisma migrate dev --name init


    npx prisma generate

    npx prisma studio