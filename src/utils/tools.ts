export function beautifyArray(arr: []): string {
    return arr.map(item => {
        if (typeof item === 'string') {
            return item;
        } else {
            return JSON.stringify(item);
        }
    }).join(', ');
}

export function getCardImage(number: string): string {
    return "https://gitee.com/DH-DoveG/KLSD-DB/raw/master/image/" + number + ".jpg";
}
