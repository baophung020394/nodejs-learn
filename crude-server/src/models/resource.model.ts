import db from "../database/knex";

export interface Resource {
    id?: number;
    name: string;
    description: string;
}

export const getAllResources = async (filter?: string) => {
    return db("resources").where("name", "like", `%${filter || ""}%`);
};

export const getResourceById = async (id: number) => {
    return db("resources").where({ id }).first();
};

export const createResource = async (resource: Resource) => {
    return db("resources").insert(resource);
};

export const updateResource = async (id: number, resource: Resource) => {
    return db("resources").where({ id }).update(resource);
};

export const deleteResource = async (id: number) => {
    return db("resources").where({ id }).del();
};
