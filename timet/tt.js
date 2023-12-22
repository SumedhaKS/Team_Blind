document.addEventListener("DOMContentLoaded", function() {
    // Get the table element
    var scheduleTable = document.getElementById("scheduleTable");

    // Get the save, reset, and edit buttons
    var saveButton = document.getElementById("saveButton");
    var resetButton = document.getElementById("resetButton");

    // Save button click event
    saveButton.addEventListener("click", function() {
        // Iterate through all the cells with contenteditable="true"
        var editableCells = scheduleTable.querySelectorAll("td[contenteditable='true']");
        var savedData = {};

        editableCells.forEach(function(cell) {
            // Save the content of each cell with its corresponding day and time
            var day = cell.parentNode.cells[0].textContent;
            var time = cell.parentNode.cells[1].textContent;
            savedData[day + " " + time] = cell.textContent;
        });

        // You can send the savedData object to the server or localStorage for storage
        console.log("Saved Data:", savedData);
        alert("Timetable saved successfully!");
    });

    // Reset button click event
    resetButton.addEventListener("click", function() {
        // Clear the content of all cells with contenteditable="true"
        var editableCells = scheduleTable.querySelectorAll("td[contenteditable='true']");
        editableCells.forEach(function(cell) {
            cell.textContent = "";
        });

        alert("Timetable reset successfully!");
    });
});
