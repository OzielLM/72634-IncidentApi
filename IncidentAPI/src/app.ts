import express from "express";
import 'dotenv/config'
import { envs } from "./config/envs.plugin";
import { MongoDatabase } from "./data/init";
import { IncidentModel } from "./data/models/incident.model";
import { AppRoutes } from "./presentation/routes";

const app = express();

app.use(express.json());
app.use(AppRoutes.routes);

(async () => {
    await MongoDatabase.connect({ 
        dbName: "IncidentAPI", 
        mongoUrl: envs.MONGO_URL ?? "" 
    });
})();

app.listen(envs.PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${envs.PORT}`)
});
