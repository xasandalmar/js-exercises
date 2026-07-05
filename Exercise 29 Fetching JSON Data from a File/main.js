async function fetchRealJSONFile() {
    try {
        console.log("Bilaabay fetch...");
        
        // fetch() wuxuu keenayaa faylkii dhabta ahaa
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
        
        // .json() wuxuu si otomaatig ah u sameynayaa Parsing (wuxuu u beddelayaa Object)
        const data = await response.json(); 
        
        console.log("Xogtii faylka dhabta ah:", data);
    } catch (error) {
        console.error("Error faylka marka la keenayay:", error);
    }
}

fetchRealJSONFile();
console.log("Koodhka kale waa kan iskaga socda...");