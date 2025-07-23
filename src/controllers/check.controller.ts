import { getRuntime } from "../utils/runtime.util";

// Simulasi beban kerja selama 1 detik
const simulateWork = () => {
    const start = Date.now();
    while (Date.now() - start < 1000) {
        // Loop kosong selama 1 detik
    }
};

export const checkPerformance = () => {
    const start = process.hrtime.bigint();

    simulateWork(); // Beban kerja 1 detik

    const end = process.hrtime.bigint();
    const duration = Number(end - start) / 1_000_000; // Konversi ke milidetik

    return {
        message: "Tes kinerja 1 detik selesai",
        runtime: getRuntime(),
        duration_ms: duration,
        timestamp: new Date().toISOString(),
    };
};
