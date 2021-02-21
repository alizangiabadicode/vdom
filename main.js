var h = window.vdom.h;
var diff = window.vdom.diff;
var patch = window.vdom.patch;
var createElement = window.vdom.create;

// 1: Create a function that declares what the DOM should look like
function render(count) {
  return h(
    "div",
    {
      style: {
        textAlign: "center",
        lineHeight: 100 + count + "px",
        border: "1px solid red",
        width: 100 + count + "px",
        height: 100 + count + "px",
      },
    },
    [String(count)]
  );
}

// 2: Initialise the document
var count = 0; // We need some app data. Here we just store a count.

var tree = render(count); // We need an initial tree
console.log({ tree });
var rootNode = createElement(tree); // Create an initial root DOM node ...
console.log({
  rootNode,
});
document.body.appendChild(rootNode); // ... and it should be in the document

// 3: Wire up the update logic
setInterval(function () {
  count++;

  var newTree = render(count);
  console.warn({
    newTree,
  });
  var patches = diff(tree, newTree);
  console.warn({
    patches,
  });
  rootNode = patch(rootNode, patches);
  console.warn({
    rootNode,
  });
  tree = newTree;
}, 1000);
