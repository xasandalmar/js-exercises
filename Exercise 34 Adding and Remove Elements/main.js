function changeImage() {
    // 1. Soo qabashada qaybta sawirka (DOM Element)
    const image = document.querySelector('#image');

    // 2. Weydiinta isticmaalaha (Prompts)
    const url = prompt("Please enter your image URL:");
    const borderColor = prompt("Please enter your desired border color (e.g., red, blue, #000):");
    const width = prompt("Please enter the width of the image (in pixels):");
    const height = prompt("Please enter the height of the image (in pixels):");
    const borderRadius = prompt("Please enter the border radius (in pixels):");

    // 3. Meelmarinta iyo beddelidda qaabka sawirka si dynamic ah
    if (url) {
        image.setAttribute('src', url);
    }
    
    if (borderColor) image.style.border = `4px solid ${borderColor}`;
    if (width) image.style.width = `${width}px`;
    if (height) image.style.height = `${height}px`;
    if (borderRadius) image.style.borderRadius = `${borderRadius}px`;
    
    // Style-kii dheeraadka ahaa
    image.style.padding = "10px";
    image.style.backgroundColor = '#cfc2dc';
}