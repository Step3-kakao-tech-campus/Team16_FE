import { useRef, useEffect } from 'react';
import { PolygonProfile } from '../detailPetType';

const drawRadarChart = (
  canvas: HTMLCanvasElement | null,
  labels: string[],
  data: number[],
  willAnimate: boolean,
): void => {
  if (!canvas) {
    return;
  }
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
    for (let i = 0; i < labels.length; i += 1) {
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
    for (let i = 0; i < labels.length; i += 1) {
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
    for (let i = 0; i < 5; i += 1) {
      ctx.beginPath();
      for (let j = 0; j < labels.length; j += 1) {
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
    for (let i = 0; i < labels.length; i += 1) {
      const angle = i * step;
      const x = centerX + radius * Math.cos(angle - 0.32);
      const y = centerY + radius * Math.sin(angle - 0.32);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    // 점 찍고 숫자 쓰기
    for (let i = 0; i < labels.length; i += 1) {
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

const RadarChart = ({
  setCanvas,
  width,
  height,
  canvas,
  labels,
  data,
  willAnimate,
}: {
  setCanvas: (canvasRef: HTMLCanvasElement | null) => void;
  width: number;
  height: number;
  canvas: HTMLCanvasElement | null;
  labels: string[];
  data: PolygonProfile;
  willAnimate: boolean;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const dataArr = new Array(5).fill(0);
  dataArr[0] = data.intelligence;
  dataArr[1] = data.affinity;
  dataArr[2] = data.athletic;
  dataArr[3] = data.adaptability;
  dataArr[4] = data.activeness;

  useEffect(() => {
    setCanvas(canvasRef.current);
    drawRadarChart(canvas, labels, dataArr, willAnimate);
  }, [canvasRef.current]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default RadarChart;
