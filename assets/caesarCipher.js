export default function caesarCipher(str, shift) {

    // To compare the strings properly I will make every letter lower case

    let plaintext = str.toLowerCase();

    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let encrypted = "";

    for(let i = 0; i < plaintext.length; i++) {

        // Find the index of the letter that will encrypt

        if(isLetter(plaintext[i])) {
            let indexOfLetter = alphabet.indexOf(plaintext[i]);
            encrypted += alphabet[(indexOfLetter + shift) % 26];

        }
        else {
            encrypted += plaintext[i];
        }

    }

    return encrypted;

}

// Checking if the given char is letter

function isLetter(char) {
    return char.toLowerCase() != char.toUpperCase();

}