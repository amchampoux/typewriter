const sentence = "hello there from lighthouse labs";

let timer;
let i = 0;

const type = function() {
  process.stdout.write(sentence[i]);
  i++;
  if (i >= sentence.length) {
    clearInterval(timer);
    process.stdout.write('\n');
  }
};

timer = setInterval(type, 1000);


