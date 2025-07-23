import { getRuntime } from "../utils/runtime.util";

export const getHomeMessage = () => {
    return {
        message: "Halo! Ini API sederhana dengan Elysia",
        runtime: getRuntime(),
        timestamp: new Date().toISOString(),
    };
};
