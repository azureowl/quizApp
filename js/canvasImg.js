const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function clearCanvas () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawCanvas () {
    railing();
    shelving();
    floor();

    function railing () {
        ctx.fillStyle = '#795548';
        const railLeft = ctx.fillRect(120, 20, 5, 300);
        const railRight = ctx.fillRect(170, 20, 5, 300);
    }

    function shelving () {
        ctx.fillStyle = '#508dbd';
        const shelf0 = ctx.fillRect(190, 50, 100, 5);
        const shelf1 = ctx.fillRect(190, 100, 100, 5);
    }

    function floor () {
        ctx.fillStyle = '#e1ffe2';
        const floor = ctx.fillRect(0, 320, 300, 30);
    }

    var img = new Image();

    img.onload = () => {
        ctx.drawImage(img, 190, 10, 40, 40);
    };

    img.src = 'https://i.imgur.com/DvWDqc7.png';
    img.alt = 'Image of a honey pot';
}


// determineRungY creates a rung at y position depending on the score. y position is decremented by 30.

function determineRungY (score) {
    let rungY = 300 - ((score - 1) * 30);
    return rungY;
}

function renderRung (score) {
    let rungY = determineRungY(score);
    ctx.fillStyle = '#795548';
    ctx.fillRect(121, `${rungY}`, 50, 5);
}
