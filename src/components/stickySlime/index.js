import React, { useRef, useEffect } from "react";

export default function HomePage() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const effectRef = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    canvas.width = window.innerWidth- 50;
    canvas.height = window.innerHeight;

    //gradient color 
    const gradient = ctx.createLinearGradient(0,0,canvas.width,0);
    gradient.addColorStop(0,"#E8BD3B");
    gradient.addColorStop(0.2,"#E87927");
    gradient.addColorStop(0.4,"#46B2DB");
    gradient.addColorStop(0.6,"#364AAF");
    gradient.addColorStop(0.8,"#0518FF");
    gradient.addColorStop(1,"#A78FFB");


    ctx.fillStyle = gradient;
    ctx.font = "30px Arial";
    ctx.fillText("404", 10, 50);

    class Ball {
      constructor(effect) {
        this.effect = effect;
        this.x = this.effect.width * 0.5;
        this.y = this.effect.height * 0.5;
        this.radius = Math.random() * 100 + 20;
        this.speedX = Math.random() - 0.5;
        this.speedY = Math.random() - 0.5;
      }
      update() {
        if (
          this.x < this.radius ||
          this.x > this.effect.width - this.radius
        )
          this.speedX *= -1;
        if (
          this.y < this.radius ||
          this.y > this.effect.height - this.radius
        )
          this.speedY *= -1;
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
      }

      reset() {
        this.x = this.effect.width * 0.5;
        this.y = this.effect.height * 0.5;
      }
    }

    class MetaballsEffect {
      constructor(width, height) {
        this.width = width;
        this.height = height;
        this.metaballsArray = [];
      }
      init(numberOfBalls) {
        for (let i = 0; i < numberOfBalls; i++) {
          this.metaballsArray.push(new Ball(this));
        }
      }
      update() {
        this.metaballsArray.forEach((metaball) => metaball.update());
      }

      draw(context) {
        this.metaballsArray.forEach((metaball) => metaball.draw(context));
      }
      reset(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
        this.metaballsArray.forEach((metaball) => metaball.reset());
      }
    }

    const effect = new MetaballsEffect(canvas.width, canvas.height);
    effectRef.current = effect;
    effect.init(20);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.update();
        effect.draw(ctx);
        requestAnimationFrame(animate);
      }
      animate();
  
      window.addEventListener("resize", function () {
        canvas.width = window.innerWidth - 50;
        canvas.height = window.innerHeight;
        ctx.fillStyle = gradient;
  
        effect.reset(canvas.width, canvas.height);
      });
  
      return () => {
        window.removeEventListener("resize", function () {});
      };
    }, []);
  
    return (
      <div className="background-for-top">
        <canvas ref={canvasRef} id="canvas1"></canvas>
      </div>
    );
  }
  
