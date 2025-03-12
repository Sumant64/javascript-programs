function insertionSort(arr, comparator) {
    if(typeof(comparator) !== 'function') {
        // default value
        comparator = (a, b) => {
            if (a < b) { return -1;}
            else if (a > b) { return 1;}
            return 0;
        }
    }

    
    for(let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i;
        while(j > 0) {
            if(comparator(arr[j - 1], temp) >= 1){
                arr[j] = arr[j - 1]
                j--;
            } else {
                break;
            }
        }
        arr[j] = temp
        console.log(arr)
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

var nums = [4, 3, 5, -10, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(insertionSort(nums, strComp))

