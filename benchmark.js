const { performance } = require('perf_hooks');

// Mock DOM
const document = {
  documentElement: { scrollHeight: 2000 }
};
const window = {
  innerHeight: 1000,
  scrollY: 0,
  listeners: {},
  addEventListener(event, cb) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(cb);
  },
  removeEventListener(event, cb) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(fn => fn !== cb);
    }
  },
  requestAnimationFrame(cb) {
    if (!this.rafQueue) this.rafQueue = [];
    this.rafQueue.push(cb);
  },
  triggerRaf() {
    if (this.rafQueue) {
      const queue = this.rafQueue;
      this.rafQueue = [];
      queue.forEach(cb => cb());
    }
  }
};

let renderCount = 0;
function setScrollProgress(val) {
  // Simulating react state update cost
  renderCount++;
  for(let i=0; i<1000; i++) {} // simulated work
}

// Baseline implementation
function baselineHandler() {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  setScrollProgress(progress);
}

// Optimized implementation
let ticking = false;
function optimizedHandler() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      ticking = false;
    });
    ticking = true;
  }
}

function runBenchmark(name, handler) {
  renderCount = 0;
  window.scrollY = 0;
  const start = performance.now();

  // Simulate 1000 scroll events in one frame
  for (let i = 0; i < 10000; i++) {
    window.scrollY = i % 1000;
    handler();
  }

  // trigger animation frame at the end of the batch
  window.triggerRaf();

  const end = performance.now();
  console.log(`${name}: ${(end - start).toFixed(2)}ms (renders: ${renderCount})`);
  return end - start;
}

const baselineTime = runBenchmark('Baseline', baselineHandler);
const optimizedTime = runBenchmark('Optimized', optimizedHandler);

console.log(`Improvement: ${((baselineTime - optimizedTime) / baselineTime * 100).toFixed(2)}% faster`);
