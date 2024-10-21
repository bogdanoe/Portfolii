import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        ViteSvgSpriteWrapper({
            icons: 'src/sprites/**/*.svg',///где взять иконки
            outputDir: './public',// куда положить готовый спрайт
        })
    ],
})
