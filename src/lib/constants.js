import { readable, writable } from 'svelte/store';
let windowHeight= 0;
let windownWidth = 0;

// user
export function resetUser() {
    user.set({
        name:undefined, 
        email:undefined, 
        loggedIn: false, 
        confirmed: false,
        grade: undefined
    });
}
export let user = writable({
    confirmed: false,
    name:undefined, 
    email:undefined, 
    loggedIn: false,
    grade: undefined
});

let confirmedValue;
export const unsubscribe = user.subscribe(value => {
    confirmedValue = value.confirmed;
});

// sidebar
export function updateSize() {
    windowHeight = window.innerHeight;
    windownWidth = window.innerWidth;

    if (confirmedValue) {
        if (windownWidth < 800){
            sidebar_width_em.set({
                width: 0,
                display: "none"
            });
        } else {
            sidebar_width_em.set({
                width: 15,
                display: "block"
            });
        }
    }
}
window.addEventListener("resize", updateSize);
export let sidebar_width_em = writable({
    width: 15,
    display: "block" //TODO: change back to "none" when done debugging
});

// constants
export const title_size_em = 3;
export const subtitle_size_em = 1.5;
export const yellow_color = "rgba(255, 218, 26, 1)";
export const outline_width_em = 0.3;
export const outline_style = "outline-color:"  + yellow_color + ";" +
                             "outline-width: " + outline_width_em+"em;"+
                             "outline-style: solid;";

