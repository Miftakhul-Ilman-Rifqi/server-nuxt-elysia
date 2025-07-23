export const getRuntime = () => {
    return typeof Bun !== "undefined" ? "Bun" : "Node.js";
};
