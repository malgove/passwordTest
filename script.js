function validate() {
    let password = document.getElementById("passwordInput").value;
    if (password.length >= 8) {
        //hasło spełnia wymógł długości
        let li = document.getElementById("passwordLength");
        li.innerHTML = "Hasło ma co najmniej 8 znaków";
        // można tak: li.style.color = "red";
        //ale lepiej tak jka poniżej to jest czytelny rozdział od designu:
        li.className = "green";
    } else {
        //hasło nie spełnia wymogu długości
        let li = document.getElementById("passwordLength");
        li.innerHTML = "Hasło nie ma co najmniej 8 znaków";
        // można tak: li.style.color = "red";
        //ale lepiej tak jka poniżej to jest czytelny rozdział od designu:
        li.className = "red";
    }
    //przygotuj wzorce dla małe i wielkie litery, znaki specjalnje
    let chars = "abcdefghijklmnopqrstuwxyz";
    let capitalChars = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
    let digits = "0123456789";
    let specialChars = "!@#$%^&*()_+-=:;?/<>|";

    //znaleziono małą literę
    let charsFound = false;
    //znaleziono wielką literę
    let capitalCharsFound = false;
    //znaleziono cyfrę 
    let digitsFound = false;
    //znaleziono znak specjalny
    let specialsFound = false;

    //logika wyszukiwania znakow...

    //iterujemy przez całe hasło porównując każdy znak ze znakami wzorcowymi, tworzymy pętle
    for (let i = 0; i < password.length; i++) {
        console.log("Licznik (i) wynosi:" + i);
        //sprawdz w tablicy chars czy istnieje i-ty znak z hasłem (password)
        console.log("szukam w malych literach");
        if (chars.indexOf(password[i]) > -1) {
            //znalazł we wzorcu
            console.log("znak " + password[i] + " znaleziono!");
            charsFound = true;
        }
        if (capitalChars.indexOf(password[i]) > -1) {
            //znalazł we wzorcu
            console.log("znak " + password[i] + " znaleziono!");
            capitalCharsFound = true;
        }
        if (digits.indexOf(password[i]) > -1) {
            //znalazł we wzorcu
            console.log("znak " + password[i] + " znaleziono!");
            digitsFound = true;
        }
        
    }
    console.log("Koniec pętli!");

    //wyświetlanie wyników
    let charsLi = document.getElementById("chars");
    if (charsFound) {
        charsLi.innerHTML = "Hasło zawiera małe litery";
        charsLi.className = "green";
    } else {
        charsLi.innerHTML = "Hasło nie zawiera małych liter";
        charsLi.className = "red";
    }
    
    let capitalCharsLi = document.getElementById("capitalChars");
    if (capitalCharsFound) {
        capitalCharsLi.innerHTML = "Hasło zawiera Wielkie litery";
        capitalCharsLi.className = "green";
    } else {
        capitalCharsLi.innerHTML = "Hasło nie zawiera Wielkich liter";
        capitalCharsLi.className = "red";
    }

    let digitsLi = document.getElementById("digits");
    if (digitsFound) {
        digitsLi.innerHTML = "Hasło zawiera cyfry";
        digitsLi.className = "green";
    } else {
        digitsLi.innerHTML = "Hasło nie zawiera cyfr";
        digitsLi.className = "red";
    }
 
    
}



window.addEventListener("load", () => {
    document.getElementById("passwordInput").addEventListener("input", validate)
})