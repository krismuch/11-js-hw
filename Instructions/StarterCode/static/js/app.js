// Assign the data from `data.js` to a tableData variable
var tableData = data;

// CODE ADAPTED FROM LESSON 3 ACTIVITY 03-EVR_D3_TABLE
// Copied reference to tbody in order to call it within function
// Copied Step 5 from example
// Put a function around the copied code so that I could call it later to display the filtered data
// After I was done I removed prints to the console

// Get a reference to the table body
var tbody = d3.select("tbody");

// Display the data from data.js to html table
function display(data) {
tbody.text("")
data.forEach(function(data) {
  var row = tbody.append("tr");
  Object.entries(data).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
})};

display(tableData);

// CODE ADAPTED FROM LESSON 3 ACTIVITY 09-PAR_FORM_FILTER (Filter data on ABO blood type and display stats)
// Our button is name differently in index.html - updated #button to #filter-btn
// The input element is different in index.html - updated #patient-form-input to #datetime
// Changed the filteredData elements to be applicable to our data
// Called function defined above to display the filtered data. In the example stats were displayed instead. 
// After I was done I removed prints to the console

// Select the button
var button = d3.select("#filter-btn"); 

button.on("click", function() {
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Filter data table on the inputValue
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  // Display filtered data with function to display data defined above
  display(filteredData);
});


