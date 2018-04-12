// We need to import the stats.js lib
// from https://cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js
// in an HTML file. We also need to
// compile this file into a JS file
// and import it in the same HTML file.

interface StatsInstance {
    domElement: HTMLElement;
    setMode(mode: 0 | 1): void;
    begin(): void;
    end(): void;
}

declare const Stats: { new(): StatsInstance };

let stats = new Stats();

stats.setMode(1); // 0: fps, 1: ms

// Position of the frame rate counter (align top-left)
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";

document.body.appendChild(stats.domElement);

function doSomething() {
    console.log(2 * 2);
}

let update = function() {
    stats.begin();
    doSomething();
    stats.end();
    requestAnimationFrame(update);
};

requestAnimationFrame(update);
