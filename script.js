var random6, rolls, sumOfRolls, sumOfReducedRolls;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


random6 = [1, 2, 3, 4, 5, 6];
rolls = [];


document.getElementById('button_roll').addEventListener('click', (event) => {
  rolls.push(randomMember(random6));
  let element_list = document.getElementById('list');
  element_list.innerText = rolls;
  sumOfRolls = rolls.reduce((a,b) => a+b, 0);
  let element_total = document.getElementById('total');
  element_total.innerText = sumOfRolls;
  if (sumOfRolls == '11') {
    let element_info = document.getElementById('info');
    element_info.innerText = 'You won';
  } else if (sumOfRolls > '11') {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'You lost';
  } else {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'Keep playing!';
  }

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  rolls.pop();
  let element_list2 = document.getElementById('list');
  element_list2.innerText = rolls;
  sumOfReducedRolls = rolls.reduce((a,b) => a+b, 0);
  let element_total2 = document.getElementById('total');
  element_total2.innerText = sumOfReducedRolls;
  if (sumOfReducedRolls == '11') {
    let element_info4 = document.getElementById('info');
    element_info4.innerText = 'You won';
  } else if (sumOfReducedRolls > '11') {
    let element_info5 = document.getElementById('info');
    element_info5.innerText = 'You lost';
  } else {
    let element_info6 = document.getElementById('info');
    element_info6.innerText = 'Keep playing!';
  }

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  rolls = [];
  let element_list3 = document.getElementById('list');
  element_list3.innerText = rolls;
  let element_total3 = document.getElementById('total');
  element_total3.innerText = '0';
  let element_info7 = document.getElementById('info');
  element_info7.innerText = 'Keep playing!';

});