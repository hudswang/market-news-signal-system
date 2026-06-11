import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14213d",
        muted: "#617085",
        panel: "#f7f9fc"
      }
    }
  },
  plugins: []
} satisfies Config;
