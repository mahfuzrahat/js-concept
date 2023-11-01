function explain_callback(name, age, task){
    console.log('hello', name);
    console.log('your age', age);
    task();
}

function washHand(){
    console.log('Wash your hand with soap');
}

function takeShower(){
    console.log('Take shower');
}

function washPlates(){
    console.log('Wash plates after dinner');
}

explain_callback('Babor', 17, washHand);
explain_callback('fojor', 13, takeShower);
explain_callback('Fokhor', 21, washPlates);