import axios from "axios";

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
    /*axios({
        method: "GET",
        url: ""
    })
    */
    return "/images/cards/" + number + ".jpg";
}
