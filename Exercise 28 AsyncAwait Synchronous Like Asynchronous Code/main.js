// 1. Marka hore waxaan samaynaynaa function ku dayanaya keenista xogta
function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Axmed", role: "Developer" });
        }, 2000); // Wuxuu sugayaa 2 ilbiriqsi (2 seconds)
    });
}

// 2. Koodhkaagii async/await ee ahaa displayUserData
async function displayUserData() {
    try {
        console.log("Start fetching user data...");
        const user = await fetchUserData(); // Halkan ayuu koodhku yara joogsanayaa
        console.log("User data:", user);
    } catch (error) {
        console.error("Error:", error);
    }
}

// 3. Fulinaya koodhka
displayUserData();
console.log("This message runs immediately and is not blocked.");