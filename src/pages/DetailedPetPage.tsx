import { useEffect, useRef } from 'react';

const drawRadarChart = (
  canvas: HTMLCanvasElement,
  labels: string[],
  data: number[],
  willAnimate: boolean,
): void => {
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return;
  }

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) * 0.8;

  const step = (2 * Math.PI) / labels.length;

  let animationProgress = willAnimate ? 0.2 : 1;

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 글자 쓰기
    ctx.fillStyle = '#555';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < labels.length; i++) {
      const angle = i * step;
      const x = centerX + radius * 1.1 * Math.cos(angle - 0.32);
      const y = centerY + radius * 1.1 * Math.sin(angle - 0.32);
      ctx.fillText(labels[i], x, y);
    }

    // 데이터 점 잇기
    ctx.strokeStyle = 'rgb(250, 150, 0)';
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    ctx.beginPath();
    for (let i = 0; i < labels.length; i++) {
      const angle = i * step;
      const value = data[i];
      const x =
        centerX +
        ((radius * value) / 5) * Math.cos(angle - 0.32) * animationProgress;
      const y =
        centerY +
        ((radius * value) / 5) * Math.sin(angle - 0.32) * animationProgress;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(250, 150, 0, 0.3)';
    ctx.fill();
    ctx.stroke();

    // 오각형 라인 점선으로 그리기
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      for (let j = 0; j < labels.length; j++) {
        const angle = j * step;
        const x = centerX + ((radius * (i + 1)) / 5) * Math.cos(angle - 0.32);
        const y = centerY + ((radius * (i + 1)) / 5) * Math.sin(angle - 0.32);
        if (j === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();
    }

    // 중점에서 꼭짓점으로 선 그리기
    ctx.setLineDash([]);
    for (let i = 0; i < labels.length; i++) {
      const angle = i * step;
      const x = centerX + radius * Math.cos(angle - 0.32);
      const y = centerY + radius * Math.sin(angle - 0.32);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    // 점 찍고 숫자 쓰기
    for (let i = 0; i < labels.length; i++) {
      const angle = i * step;
      const value = data[i];
      const x =
        centerX +
        ((radius * value) / 5) * Math.cos(angle - 0.32) * animationProgress;
      const y =
        centerY +
        ((radius * value) / 5) * Math.sin(angle - 0.32) * animationProgress;

      ctx.beginPath();
      ctx.arc(x, y, 8, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgb(250, 150, 0)';
      ctx.fill();
      ctx.closePath();

      ctx.fillStyle = '#555';
      ctx.font = '16px arial';
      const textX = x - 20 * Math.cos(angle - 0.32);
      const textY = y - 20 * Math.sin(angle - 0.32);
      ctx.fillText(data[i].toString(), textX, textY);
    }

    if (animationProgress < 1) {
      animationProgress += 0.015;
      requestAnimationFrame(animate);
    }
  };

  animate();
};

const DetailedPetPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    drawRadarChart(canvasRef.current, labels, data, true);
  }, []);

  const labels = ['귀여움', '침착함', '유머감각', '외모', '의젓함'];
  const data = [3, 2, 3, 5, 4]; // 각 항목의 데이터 값

  return (
    <div>
      <h1>Detailed Pet Page</h1>
      <canvas ref={canvasRef} width="500" height="500"></canvas>
    </div>
  );
};

export default DetailedPetPage;
