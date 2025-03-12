function bubbleSort(arr, comparator){
    // add whatever parameters you deem necessary - good luck!
    if(typeof(comparator) !== 'function') {
        // default value
        comparator = (a, b) => {
            if (a < b) { return -1;}
            else if (a > b) { return 1;}
            return 0;
        }
    }

    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if(comparator(arr[j], arr[j+1]) >= 1) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }

    return arr;
  }

//   =========================================

  function strComp(a, b) {
    if (a < b) { return -1;}
    else if (a > b) { return 1;}
    return 0;
  }
  
  function oldestToYoungest(a, b) {
    console.log(a.age, b.age)
    return b.age - a.age;
  }

  var moarKittyData = [{
    name: "LilBub",
    age: 7
  }, {
    name: "Garfield",
    age: 40
  }, {
    name: "Heathcliff",
    age: 45
  }, {
    name: "Blue",
    age: 1
  }, {
    name: "Grumpy",
    age: 6
  }];
  
  var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
  
  console.log(bubbleSort(moarKittyData, oldestToYoungest))