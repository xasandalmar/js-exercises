function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulating success or failure
            if (success) {
                resolve({ id: 1, name: "John Doe" });
            } else {
                reject("Failed to fetch user data");
            }
        }, 3000);
    });
}

fetchUserData()
    .then(data => console.log("User Data:", data))
    .catch(error => console.error("Error:", error));
