import { Elysia } from "elysia";
import { ping } from "../controllers/ping.controller";
import { runtimeInfo } from "../controllers/runtime.controller";

const apiRoute = new Elysia({ prefix: "/api/v1" })
    .get("/ping", () => ping())
    .get("/runtime", () => runtimeInfo());

export default apiRoute;
