import header from "../componets/header.js";
import "./main.css";
import { router } from "./routes/router.js";


const divApp = document.querySelector('#app');
header();


window.addEventListener('DOMContentLoaded', () => {
    router(divApp);
});

window.addEventListener('hashchange', () => {
 router(divApp);
});


