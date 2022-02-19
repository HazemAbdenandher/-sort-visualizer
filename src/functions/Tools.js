export const createArray = (size) => {
  let list = [];
  let min = 1;
  let max = 100;

  for (let i = 0; i < size; ++i) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    list.push(parseInt(randomNumber));
  }
  return list;
};

export const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
export const createGraph = (size) => {
  const list = createArray(size);
  const graph = document.querySelector("#graph");
  if (graph) {
    removeAllChildNodes(graph);
    for (let i = 0; i < list.length; i++) {
      let bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = `${list[i] * 3}px`;
      bar.setAttribute("value", list[i]);
      bar.style.width = `20px`;
      graph.appendChild(bar);
    }
  }
};
