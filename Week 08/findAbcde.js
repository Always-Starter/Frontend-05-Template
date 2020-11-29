function findAbcde(str) {
    if (!str.toLowerCase().includes('abcde')) return;

    const abcdePos = [];
    for (let i = str.length; i > 0; i--) {
        if (i - 5 <= 0) return;

        if ((str[i - 4] + str[i - 3] + str[i - 2] + str[i - 1] + str[i]).toLowerCase() === 'abcde') {
            abPos.push(i);
        }
    }
}