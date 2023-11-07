import { h, patch } from "@analysst/ui";

export default function Counter() {
  let count = 0;

  function increment() {
    count++;
    updateView();
  }

  function updateView() {
    const newVTree = view();
    patch(vTree, newVTree);
    vTree = newVTree;
  }

  const lifeCycle = {
    create: () => console.log("Counter component mounted"),
    update: () => console.log("Counter component updated"),
    destory: () => console.log("Counter component destroyed"),
  };

  function view() {
    return h("div", { hook: lifeCycle }, [
      h("h1", `${count}`),
      h("button", { on: { click: increment } }, "Add"),
    ]);
  }

  let vTree = view();
  return vTree;
}
