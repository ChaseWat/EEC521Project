document.getElementById("clickme").addEventListener("click", function makeACopy() {
    let anchor = document.createElement('a');
    let link = document.createTextNode("Make A Template Compy");
    anchor.appendChild(link);
    anchor.href = "https://docs.google.com/spreadsheets/d/1OCua8Bc4TwRyyMIS9HtrSeTsgyZGVaWCgggE1qx36Co/copy";
    document.body.appendChild(anchor);
});

