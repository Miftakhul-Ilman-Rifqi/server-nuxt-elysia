import { getRuntime } from "../utils/runtime.util";

export const runtimeInfo = () => {
    return {
        runtime: getRuntime(),
        version:
            typeof Bun !== "undefined" ? Bun.version : process.versions.node,
        platform: process.platform,
        timestamp: new Date().toISOString(),
    };
};
