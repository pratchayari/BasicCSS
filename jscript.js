fetch(rawGitUrl)
.then(response => response.text())
.then(data => {
    // Split the content into lines
    const lines = data.split('\n');

    // Format the lines with line numbers
    const formattedCode = lines.map((line, index) => `${index + 1}: ${line}`).join('\n');

    document.getElementById('raw-code').innerText = formattedCode;
})
.catch(error => console.error('Error fetching raw file:', error));