async function isGoogleAccessible() {
    const url = "https://www.google.com";
    try {
        const response = await fetch(url);
        return response.ok;
    } catch (error) {
        return false;
    }
}

const googleAccessible = await isGoogleAccessible();
async function isXboxBlocked() {
    const url = "https://www.xbox.com";
    try {
        const response = await fetch(url);
        return !response.ok;
    } catch (error) {
        return true;
    }
}

const xboxBlocked = await isXboxBlocked();
const resElement = document.getElementById("res");
resElement.textContent = `Google accessible: ${googleAccessible}, Xbox blocked: ${xboxBlocked}`;
