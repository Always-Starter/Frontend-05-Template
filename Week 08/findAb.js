function findAb(str) {
    if (!str.toLowerCase().includes('ab')) return;

    const abPos = [];
    for (let i = 0; i < str.length; i++) {
        if (i === str.length - 1) return;

        if ((str[i] + str[i + 1]).toLowerCase() === 'ab') {
            abPos.push(i);
        }
    }
}