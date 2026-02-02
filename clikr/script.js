// -=-=-=|constantes cnfig game|=-=-=-
const GAME_SETTINGS = {
    imageTresHolds: [10, 20, 50, 100],
    images:[
        "./images/warr.png",
        "./images/secondSlime.png",
        "./images/threedSlime.png",
        "./images/fourdSlime.png",
    ],

    imageNames:[
        "Warr slime",
        "Green slime",
        "Water slime",
        "Chroma Slime",
    ]
};

// -=-=-=|variables|=-=-=-
let score = 0;
let currentIndex = 0;
let lastThreshold = GAME_SETTINGS.imageTresHolds[0];

// -=-=-=|html elements|=-=-=-
const scoreElement = document.getElementById('score');
const mainImageElement = document.getElementById('main-image');
const imageNumverElement = document.getElementById('image-number');
const clickButton = document.getElementById('click-button');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');

// -=-=-=|Events|=-=-=-
function handleClick(){
    console.log('handleClick STARTED!')
    score += 1;
    updateScoreUI();
    updateProgress();
}
function updateScoreUI(){
    console.log('updateScore STARTED!')
    scoreElement.textContent = score;
}
function updateProgress(){
    console.log('updateProgressBar STARTED!')
    let progressPercent;

    if(currentIndex < GAME_SETTINGS.imageTresHolds.length){

        const prevTreshHold = currentIndex === 0?0:GAME_SETTINGS.imageTresHolds[currentIndex -1];
        
        progressPercent = ((score - prevTreshHold) / (lastThreshold - prevTreshHold)) * 100;
    }else{
        progressPercent = 100;
    }

    progressFill.style.width = `${progressFill}%`;
    progressText.textContent = `${Math.round(progressPercent)}%`;

}
function changeImage(ImageIndex){
    console.log('changeImage STARTED!')
    mainImageElement.src = GAME_SETTINGS.images[ImageIndex];
    imageNumverElement.textContent = GAME_SETTINGS.imageNames[ImageIndex];
}

// -=-=-=|functions game loop|=-=-=-
function initGame(){
    console.log('GAME STARTED!')
    handleClick();
    updateScoreUI();
    updateProgress();
    changeImage(0);

    clickButton.addEventListener('ckick', handleClick);


}

window.addEventListener('load', initGame);