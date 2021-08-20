const numbers = [5,4,636,33,35,35];
let newnumbers = [];
for(const number of numbers){
    if(number.sort(function(a,b){
        return a-b;
    })){
      newnumbers.push(number);
    }
}
console.log(newnumbers);