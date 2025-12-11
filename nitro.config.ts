import { defineNitroConfig } from "nitropack/config"

// https://nitro.build/config
export default defineNitroConfig({
    preset: "cloudflare_module",
    compatibilityDate: "latest",
    srcDir: "server",
    cloudflare: {
        deployConfig: true,
        nodeCompat: true
    },
    routeRules: {
        // Налаштування CORS (важливо для mock-сервера, щоб фронтенд мав доступ)
        "/**": { cors: true },
    },
    runtimeConfig: {
        apiToken: "dev_token", // `dev_token` is the default value
    }
});
