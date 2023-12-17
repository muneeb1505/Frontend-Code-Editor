function run() {
    let htmlcd = document.getElementById("html-code").value;
    let csscd = document.getElementById("css-code").value;
    let jscd = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlcd + "<style>" + csscd + "</style>";
    output.contentWindow.eval(jscd);
}