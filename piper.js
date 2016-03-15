const piper = function(c) {
  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "--": n => -n,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "**": (a, b) => Math.pow(a, b),
    "pi": () => Math.PI
  }
  
  const stack = []
  
  c = c.split(/\s+/g)
  c.forEach(t => {
    if (parseFloat(c) !== NaN) {
      stack.push(parseFloat(c))
    } else {
      var args = []
      for (var i = 0; i < ops[t].length; i++)
        args.push(stack.pop())
      stack.push(ops[t](...args))
    }
  })
  return stack[stack.length - 1]
}
