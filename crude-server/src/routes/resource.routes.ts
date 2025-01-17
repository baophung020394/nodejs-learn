import express from "express";
import {
    listResources,
    getResource,
    createResourceHandler,
    updateResourceHandler,
    deleteResourceHandler,
} from "../controllers/resource.controller";

const router = express.Router();

router.get("/resources", listResources);
router.get("/resource/:id", getResource);
router.post("/resource", createResourceHandler);
router.put("/resource/:id", updateResourceHandler);
router.delete("/resource/:id", deleteResourceHandler);

export default router;
