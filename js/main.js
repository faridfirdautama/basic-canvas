function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200 0 0)";
    ctx.fillRect(10, 10, 50, 50); // (x, y, width, height)
    ctx.strokeRect(10, 10, 50, 50); // to create stroke
    ctx.clearRect(15, 15, 30, 30); // to create transparent shape

    ctx.fillStyle = "rgb(0 0 200 / 50%)";
    ctx.fillRect(30, 30, 50, 50);

    ctx.fillStyle = "rgb( 0 0 0)";
    ctx.fillRect(100, 50, 100, 100);
    ctx.clearRect(120, 70, 60, 60);
    ctx.strokeRect(125, 75, 50, 50);

    // Triagle
    ctx.beginPath(); // command to init starting point
    ctx.moveTo(10, 120); // moving the pen to specified coordinates (x,y) or Starting point
    ctx.lineTo(35, 95); // second dot coordinates
    ctx.lineTo(35, 145); // last dot coordinates
    ctx.fill();
  }
}

draw();
