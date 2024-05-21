async function isGoogleAccessible() {
    const url = "https://www.google.com";
    try {
        const response = await fetch(url);
        return response.ok;
    } catch (error) {
        return false;
    }
}

async function isXboxBlocked() {
    const url = "https://www.xbox.com";
    try {
        const response = await fetch(url);
        return !response.ok;
    } catch (error) {
        return true;
    }
}

// Call the functions and display the results
(async () => {
    const googleAccessible = await isGoogleAccessible();
    const xboxBlocked = await isXboxBlocked();

    const resElement = document.getElementById("res");
    resElement.textContent = `Google accessible: ${googleAccessible}, Xbox blocked: ${xboxBlocked}`;
})();
