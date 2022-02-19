export class sortAlgorithms {
  constructor(sortType, speed) {
    this.sortType = sortType;
    this.speed = speed;
    this.bars = document.querySelectorAll(".bar");
    this.arrayValues = this.realValues();
    this.length = this.arrayValues.length;
    this.sortedArray = [];
    this.id = 0;
    this.skip = false;
  }

  realValues = () => {
    let array = [];
    for (let i = 0; i < this.bars.length; i++) {
      array.push(parseInt(this.bars[i].getAttribute("value")));
    }
    return array;
  };
  start = () => {
    document.getElementById("speed").disabled = true;
    switch (this.sortType) {
      case "Bubble Sort":
        this.sortedArray = this.BubbleSort();
        break;
      case "Insertion Sort":
        this.sortedArray = this.insertionSort();
        break;
      case "Selection Sort":
        this.sortedArray = this.selectionSort();
        break;
      default:
        break;
    }
  };

  sorting = async () => {
    while (this.sortedArray.length > 0) {
      await this.swap(this.sortedArray[0][0], this.sortedArray[0][1]);
      this.sortedArray.shift();
    }
    document.getElementById("speed").disabled = false;
  };
  continue = () => {
    if (this.skip) {
      for (let i = 0; i < this.bars.length; i++) {
        this.bars[i].classList.remove("selected");
      }
      this.sortedArray.shift();
      this.skip = false;
    }
  };
  BubbleSort = () => {
    let sortedArray = [];
    let i, j;
    let isSwapped = false;
    let array = [...this.arrayValues];
    for (i = 0; i < this.length; i++) {
      isSwapped = false;
      for (j = 0; j < this.length - 1; j++) {
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
  selectionSort = () => {
    let i,
      j,
      min_idx,
      sortedArray = [],
      array = [...this.arrayValues];
    for (i = 0; i < this.length - 1; i++) {
      min_idx = i;
      for (j = i + 1; j < this.length; j++) {
        if (array[j] < array[min_idx]) {
          min_idx = j;
        }
      }
      sortedArray.push([min_idx, i]);
      let tmp = array[min_idx];
      array[min_idx] = array[i];
      array[i] = tmp;
    }
    return sortedArray;
  };
  insertionSort = () => {
    let i, j;
    let sortedArray = [];
    let array = [...this.arrayValues];
    for (i = 1; i < this.length; i++) {
      j = i;
      while (j > 0 && array[j] < array[j - 1]) {
        sortedArray.push([j, j - 1]);
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        j -= 1;
      }
    }
    return sortedArray;
  };

  swap = async (i1, i2) => {
    this.bars[i1].classList.add("selected");
    this.bars[i2].classList.add("selected");
    let value1 = this.bars[i1].getAttribute("value");
    let value2 = this.bars[i2].getAttribute("value");
    this.bars[i1].setAttribute("value", value2);
    this.bars[i2].setAttribute("value", value1);
    this.bars[i1].style.height = `${3 * value2}px`;
    this.bars[i2].style.height = `${3 * value1}px`;
    await this.pause();
    this.bars[i1].classList.remove("selected");
    this.bars[i2].classList.remove("selected");
  };

  pause = async () => {
    return new Promise((resolve) => {
      this.id = setTimeout(() => {
        resolve();
      }, this.speed);
    });
  };

  stop = () => {
    clearTimeout(this.id);
    this.skip = true;
  };
}
