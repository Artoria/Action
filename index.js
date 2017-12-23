const action = fn =>{
    const run = data => fn => run(fn(data))
    return run()(fn);
}

module.exports = action;