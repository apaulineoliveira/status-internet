let alerta = document.getElementById("alerta");

let alertaOnline = () => {
    alerta.textContent = "Sua internet está conectada!";
    alerta.style.cssText = "color: #7CFC00";
};

let alertaOffline = () => {
    alerta.textContent = "Sua internet foi desconectada.";
    alerta.style.cssText = "color: #B22222";    
};

if(window.navigator.onLine) {
    alertaOnline();
}

else {    
alertaOffline();
}

window.addEventListener("online", alertaOnline);
window.addEventListener("offline", alertaOffline);