###
学习笔记:
###

1. 用block statement分割代码块，这样可以在分割开的代码块中声明相同的变量名
```
const a = () => {
    {
        let name = "Lisa";
        console.log(name);
    }
    {
        let name = "Lucy";
        console.log(name);
    }
}
```
2. break outer for loop with label
```
outer: for(let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i + j === 10)
            break outer;
    }
}
```
3. How to write a promise correctly and use promise to create a sleep function
```
const sleep = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
};
```
4. Recursion is magic 🧙‍♀️