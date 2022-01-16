/*

function encodeAndDecodeMessages() {
    const inputFields = document.querySelectorAll('textarea');
    
    const encodeInputField = inputFields[0];
    const decodeInputField = inputFields[1];
    const buttons = Array.from(document.querySelectorAll('main button'));

    for (let button of buttons) {
        
        if (button.textContent.includes("Encode")) {
            button.addEventListener("click", Encode)
            
        } else if (button.textContent.includes("Decode")) {
            button.addEventListener("click", Decode)
        }
    }

    function Encode(ev) {
        const field = ev.target.parentElement
        const fields = field.querySelectorAll("textarea")
        console.log(fields)
        let messageArray = []
        
        let currMessage = encodedmessage.value
        for (let i = 0; i < currMessage.length; i++) {
            let currentSymbol = currMessage.charCodeAt(i);
            messageArray.push(String.fromCharCode(currentSymbol + 1))
        }

        let decodedmessage = field.querySelectorAll("textarea")[1]
       // decodedmessage.value = "";
       // encodedmessage.value = messageArray.join("")
    }
        
    function Decode(ev) {
    }
}
*/

function encodeAndDecodeMessages() {
    document.getElementById('main').addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }
 
        let decodedMessage = document.getElementsByTagName('textarea')[0];
        let encodedMessage = document.getElementsByTagName('textarea')[1];
 
        if (e.target.textContent.includes('Encode')) {
            let message = decodedMessage.value;
            let encoded = [];
            for (let i = 0; i < message.length; i++) {
                let currSymbol = message.charCodeAt(i);
                encoded.push(String.fromCharCode(currSymbol + 1));
            }
            decodedMessage.value = '';
            encodedMessage.value = encoded.join('');
        } else if (e.target.textContent.includes('Decode')) {
            let message = encodedMessage.value;
            let decoded = [];
            for (let i = 0; i < message.length; i++) {
                let currSymbol = message.charCodeAt(i);
                decoded.push(String.fromCharCode(currSymbol - 1));
            }
            encodedMessage.value = decoded.join('');
        }
    });
}
