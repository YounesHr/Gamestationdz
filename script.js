var button = document.getElementById("button");
    button.onclick = function() {
        var searchingWord = document.getElementById("search").value;
        if(searchingWord === "Fortnite") {
            window.open("search-result.html" , "_self");
        }
        else if(searchingWord === "fortnite") {
            window.open("search-result.html", "_self");
        }
        else {
            alert("Write the name of the game you want correctly!");
        }
    }
        