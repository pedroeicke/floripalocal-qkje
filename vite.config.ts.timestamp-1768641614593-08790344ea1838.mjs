// vite.config.ts
import path from "path";
import { defineConfig, loadEnv } from "file:///D:/Pastel/classiweb---classificados-premium/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Pastel/classiweb---classificados-premium/node_modules/@vitejs/plugin-react/dist/index.js";
var __vite_injected_original_dirname = "D:\\Pastel\\classiweb---classificados-premium";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 3e3,
      host: "0.0.0.0"
    },
    plugins: [react()],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, ".")
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQYXN0ZWxcXFxcY2xhc3Npd2ViLS0tY2xhc3NpZmljYWRvcy1wcmVtaXVtXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQYXN0ZWxcXFxcY2xhc3Npd2ViLS0tY2xhc3NpZmljYWRvcy1wcmVtaXVtXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9QYXN0ZWwvY2xhc3Npd2ViLS0tY2xhc3NpZmljYWRvcy1wcmVtaXVtL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsICcuJywgJycpO1xuICAgIHJldHVybiB7XG4gICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgcG9ydDogMzAwMCxcbiAgICAgICAgaG9zdDogJzAuMC4wLjAnLFxuICAgICAgfSxcbiAgICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgICAgIGRlZmluZToge1xuICAgICAgICAncHJvY2Vzcy5lbnYuQVBJX0tFWSc6IEpTT04uc3RyaW5naWZ5KGVudi5HRU1JTklfQVBJX0tFWSksXG4gICAgICAgICdwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWSc6IEpTT04uc3RyaW5naWZ5KGVudi5HRU1JTklfQVBJX0tFWSlcbiAgICAgIH0sXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLicpLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VCxPQUFPLFVBQVU7QUFDMVUsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxXQUFXO0FBRmxCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3RDLFFBQU0sTUFBTSxRQUFRLE1BQU0sS0FBSyxFQUFFO0FBQ2pDLFNBQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsSUFDakIsUUFBUTtBQUFBLE1BQ04sdUJBQXVCLEtBQUssVUFBVSxJQUFJLGNBQWM7QUFBQSxNQUN4RCw4QkFBOEIsS0FBSyxVQUFVLElBQUksY0FBYztBQUFBLElBQ2pFO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxHQUFHO0FBQUEsTUFDbEM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
