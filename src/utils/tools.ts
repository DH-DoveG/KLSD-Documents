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
    console.log("/KLSD-Documents" + "/images/cards/" + number + ".jpg");
    return "/KLSD-Documents" + "/images/cards/" + number + ".jpg";
}
