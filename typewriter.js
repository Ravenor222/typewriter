const sentence = "hello there from lighthouse labs";
let msTimer = 0;

for(const char of sentence) {


    setTimeout(() => {
        
        process.stdout.write(char);
        

    }, msTimer)

    msTimer += 50;
}
setTimeout(() => {
    process.stdout.write("\n");
}, msTimer)