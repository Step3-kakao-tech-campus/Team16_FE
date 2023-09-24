import { useEffect } from 'react';

const drawRadarChart = (labels: string[], data: number[]): void => {
  const canvas = document.getElementById('radarChart') as HTMLCanvasElement;
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

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 점 찍기
  ctx.fillStyle = 'brown';
  for (let i = 0; i < labels.length; i++) {
    const angle = i * step;
    const value = data[i];
    const x = centerX + ((radius * value) / 5) * Math.cos(angle - 0.32);
    const y = centerY + ((radius * value) / 5) * Math.sin(angle - 0.32);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fillText(data[i].toString(), x + 10, y + 10);
    ctx.fill();
    ctx.closePath();
  }

  // 데이터 점 잇기
  ctx.strokeStyle = 'brown';
  ctx.lineWidth = 2;
  ctx.setLineDash([]);
  ctx.beginPath();
  for (let i = 0; i < labels.length; i++) {
    const angle = i * step;
    const value = data[i];
    const x = centerX + ((radius * value) / 5) * Math.cos(angle - 0.32);
    const y = centerY + ((radius * value) / 5) * Math.sin(angle - 0.32);
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(255, 0, 0, 0.15)';
  ctx.fill();
  ctx.stroke();

  // 오각형 라인 점선으로 그리기
  ctx.strokeStyle = '#bbb';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    for (let j = 0; j < labels.length; j++) {
      const angle = j * step;
      const x = centerX + ((radius * (i + 1)) / 5) * Math.cos(angle - 0.32);
      const y = centerY + ((radius * (i + 1)) / 5) * Math.sin(angle - 0.32);
      if (i === 4) {
        ctx.fillText(labels[j], x, y);
      }
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
};

const DetailedPetPage = () => {
  useEffect(() => {
    drawRadarChart(labels, data);
  }, []);

  const labels = ['귀여움', '침착함', '유머감각', '외모', '의젓함'];
  const data = [1, 2, 3, 5, 4]; // 각 항목의 데이터 값

  return (
    <div>
      <h1>Detailed Pet Page</h1>
      <canvas id="radarChart" width="500" height="500"></canvas>
    </div>
  );
};

export default DetailedPetPage;
