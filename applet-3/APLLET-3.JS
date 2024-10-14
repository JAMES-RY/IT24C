document.addEventListener('DOMContentLoaded', function() {
    const logButton = document.getElementById('logButton');
    const logList = document.getElementById('logList');
    const logCountDisplay = document.getElementById('logCount');
    let logCount = 0;

    logButton.addEventListener('click', () => {
        // Create a new log entry
        const logItem = document.createElement('li');
        const currentDate = new Date().toLocaleString();
        logItem.textContent = `Log created at: ${currentDate}`;

        // Append the log item to the list
        logList.appendChild(logItem);

        // Update the log count
        logCount++;
        logCountDisplay.textContent = logCount;
    });
});