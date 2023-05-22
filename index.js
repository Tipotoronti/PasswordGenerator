const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let placeholderOneEl = document.getElementById("placeholder-one-el")
let placeholderTwoEl = document.getElementById("placeholder-two-el")
let savePassword = 0

function getRandomCharacter() {
    let randomindex = Math.floor(Math.random()*characters.length);
    return characters[randomindex]
}


function generatePasswords() {
    placeholderOneEl.textContent = " ";
    placeholderTwoEl.textContent = " ";
    for (i = 0; i < 15; i++) {
    placeholderOneEl.innerHTML += getRandomCharacter()
    placeholderTwoEl.textContent += getRandomCharacter()
    }
}


let text = document.getElementById('placeholder-one-el').innerHTML;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}

placeholderOneEl.addEventListener('click', copyPassword);
placeholderTwoEl.addEventListener('click', copyPassword);
  
  function showNotification(message) {
    if (Notification.permission === 'granted') {
      new Notification(message);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(message);
        }
      });
    }
  }
  
  function copyPassword() {
    const password = this.textContent;
    navigator.clipboard.writeText(password)
      .then(() => {
        console.log('Content copied to clipboard');
        showNotification('Password copied to clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  }