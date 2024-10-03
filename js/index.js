const canvas = document.getElementById('screen-game');
const ctx = canvas.getContext('2d');

function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


const background = new Background(0, 0, canvas.width, canvas.height);

const apple = new Apple(10, 800,160, 150, "apple.png", 8);

const watermelon = new Apple(280, 800, 120, 120,"watermelon.png", 10);

const banana = new Apple(500, 800, 100, 100, "banana.png", 7);

const bomb = new Apple(700, 800, 160, 140, "bom.png", 11);

const crate = new Crate(100,700,240,280, "black",20 );

const score = new Score(0, "Score: ");



function play() {
    clearScreen();
    background.draw();
    crate.draw();
    bomb.moveDown();
    apple.moveDown();
    watermelon.moveDown();
    banana.moveDown();
    score.draw();
    handleImpactCrate();
    requestAnimationFrame(play);
}


function getRandomX(min, max) {
    return Math.random() * (max - min) + min;
}

function resetApplePosition(apple) {
    apple.x = getRandomX(0, canvas.width - apple.w);
    apple.y = 0;
}

function handleImpactCrate() {

    // begin apple
    if (apple.x + apple.w >= crate.x + 140) {
        if (apple.y + apple.h >= crate.y + 140) {
            resetApplePosition(apple);
            score.score += 2;
        }
    }
    // end apple

    // begin banana
    if (banana.x + banana.w >= crate.x + 140) {
        if (banana.y + banana.h >= crate.y + 140) {
            resetApplePosition(banana);
            score.score += 2;
        }
    }
    // end banana

    // begin watermelon
    if (watermelon.x + watermelon.w >= crate.x + 140) {
        if (watermelon.y + watermelon.h >= crate.y + 140) {
            resetApplePosition(watermelon);
            score.score += 2;
        }
    }
    // end watermelon

    // begin bomb
    if (bomb.x + bomb.w >= crate.x + 140 && bomb.x + 95 <= crate.x + crate.w) {
        if (bomb.y + bomb.h >= crate.y + 140 && bomb.y + 95 <= crate.y + crate.h) {
            alert("Game Over");
        }
    }
}

// function handleImpactCrate() {
//
//     // begin apple
//     if (apple.x + apple.w >= crate.x + 140) {
//         if (apple.y + apple.h >= crate.y + 140) {
//             apple.y = 0;
//             score.score += 2;
//         }
//     }
//     // end apple
//
//
//     // begin banana
//     if (banana.x + banana.w >= crate.x + 140) {
//         if (banana.y + banana.h >= crate.y + 140) {
//             banana.y = 0;
//             score.score += 2;
//         }
//     }
//     // end banana
//
//
//     //begin watermelon
//     if (watermelon.x + watermelon.w >= crate.x + 140) {
//         if (watermelon.y + watermelon.h >= crate.y + 140) {
//             watermelon.y = 0;
//             score.score += 2;
//         }
//     }
    //end watermelon


    //begin bomb
//     if (bomb.x + bomb.w >= crate.x + 140 && bomb.x + 95  <= crate.x + crate.w) {
//         if (bomb.y + bomb.h >= crate.y + 140 && bomb.y + 95 <= crate.y + crate.h) {
//             alert("Game Over");
//
//         }
//     }
// }
play();

window.addEventListener("keydown", () => {
    if (event.key === "ArrowLeft") {
        crate.moveLeft();
    } else if (event.key === "ArrowRight") {
        crate.moveRight();
    }
})




