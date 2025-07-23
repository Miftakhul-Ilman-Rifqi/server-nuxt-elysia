import { Elysia } from "elysia";
import homeRoute from "./routes/home.route";
import apiRoute from "./routes/api.route";

const app = new Elysia();

app.use(homeRoute);
app.use(apiRoute);

// Hanya jalankan server lokal jika tidak di Vercel
if (process.env.VERCEL !== "1") {
    app.listen(3000, ({ hostname, port }) => {
        console.log(`🦊 Server berjalan di http://${hostname}:${port}`);
    });
}

export default app;
