class Player {
    constructor(x,y) {
        this.x = x;
        this.y = y;

        this.vx = 0;
        this.vy= 0;
    }

    input() {
                // Keyboard input
        if (keyIsDown(UP_ARROW)) {
            this.vy=this.vy-1;
        };
        if (keyIsDown(DOWN_ARROW)) {
            this.vy=this.vy+1;
        };
        if (keyIsDown(LEFT_ARROW)) {
            this.vx=this.vx-1;
        };
        if (keyIsDown(RIGHT_ARROW)) {
            this.vx=this.vx+1;
        };
    }

    draw() {
        stroke(100);
        strokeWeight(10);
    
        circle(this.x,this.y,32);
    }

    move() {
            
        if (this.x >= 600-16 || this.x <= 16) {
            this.vx = -this.vx * 2.2;
        }
        if (this.y >= 600-16 || this.y <= 16) {
            this.vy= -this.vy* 2.2;
        }



        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        this.vx = this.vx * 0.9
        this.vy= this.vy* 0.9

        this.x = min(600-16, max(16,this.x));
        this.y = min(600-16, max(16,this.y));
    }
}