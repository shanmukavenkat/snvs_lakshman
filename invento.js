var array = [{
    book_number: "20001",
    title: "CLIENT/ SERVER PROGRAMMING WITH JAVA AND CORBA",
    author: "ORFALI, ROBERT",
}, {
    book_number: "20017",
    title: "DIGITAL CONTROL SYSTEMS",
    author: "KUO, BENJAMIN C.",
}, {
    book_number: "20001",
    title: "CLIENT/ SERVER PROGRAMMING WITH JAVA AND CORBA",
    author: "ORFALI, ROBERT",
}, {
    book_number: "20001",
    title: "CLIENT/ SERVER PROGRAMMING WITH JAVA AND CORBA",
    author: "ORFALI, ROBERT",
}];

function saveButton() {
    var bookName = document.getElementById("enterName").value.toLowerCase();
    var bookSerialNumber = document.getElementById("rollNo").value.toLowerCase();
    var authorName = document.getElementById("authorName").value.toLowerCase();

    // Check if all input fields are empty
    if (bookName === "" && bookSerialNumber === "" && authorName === "") {
        document.getElementById('searchResult').innerHTML = ""; // Clear the search result div
        return; // Exit the function
    }

    var filteredArray = array.filter(function (item) {
        return (item.title.toLowerCase().includes(bookName) ||
            item.book_number.toLowerCase().includes(bookSerialNumber) ||
            item.author.toLowerCase().includes(authorName));
    });

    var tableContent = "";
    if (filteredArray.length > 0) {
        tableContent += `
            <table class="table table-bordered">
                <tr class="bg-primary-subtle text-primary fw-bold">
                    <td>Book Number</td>
                    <td>Title</td>
                    <td>Author</td>
                </tr>
        `;

        filteredArray.forEach(function (item) {
            tableContent += `
                <tr>
                    <td>${item.book_number}</td>
                    <td>${item.title}</td>
                    <td>${item.author}</td>
                </tr>
            `;
        });

        tableContent += `</table>`;
    } else {
        tableContent = '<span class="text-danger">No data found</span>';
    }

    document.getElementById('searchResult').innerHTML = tableContent;
}
