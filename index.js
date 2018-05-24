var g = undefined;

$("#draw-button").click(function(){
    var grammar  = $("#grammar-textarea").val();

    if(g === undefined){
        g = new Graph(grammar);
    }else{
        g.do(grammar);
    }

    c3.generate(g.generateJson())
});