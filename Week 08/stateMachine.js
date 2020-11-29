// Example 1
// Find abcde with state machine
// Problem with this one is if string is 'ababcdef' return value will be false, to solve this issue, check example 2
// Example2 will change start in foundX to start(c)
function exmaple1(str = 'I am abcdef') {
    function match(string) {
        let state = start;
    
        for(let c of string) {
            // Iteratelly change value of state
            // If variable is 'a', then state will be record that A is found, and start found B.
            state = state(c);
        }
    
        return state === end;
    }
    
    function start(c) {
        if (c === 'a')
            return foundA;
        else
            return start(c);
    }
    
    function end(c) {
        return end;
    }
    
    function foundA(c) {
        if (c === 'b') 
            return foundB;
        else
            return start(c);
    }
    
    function foundB(c) {
        if (c === 'c')
            return foundC;
        else
            return start(c);
    }
    
    function foundC(c) {
        if (c === 'd') 
            return foundD;
        else
            return start(c);
    }
    
    function foundD(c) {
        if (c === 'e') 
            return end;
        else
            return start(c);
    }
    
    console.log(match(str));
}


// Example 2
function exmaple2 (str = 'I am ababcdef') {
    function match(string) {
        let state = start;
    
        for(let c of string) {
            // Iteratelly change value of state
            // If variable is 'a', then state will be record that A is found, and start found B.
            state = state(c);
        }
    
        return state === end;
    }
    
    function start(c) {
        if (c === 'a')
            return foundA;
        else
            return start;
    }
    
    function end(c) {
        return end;
    }
    
    function foundA(c) {
        if (c === 'b') 
            return foundB;
        else
            return start;
    }
    
    function foundB(c) {
        if (c === 'c')
            return foundC;
        else
            return start(c);
    }
    
    function foundC(c) {
        if (c === 'd') 
            return foundD;
        else
            return start;
    }
    
    function foundD(c) {
        if (c === 'e') 
            return end;
        else
            return start(c);
    }
    
    console.log(match(str));
}


// Practice 1, use state machine to find 'abcabx'
function exmaple3 (str = 'I am abcabx') {
    function match(string) {
        let state = start;
    
        for(let c of string) {
            // Iteratelly change value of state
            // If variable is 'a', then state will be record that A is found, and start found B.
            state = state(c);
        }
    
        return state === end;
    }
    
    function start(c) {
        if (c === 'a')
            return foundA;
        else
            return start;
    }
    
    function end(c) {
        return end;
    }
    
    function foundA(c) {
        if (c === 'b') 
            return foundB;
        else
            return start;
    }
    
    function foundB(c) {
        if (c === 'c')
            return foundC;
        else
            return start(c);
    }
    
    function foundC(c) {
        if (c === 'a') 
            return foundA2;
        else
            return start;
    }
    
    function foundA2(c) {
        if (c === 'b') 
            return foundB2;
        else
            return start(c);
    }

    function foundB2(c) {
        if (c === 'x')
            return end;
        else
            return start(c);
    }
    
    console.log(match(str));
}


// Example 4
// Find 'abababx'
function exmaple4 (str = 'I am abababx') {
    function match(string) {
        let state = start;
    
        for(let c of string) {
            // Iteratelly change value of state
            // If variable is 'a', then state will be record that A is found, and start found B.
            state = state(c);
        }
    
        return state === end;
    }
    
    function start(c) {
        if (c === 'a')
            return foundA;
        else
            return start;
    }
    
    function end(c) {
        return end;
    }
    
    function foundA(c) {
        if (c === 'b') 
            return foundB;
        else
            return start;
    }
    
    function foundB(c) {
        if (c === 'a')
            return foundA2;
        else
            return start(c);
    }
    
    function foundA2(c) {
        if (c === 'b') 
            return foundB2;
        else
            return start;
    }
    
    function foundB2(c) {
        if (c === 'a') 
            return foundA3;
        else
            return start(c);
    }

    function foundA3(c) {
        if (c === 'b') 
            return foundB3;
        else
            return start(c);
    }
     
    function foundB3(c) {
        if (c === 'x') 
            return end;
        else
            return start(c);
    }
    
    console.log(match(str));
}

// 可选作业：我们如何用状态机处理完全未知的 pattern？ （参考资料：字符串 KMP 算法 https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm）

