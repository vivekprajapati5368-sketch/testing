console.log('Hello');
setTimeout(() => {
    console.log('Hello after 2 seconds')
}, 2000);

for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        console.log('Hello after 2 seconds')
    }, 1000);
}