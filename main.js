
window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth - 15;
    canvas.height = window.innerHeight - 15;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
        update() {

        }
        draw() {
            
        }
    }
});