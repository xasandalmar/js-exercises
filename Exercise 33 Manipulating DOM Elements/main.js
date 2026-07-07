 function changeContent() {
            const header = document.querySelector("#header");
            const paragraph = document.querySelector("#paragraph");

            // Changing text content
            header.textContent = "Welcome to the DOM!";
            // Changing HTML content
            paragraph.innerHTML = "This content has been <strong>updated</strong>.";
        }