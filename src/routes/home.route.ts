import { Elysia } from "elysia";
import { getHomeMessage } from "../controllers/home.controller";

const homeRoute = new Elysia();

homeRoute.get("/", () => getHomeMessage());

export default homeRoute;
