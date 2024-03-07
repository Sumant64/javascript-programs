// write a function to reverse a string

function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    let word = str.split('');
    let i = 0;
    let j = word.length;
    while(i<j){
        let temp = word[i];
        word[i] = word[j];
        word[j] = temp;
        i++;
        j--;
    }
    return word.join("");
  }
  
  let rev = reverse('string');
  console.log(rev);
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'