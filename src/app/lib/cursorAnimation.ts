interface SparkleType {
  shape: string;
  sizeRange: [number, number];
  color: string;
  radius: string;
}

const sparkleTypes: SparkleType[] = [
  { shape: 'circle', sizeRange: [0, 0], color: '#50b1ff78', radius: '50%' },
  { shape: 'circle', sizeRange: [0, 0], color: '#50b1ff80', radius: '50%' },
  { shape: 'star', sizeRange: [3, 9], color: '#feffcb', radius: '0%' },
  { shape: 'star2', sizeRange: [5, 10], color: '#ffffff', radius: '0%' },
  { shape: 'dust', sizeRange: [1, 2], color: '#feffcb', radius: '50%' },
  { shape: 'dust', sizeRange: [1, 1], color: '#50b1ff', radius: '50%' },
  { shape: 'dust', sizeRange: [1, 2], color: 'pink', radius: '50%' },
  { shape: 'dust', sizeRange: [1, 2], color: '#ffffff', radius: '50%' },
];

export const randomBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const debounce = (func: Function, wait: number) => {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const createSparkle = (x: number, y: number) => {
  // Sparkle type
  const type = sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)];

  // Create the element
  const sparkle = document.createElement('div');
  const translateX = randomBetween(-5, 5) * 100 + 100;
  const translateY = randomBetween(-5, 5) * 100 + 100;
  const size = randomBetween(type.sizeRange[0], type.sizeRange[1]);

  Object.assign(sparkle.style, {
    position: 'fixed',
    zIndex: 50,
    width: `${size}px`,
    height: `${size}px`,
    pointerEvents: 'none',
    top: `${y + randomBetween(-5, 5)}px`,
    left: `${x + randomBetween(-5, 5)}px`,
    transform: `translate(-50%, -50%)`,
    opacity: 1,
    background: type.color,
    borderRadius: type.radius,
    boxShadow:
      type.shape === 'circle'
        ? `0 0 ${randomBetween(8, 15)}px ${randomBetween(1, 3)}px ${type.color}`
        : `0 0 1px ${type.color}`,
    clipPath:
      type.shape === 'star'
        ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
        : type.shape === 'star2'
        ? 'polygon(50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%, 45% 55%, 0% 50%, 45% 45% )'
        : 'none',
  });

  document.body.appendChild(sparkle);

  // Animation
  const duration = randomBetween(10, 15) * 100;
  const startTime = performance.now();

  const animate = (time: number) => {
    const elapsed = time - startTime;
    const progress = elapsed / duration;

    // Update position
    sparkle.style.transform = `translate(${progress * translateX}%, ${
      progress * translateY
    }%) scale(${1 + progress / 2}) rotate(180deg)`;
    sparkle.style.opacity = `${1 - progress}`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      sparkle.remove();
    }
  };
  requestAnimationFrame(animate);
};

export const CursorSparkle = (Header: HTMLElement) => {
  let lastX = 0;
  let lastY = 0;

  const handleMouseMove = (e: MouseEvent) => {
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    const distance = Math.sqrt(dx ** 2 + dy ** 2);

    const steps = Math.ceil(distance / 15);
    for (let i = 0; i < steps; i++) {
      const progress = i / steps;
      const x = lastX + dx * progress;
      const y = lastY + dy * progress;
      for (let j = 0; j < 10; j++) {
        createSparkle(x, y);
      }
    }
    lastX = e.clientX;
    lastY = e.clientY;
  };

  Header.addEventListener('mousemove', debounce(handleMouseMove, 10));
};
