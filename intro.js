// Global - No window.
// __dirname - path to current directory.

// __filename - filename
// require  - function to use modules(CommonJS)
// module  - info about current module(file)
// process  - info about env where the program is being executed.

console.log(__filename);
setInterval(()=>{
    console.log("HELLO THERE!");
},2000);
