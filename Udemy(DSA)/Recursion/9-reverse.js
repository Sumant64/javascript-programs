// write a function to reverse a string

  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'

function stringReverse(str) {
    if(str.length <= 1) {
        return str;
    }
    return reverse(str.slice(1)) + str[0];
}


/*
hello - 4

reverse(ello) + h

reverse(llo) + e

reverse (lo) + l
reverse (o) + l

ol
ol+l = oll
oll + e = olle
olle + h = olleh


*/