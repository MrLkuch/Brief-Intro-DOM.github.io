let scorePOne = document.getElementById('scorePOne');
let scorePTwo = document.getElementById('scorePTwo');
let goal = document.getElementById('goal')
function addScorePOne() {

    if (scorePOne.innerText < goal.innerText && scorePTwo.innerText < goal.innerText) {
        let value = scorePOne.innerText;
        scorePOne.innerText = +value + 1;
        if (scorePOne.innerText == goal.innerText) {
            scorePOne.innerText = 'Win !';
        }
    }

}


function addScorePTwo() {

    if (scorePOne.innerText < goal.innerText && scorePTwo.innerText < goal.innerText) {
        let value = scorePTwo.innerText;
        scorePTwo.innerText = +value + 1;
        if (scorePTwo.innerText == goal.innerText) {
            scorePTwo.innerText = 'Win !';
        }
    }

}

function reset() {
    scorePOne.innerText = 0;
    scorePTwo.innerText = 0;
    scorePOne.classList.remove('win')
    scorePTwo.classList.remove('win')
}


document.querySelector('.pOne').addEventListener('click', e => {
    addScorePOne();
});
document.querySelector('.pTwo').addEventListener('click', e => {
    addScorePTwo();
});
document.querySelector('.reset').addEventListener('click', e => {
    reset();
});

document.getElementById('numInput').addEventListener('change', e => {
    goal.innerText = document.getElementById('numInput').value;
    reset();
});