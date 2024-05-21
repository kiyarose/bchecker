async function fetchData(url) {
            try {
                const response = await fetch(url, { mode: 'cors' }); // Add 'mode: cors'
                if (response.ok) {
                    return 'Internet is working.';
                } else {
                    return 'Internet is blocking something.';
                }
            } catch (error) {
                return 'Error fetching data.';
            }
        }

        async function displayResults() {
            const googleResult = await fetchData('https://www.google.com');
            const xboxResult = await fetchData('https://www.xbox.com');

            const resElement = document.getElementById('res');
            resElement.innerHTML = `<p>Google: ${googleResult}</p><p>Xbox: ${xboxResult}</p>`;
        }
displayResults();
