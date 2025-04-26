import header from "../componets/header.js";
import{ loadView }from "./helpers/loadView.js";
import "./main.css";


const divApp = document.querySelector('#app');
header()


window.addEventListener('hashchange', () => {
    loadView(divApp);
});


