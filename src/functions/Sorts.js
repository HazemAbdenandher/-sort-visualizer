export const BubbleSort = (array) => {
  let sortedArray = [];
  let i, j;
  let len = array.length;
  let isSwapped = false;
  for (i = 0; i < len; i++) {
    isSwapped = false;
    for (j = 0; j < len - 1; j++) {
      if (array[j] > array[j + 1]) {
        sortedArray.push([j, j + 1]);
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }
  return sortedArray;
};

export const selectionSort = (arr) => {
  let i,
    j,
    min_idx,
    n = arr.length,
    sortedArray = [];

  for (i = 0; i < n - 1; i++) {
    min_idx = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    sortedArray.push([min_idx, i]);
    let tmp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = tmp;
  }
  return sortedArray;
};
export const insertionSort = (array) => {
  let N = array.length;
  let i, j;
  let sortedArray = [];

  for (i = 1; i < N; i++) {
    j = i;

    // Insert array[i] into list 0..i-1
    while (j > 0 && array[j] < array[j - 1]) {
      // Swap array[j] and array[j-1]*=
      sortedArray.push([j, j - 1]);
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j -= 1;
    }
  }
  return sortedArray;
};

export const swap = async (i1, i2, array, speed) => {
  array[i1].classList.add("selected");
  array[i2].classList.add("selected");
  let value1 = array[i1].getAttribute("value");
  let value2 = array[i2].getAttribute("value");
  array[i1].setAttribute("value", value2);
  array[i2].setAttribute("value", value1);
  array[i1].style.height = `${3 * value2}px`;
  array[i2].style.height = `${3 * value1}px`;
  await delay(speed);
  array[i1].classList.remove("selected");
  array[i2].classList.remove("selected");
};

export var id;
function delay(delayInms) {
  return new Promise((resolve) => {
    id = setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

export const sorting = async (selectedSort, speed) => {
  const array = document.querySelectorAll(".bar");
  let sortedArray = [];
  for (let i = 0; i < array.length; i++) {
    sortedArray.push(parseInt(array[i].getAttribute("value")));
  }
  switch (selectedSort) {
    case "Bubble Sort":
      sortedArray = BubbleSort([...sortedArray]);
      break;
    case "Insertion Sort":
      sortedArray = insertionSort([...sortedArray]);
      break;
    case "Selection Sort":
      sortedArray = selectionSort([...sortedArray]);
      break;
    default:
      break;
  }
  while (sortedArray) {
    await swap(sortedArray[1][0], sortedArray[1][1], array, speed);
    sortedArray.shift();
  }
};

export const stopTimeout = () => {
  if (id) {
    clearTimeout(id);
  }
};
