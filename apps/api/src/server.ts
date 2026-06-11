import { env } from "./config/env";
import { createApp } from "./app";

createApp().listen(env.PORT, () => {
  console.log(`Market news API listening on http://localhost:${env.PORT}`);
});
