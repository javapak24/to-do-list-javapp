function newItem(){
    
let li = $("<li></li>");
let inputValue = $("#input").val();
li.append(inputValue);

if(inputValue === ""){
    alert("you must type something");
}
else{
    $("#list").append(li);
}

function crossOut (){
    li.toggleClass("strike");
}

li.on("dblclick", crossOut);

let crossOutButton = $("<crossOutButton></crossOutButton>");
$(crossOutButton).append(document.createTextNode("X"));
li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);

function deleteListItem (){
    li.addClass("delete");
};

$("#list").sortable();

}


