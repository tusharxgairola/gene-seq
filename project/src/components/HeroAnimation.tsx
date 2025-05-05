import React, { useEffect, useRef } from 'react';

const HeroAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match parent size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // DNA animation class
    class DNA {
      x: number;
      y: number;
      basePairs: number;
      radius: number;
      speed: number;
      twistOffset: number;
      color1: string;
      color2: string;

      constructor(
        x: number,
        y: number,
        basePairs: number,
        radius: number,
        speed: number,
        color1: string,
        color2: string
      ) {
        this.x = x;
        this.y = y;
        this.basePairs = basePairs;
        this.radius = radius;
        this.speed = speed;
        this.twistOffset = 0;
        this.color1 = color1;
        this.color2 = color2;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const basePairSpacing = 15;
        
        for (let i = 0; i < this.basePairs; i++) {
          const y = this.y + i * basePairSpacing;
          
          // Only draw if in canvas bounds (with some margin)
          if (y < -50 || y > canvas.height + 50) continue;
          
          const angle = (i * 0.2) + this.twistOffset;
          
          // Draw the two strands
          const x1 = this.x + Math.cos(angle) * this.radius;
          const x2 = this.x - Math.cos(angle) * this.radius;
          
          // Backbone
          ctx.strokeStyle = this.color1;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x1, y - basePairSpacing / 2);
          ctx.lineTo(x1, y + basePairSpacing / 2);
          ctx.stroke();
          
          ctx.strokeStyle = this.color2;
          ctx.beginPath();
          ctx.moveTo(x2, y - basePairSpacing / 2);
          ctx.lineTo(x2, y + basePairSpacing / 2);
          ctx.stroke();
          
          // Base pairs
          ctx.strokeStyle = '#ffffff';
          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.stroke();
          
          // Base pair "nodes"
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(x1, y, 2, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(x2, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      update() {
        this.twistOffset += this.speed;
        if (this.twistOffset > Math.PI * 2) {
          this.twistOffset = 0;
        }
      }
    }

    // Create DNA strands
    const dnaStrands: DNA[] = [
      new DNA(canvas.width * 0.3, -100, 50, 20, 0.01, '#3b82f6', '#8b5cf6'),
      new DNA(canvas.width * 0.7, -50, 40, 15, 0.015, '#2563eb', '#7c3aed'),
      new DNA(canvas.width * 0.5, -150, 60, 25, 0.007, '#60a5fa', '#a78bfa')
    ];

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Semi-transparent background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(30, 58, 138, 0.8)');
      gradient.addColorStop(1, 'rgba(30, 64, 175, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw DNA strands
      dnaStrands.forEach(dna => {
        dna.update();
        dna.draw(ctx);
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />;
};

export default HeroAnimation;