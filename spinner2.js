const spin = ['|','/','-','\\','|','/','-','\\','|'];
let time = 100;
for(let picture of spin){
  setTimeout(() => {
    process.stdout.write(`\r${picture}   `);
  }, time);
  time += 200;
}

setTimeout(() => {
  console.log("");
}, time);
