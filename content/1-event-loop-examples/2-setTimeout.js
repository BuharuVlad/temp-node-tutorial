//started operationg system process
console.log('first');

setTimeout(() => {
    console.log('second');
}, 0);
console.log('third');
//completed and exited operating system process

//setTimeout is a asynchronous method and because of that the second line from result in the console
//is third because the time to display the second task is much longer than third one.