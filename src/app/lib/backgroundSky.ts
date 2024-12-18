export const playStars = (canvas: {
  width: number;
  height: number;
  getContext: (arg0: string) => any;
}) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const context = canvas.getContext('2d');

  let numStars = canvas.width * 2;
  const stars: { x: number; y: number; z: number; o: number; size: number }[] =
    [];
  let centerX = canvas.width / 2;
  let centerY = canvas.height / 2;
  function createStar() {
    let x, y;
    do {
      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height;
    } while (Math.hypot(x - centerX, y - centerY) < 3);

    return {
      x,
      y,
      z: Math.random() * canvas.width,
      o: Math.random(),
      size: Math.random() * 2.5,
    };
  }

  function populateStars() {
    stars.length = 0;
    for (let i = 0; i < numStars; i++) {
      stars.push(createStar());
    }
  }
  const updateStars = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let star of stars) {
      star.z -= 0.03;

      if (star.z <= 0) {
        Object.assign(star, createStar());
        star.z = canvas.width;
      }

      const sx = (star.x - centerX) * ((canvas.width / star.z) * 1.5) + centerX;
      const sy = (star.y - centerY) * ((canvas.width / star.z) * 1.5) + centerY;
      const size = (1 - star.z / canvas.width) * star.size;
      context.shadowBlur = 5;
      context.shadowColor = '#92d1ff';
      context.fillStyle = 'white';
      context.fillRect(sx, sy, size, size);
    }

    requestAnimationFrame(updateStars);
  };

  populateStars();
  updateStars();
};
