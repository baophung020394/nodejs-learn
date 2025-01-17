import { Request, Response } from "express";
import {
    getAllResources,
    getResourceById,
    createResource,
    updateResource,
    deleteResource,
} from "../models/resource.model";

export const listResources = async (req: Request, res: Response) => {
    const { filter } = req.query;
    const resources = await getAllResources(filter as string);
    res.json(resources);
};

export const getResource = async (req: Request, res: Response) => {
    const { id } = req.params;
    const resource = await getResourceById(Number(id));
    if (resource) res.json(resource);
    else res.status(404).json({ message: "Resource not found" });
};

export const createResourceHandler = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const [id] = await createResource({ name, description });
    res.status(201).json({ id });
};

export const updateResourceHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;
    await updateResource(Number(id), { name, description });
    res.json({ message: "Resource updated" });
};

export const deleteResourceHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    await deleteResource(Number(id));
    res.json({ message: "Resource deleted" });
};
