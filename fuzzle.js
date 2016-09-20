console.log(buildSeq(getI(process.argv)))

function getI(argv, defaultVal=8) {
    if(argv.length < 3) return defaultVal

    try {
        const i = Number.parseInt(argv[2])
        return (!i || isNaN(i) || i < 1 || i > 500)
            ? defaultVal
            : i
    }
    catch(e) {
        return defaultVal
    }
}

function buildSeq(n) {
    let theSeq = []
    for(let i = 0; i < n; i++) theSeq.push(seq(i))
    return theSeq
}

function seq(i) {
    if(i === 0) return 1
    else return seq(i-1) + i * fib(i)
}

function fib(i) {
    if(i === 0) return 1
    else if(i === 1) return 1
    else return fib(i-2) + fib(i-1)
}
