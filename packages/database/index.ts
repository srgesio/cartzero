import "dotenv/config";
import { pgView, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  NODE_ENV,
} = process.env;

export const connection = {
  dbActivity: pgView("pg_stat_activity", {
    datname: text("datname"),
  }).existing(),
  db: drizzle({
    connection: {
      host: POSTGRES_HOST,
      port: Number(POSTGRES_PORT),
      user: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
      ssl: NODE_ENV === "development" ? false : true,
    },
  }),
};
