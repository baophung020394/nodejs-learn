import { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./data.db", // Đảm bảo đường dẫn đúng
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./migrations",
        },
    },
};

export default config;
