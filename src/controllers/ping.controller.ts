import { getRuntime } from "../utils/runtime.util";

export const ping = () => {
    return {
        message: "Halo! Ini API sederhana dengan Elysia untuk PING",
        runtime: getRuntime(),
        timestamp: new Date().toISOString(),
    };
};
