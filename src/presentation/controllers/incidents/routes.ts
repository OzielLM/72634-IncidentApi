import { Router } from "express";
import { IncidentController } from "./controller";

export class IncidentRoutes{
    static get routes() : Router{
        const router = Router();
        const controller = new IncidentController();

        router.get("/", controller.getIncidents);

        router.post("/", controller.createIncident);

        router.get("/:id", controller.getIncidentByID);

        router.put("/:id", controller.updateIncident);

        router.delete("/:id", controller.deleteIncident);
        
        return router
    }
}