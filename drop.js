var maxWind = 2;
function Drop() {
    var letterList =  ["F", "U", "C", "K", "Y", " "];
    this.letter = letterList[Math.floor(random(0, letterList.length - 1))];
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.wind = random(0.1,maxWind);
    this.color = getRandomColor();

    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 1, 20);

    function getRandomColor() {
       
        return [random(0, 255), random(0, 255), random(0, 255)];
      }

    this.fall = function () {
        this.y = this.y + this.yspeed;
        var grav = map(this.z, 0, 20, 0, 0.2);
        this.yspeed = this.yspeed + grav;
        this.x += this.wind;

        if (this.y > height || this.x > width || this.x < 0) {
            this.y = random(-200, -100);
            this.yspeed = map(this.z, 0, 20, 4, 10);
            this.letter = letterList[Math.floor(random(0, letterList.length - 1))];
            this.color = getRandomColor();
            this.wind = random(0,maxWind);
            this.x = random(width);
        }
    }

    this.show = function () {
        var thick = map(this.z, 0, 50, 10, 70);
        // strokeWeight(thick);
        // stroke(138, 43, 226);
        // line(this.x, this.y, this.x, this.y + this.len);
        textSize(thick);
        fill(this.color[0], this.color[1], this.color[2]);
        text(this.letter, this.x, this.y);
    }
}