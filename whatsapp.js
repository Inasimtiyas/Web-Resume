/* ===== WhatsApp Smart Floating Button ===== */

const whatsappNumber = "773865713"; 

// Create Button
const waBtn = document.createElement("a");
waBtn.href = `https://wa.me/${whatsappNumber}`;
waBtn.target = "_blank";
waBtn.className = "wa-floating";
waBtn.innerHTML = `

<div class="wa-box">
    <div class="wa-text">Need help? Chat with me</div>
    <div class="wa-icon">💬</div>
</div>
`;

document.body.appendChild(waBtn);

// Timing Animation
function showButton(){
waBtn.style.display = "flex";
waBtn.style.opacity = "1";

```
setTimeout(()=>{
    waBtn.style.opacity = "0";

    setTimeout(()=>{
        waBtn.style.display = "none";
    },600);

},5000); // visible 5 seconds
```

}

// First show after 4 seconds
setTimeout(()=>{
showButton();

```
// repeat forever
setInterval(showButton,15000);
```

},4000);
