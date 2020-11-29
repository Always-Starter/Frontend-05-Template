function findA (str) {
    if (!str.includes('a' || 'A')) return;

    const aPos = [];

    for (const key in str) {
        if (str[key].toLowerCase() === 'a')
            aPos.push(key);
    }

    return aPos;
}