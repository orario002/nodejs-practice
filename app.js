(function () {

})();



console.log('hello, this is your practice javascript file');


function testme() {
    console.log('test me function has been called');
}

testme();
testme();
testme();
testme();


printOneWordFiveTimes('ho');
printOneWordFiveTimes('hi');

function printOneWordFiveTimes(myword) {
    console.log(myword);
    console.log(myword);
    console.log(myword);
    console.log(myword);
    console.log(myword);
}

function printTwoWordFiveTimes(myword, mySecondword) {
    var theword5 = myword + 'xxxx and fff' + mySecondword;
    printOneWordFiveTimes(theword5);
}

var printTwoWordFiveTimes = function () {

}

function printThreeWordFiveTimes(myword, mySecondword, myThirdword) {
    let theword = myword + ' and ' + mySecondword + ' and ' + myThirdword;
    printOneWordFiveTimes(theword);
}

printTwoWordFiveTimes('pig', 'dog');

printOneWordFiveTimes('pig and dog');

printThreeWordFiveTimes('pig', 'dog', 'bird');

//anonymous function
(function () {
    var jacksname = 'jack';
    console.log('this will only run once');
    console.log('jacks name: ' + jacksname);

    function priuntJacksName() {
        console.log('hello');
    }

    priuntJacksName();

})();




(function () {
    var jacksname = 'bob';
    console.log('this will only run once');
    console.log('jacks name: ' + jacksname);

    function priuntJacksName() {
        console.log('hello');
    }

    priuntJacksName();

})();



console.log('outside of Anon function');
//console.log('jacks name: ' + jacksname);

(function () {
    var username = 'Sandy';
    console.log('Who is this?');
    console.log('This is: ' + username);

    function greetUserName() {
        console.log('Morning' + ' ' + username);
    }

    greetUserName();

})();
    






/*
    arrays
*/

let jacksFavouriteCountry = 'China';
console.log(jacksFavouriteCountry);




let employer1name = 'dave';
let employer2name = 'bob';
let employer3name = 'jack';
let employer4name = 'johnny';
let employer5name = 'dude in the mood';



let name = '';
let dayoftheweek = null;


let employenames = [];

employenames.push('bob');
employenames.push('jim');
employenames.push('johnny');

employenames[3] = 'jack';
employenames[20] = 'Sandy';


let myotherarray = ['bob','sandy','jack',8];


console.log(employenames[0]);
console.log(employenames[1]);





/*
    Loops
*/

//learn this!!!!
let a = 0;
a = a + 1;

a = a + 5;
a +=5;


a++;
a--;
a = a + 2;
console.log(a);




//first part = happens only once at the beginning of the loop

//second part = condition, at the end of EVERY loop (after the third), it checks the condition, 
//IF it's true, the loop continues into the third part, IF its false, it continues the rest of the code.

//third part - runs at the end of every loop before the condition

var boxnumber = 0;

if(boxnumber < 34){
    //return true;
}

boxnumber++;

//to get the length of an array is:
console.log('length of array');

console.log(employenames.length);


for(var boxnumber = 0;        boxnumber < employenames.length;        boxnumber++){
    //start
    
    console.log('Box Number: '+boxnumber);    
    
    console.log('Employee name: '+employenames[boxnumber]);
    
    
    //end of every loop (part 3 happens)
    //condition (part 2)
}








































