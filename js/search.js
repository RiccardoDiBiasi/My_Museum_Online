var NS4 = (document.layers);
var IE4 = (document.all);
var win = window;
var n = 0;

function trovaInPagina(str) {
    var testo, i, found;
    if(str == "") return false;
    if(NS4) {
        if(!win.find(str))
            while(win.find(str, false, true)) n++;
        else  
            n++;
    if(n == 0) alert("Non trovato.");
    }

    if(IE4) {
        testo = win.document.body.createTextRange();
        for(i = 0; i <= n && (found = testo.findText(str)) != false, i++){
            testo.moveStart("character", 1);
            testo.moveEnd("textedit");
        }
        if(found) {
            testo.moveStart("character", -1);
            testo.findText(str);
            testo.select();
            testo.scrollIntoView();
            n++;
        }
        else {
            if(n > 0) {
                n = 0;
                trovaInPagina(str);
            }
            else alert("Scusa, non siamo riusciti a trovare quello che cercavi.");
        }
    }
    return false;
}