1.  Criar projeto pelo [vite](https://vite.dev/guide/)

    > Obs.: Usar Node 18+

    > npm create vite@latest NOME_PROJETO -- --template vue-ts

2.  Ajustar tsconfig para reconhecer `@/`
    ***
        "baseUrl": ".",
            "paths": {
            "@/*": ["./src/*"]
            }
    ***
3.  Ajustar vite.config para reconhecer envs e outras configs

    > Obs.: Instalar o `@types/node` em devDependencies

    > Obs2.: Criar arquivo `.env` e adicionar no gitignore

    ***

        import { defineConfig, loadEnv } from "vite";
        import vue from "@vitejs/plugin-vue";
        import * as path from "path";

        // https://vitejs.dev/config/
        export default defineConfig(async ({ mode }) => {
        const env = loadEnv(mode, process.cwd(), "");
        const envObj: Record<string, string> = {};

        Object.keys(env)
            .filter((val) => /VUE_APP_/.test(val))
            .forEach((val) => (envObj[val] = env[val]));

        envObj["TESTE"] = env.TESTE;
        return {
            plugins: [vue()],
            server: {
            port: 8080,
            },
            resolve: {
            alias: { "@": path.resolve(__dirname, "./src") },
            },
            define: {
            "process.env": envObj,
            },
        };
        });

    ***

4.  Instalar [Vue-router](https://router.vuejs.org/installation.html)

    > npm install vue-router@4

    a. Criar arquivo router.ts

    ***

        import { createMemoryHistory, createRouter } from "vue-router";

        import HomeView from "@/views/HomeView.vue";

        const routes = [{ path: "/", component: HomeView }];

        export const router = createRouter({
        history: createMemoryHistory(),
        routes,
        });

    ***

    b. Criar views/HomeView.vue

    ***

        <script setup lang="ts">
        </script>

        <template>
            <h1>teste</h1>
        </template>

    ***

    c. Ajustar import do router

    ***

        import { router } from "./router";

        const app = createApp(App);
        app.use(router);
        app.mount("#app");

        <!-- Adicionar RouterView no App.vue -->
        <RouterView />

    ***

5.  Instalar [btree-pine](https://www.npmjs.com/package/pine-btree)

    > npm i pine-btree

    ***

        import pine from "pine-btree";

        app.use(pine)


          <!-- No App da aplicação inserir o PineApp para obter toda configuração necessária no projeto -->

          <PineApp>
           <TheRestOfYourApplication />
          </PineApp>

    ***

   Opcionais
A. Variaveis SCSS Globais
> Criar arquivo @/assets/_variables.scss como exemplo abaixo
***
    $color-yellow: #ffc100;
    $color-green: #009b1f;
    $color-blue: #005fdf;
    
    $breakpoint-mobile: 700px;
    $breakpoint-tablet: 1050px;
***
>  Ajustar vite.config para carregar as variaveis em todos arquivos.

***
    {
    ...
    css: {
          preprocessorOptions: {
            scss: {
              additionalData: `@use "@/assets/_variables.scss" as vars;`,
            },
          },
        },
    ...
    }
***
