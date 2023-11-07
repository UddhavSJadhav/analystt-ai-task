import { h } from "@analysst/ui";

import Counter from "./Counter.js";

export default function App() {
  const lifeCycle = {
    create: () => console.log("App component mounted"),
    update: () => console.log("App component updated"),
    destory: () => console.log("App component destroyed"),
  };

  return h("div", { hook: lifeCycle }, Counter());
}
