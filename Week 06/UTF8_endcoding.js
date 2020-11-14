// 写一段 JS 的函数，把一个 string 它代表的字节给它转换出来，用 UTF8 对 string 进行遍码。

function UTF8_endcoding(string) {
    const charList = [];

    for (const str of string) {
        let code = str.charCodeAt(0);

        charList.push(code);
    }

    return charList;
}
