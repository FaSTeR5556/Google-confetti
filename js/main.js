// Start

const start = () => {
    setTimeout(function(){
        confetti.start()
    },1000);
};


// Stop

const stop = () =>{
    setTimeout (function (){
        confetti.stop();
    },7000)
};

start();
stop();