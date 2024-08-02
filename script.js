// Funkcja do załadowania zawartości pliku txt
function loadFile(filePath, callback) {
    var req = new XMLHttpRequest();
    req.onload = function() {
        // Wywołanie funkcji zwrotnej z odpowiedzią (zawartością pliku)
        callback(this.responseText);
    };
    req.open('GET', filePath, true);
    req.send();
}

// Funkcja do przetwarzania zawartości pliku i wyświetlania obrazów z podpisami
function displayImagesWithCaptions(content) {
    const lines = content.split("\n");

    for (let i = 0; i < lines.length; i += 2) {
        const imageUrl = lines[i].trim(); // Nieparzysta linia - URL obrazu
        const caption = lines[i + 1] ? lines[i + 1].trim() : ""; // Parzysta linia - Podpis
        
        // Tworzenie elementu div do zgrupowania obrazów
        const divO = document.createElement("div");
        divO.className = `ObrazPodpis`;

        // Tworzenie elementów DOM dla obrazu i podpisu
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageElement.alt = caption;

        const captionElement = document.createElement("p");
        captionElement.textContent = caption;

        // Dodanie elementów do dokumentu
        document.getElementById('obrazy').appendChild(divO);
        divO.appendChild(imageElement);
        divO.appendChild(captionElement);
    }
}

// Ładowanie pliku i wyświetlanie obrazów z podpisami
loadFile("./dane.txt", displayImagesWithCaptions);
