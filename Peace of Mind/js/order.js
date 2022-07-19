me.emailCheckout = function() {    

    itemsString = "";
    for( var current in me.items ){ 
        var item = me.items[current];
        itemsString += item.name + " " + item.quantity + " " + item.price + "\n";
    }   

    var form = document.createElement("form");
    form.style.display = "none";
    form.method = "POST";
    form.action = "sendjs.php";
    form.acceptCharset = "utf-8";
    form.appendChild(me.createHiddenElement("jcitems", itemsString));
    form.appendChild(me.createHiddenElement("jctotal", me.total));
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form); 
}