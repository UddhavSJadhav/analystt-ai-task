import { h, patch } from "@analysst/ui";

function createComponent() {
  this.onComponentMount = function () {};
  this.onComponentUpdate = function () {};
  this.onComponentDestroy = function () {};

  this.vTree = h("div", "Hello World!");

  createComponent.prototype.useState = function (initialState) {
    let state = initialState;

    const setState = (newState) => {
      state = newState;
      updateComponent.call(this); // Use call to set the correct 'this'
    };

    return [state, setState];
  };

  createComponent.prototype.view = function (code) {
    const newCompCode = h(
      "div",
      {
        hook: {
          create: this.onComponentMount,
          update: this.onComponentUpdate,
          destroy: this.onComponentDestroy,
        },
      },
      [code]
    );
    this.vTree = newCompCode;
    updateComponent.bind(this)(); // Use bind to set the correct 'this'
  };

  createComponent.prototype.render = function () {
    return this.vTree;
  };

  const updateComponent = function () {
    const newVTree = this.vTree;
    patch(this.vTree, newVTree);
    this.vTree = newVTree;
  };
}

// Create a new instance of the component
const Counter = new createComponent();

// Define state and event handler
const [newState, setNewState] = Counter.useState(0);

function increment() {
  setNewState(newState + 1);
}

// Update the view with the new code
Counter.view(
  h("div", [
    h("h1", String(newState)),
    h("button", { on: { click: increment } }, "Add"),
  ])
);

export default Counter.render();
