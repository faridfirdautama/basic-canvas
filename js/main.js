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

    // Smiling face
    // arc (x, y, radius, startAngle, endAngle, counterclockwise)
    // arcTo(x1, y1, x2, y2, radius)
    ctx.beginPath();
    ctx.arc(60, 200, 50, 0, 1.5 * Math.PI, true); // outer
    ctx.moveTo(95, 200); // remove starting line (x1 + radius1)
    ctx.arc(60, 200, 35, 0, Math.PI, false); // inner
    ctx.moveTo(50, 185); // (next x + radius, next y)
    ctx.arc(45, 185, 5, 0, 2 * Math.PI, true);
    ctx.moveTo(80, 185);
    ctx.arc(75, 185, 5, 0, 2 * Math.PI, true);
    ctx.stroke();

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(10, 260);
    ctx.lineTo(10, 340);
    ctx.lineTo(90, 260);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(110, 360); // bottom right
    ctx.lineTo(110, 280); // top right
    ctx.lineTo(30, 360); // bottom left
    ctx.closePath(); // add last straight line,
    ctx.stroke();

    // Rows
    for (let i = 0; i < 4; i++) {
      // Columns
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        const x = 270 + j * 50;
        const y = 30 + i * 50;
        const radius = 20;
        const startAngle = 0;
        const endAngle = Math.PI + (Math.PI * j) / 2; // 1PI = Half, 1.5PI = Quarter, 2PI = Full
        const counterclockwise = i % 2 === 0;
        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
        console.log(i, j, x, y, radius, startAngle, endAngle, counterclockwise);
      }
    }
  }
}

draw();
