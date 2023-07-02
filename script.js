const textArea = document.querySelector(".main-text-area");
const mensaje = document.querySelector(".text-area-message");
//ENCRIPTAR
// La letra "e" se convierte en "enter"
// La letra "i" se convierte en "imes"
// La letra "a" se convierte en "ai"
// La letra "o" se convierte en "ober"
// La letra "u" se convierte en "ufat"

function encrypt(encryptedString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  console.table(matrixCode)

  encryptedString = encryptedString.toLowerCase()

  for (let i = 0; i < matrixCode.length; i++) {
    //condición
    if (encryptedString.includes(matrixCode[i][0])) {
      encryptedString = encryptedString.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }
  }
  return encryptedString
}

//FUNCIÓN BOTON ENCRIPTAR
function btnEncrypt() {
  const encryptedText = encrypt(textArea.value)
  mensaje.value = encryptedText
  textArea.value ="";
  //mensaje.computedStyleMap.backgroundImage = "none"
}

function decrypt(decryptedString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  console.table(matrixCode)

  decryptedString = decryptedString.toLowerCase()

  for (let i = 0; i < matrixCode.length; i++) {
    //condición
    if (decryptedString.includes(matrixCode[i][1])) {
      decryptedString = decryptedString.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }
  }
  return decryptedString
}

//FUNCIÓN BOTON ENCRIPTAR
function btnDecrypt() {
  const encryptedText = decrypt(textArea.value)
  mensaje.value = encryptedText
  textArea.value ="";
}

//FUNCIÓN BOTON COPIAR
function btnCopy(){
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  alert("Texto Copiado")
  mensaje.value = "";

}