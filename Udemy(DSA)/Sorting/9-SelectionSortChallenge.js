function selectionSort(arr, comparator) {
    if(typeof(comparator) !== 'function') {
        // default value
        comparator = (a, b) => {
            if (a < b) { return -1;}
            else if (a > b) { return 1;}
            return 0;
        }
    }

    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(comparator(arr[min], arr[j]) >= 1) {
                min = j
            }
        }
        if(i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }

    return arr;
}

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];

console.log(selectionSort([4, 20, 12, 10, 7, 9]))
