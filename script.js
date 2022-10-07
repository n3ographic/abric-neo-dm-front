var str = "http://127.0.0.1:5500/produit.html?name=Nike-Air-Max-SKY&price=150€&description=Chaussure de course";

var url = new URL(str);

var search_params = new URLSearchParams(url.search);
if(search_params.has('name', 'description' )){
    var name = search_params.get('name');
    document.getElementById('product-choose-title').innerHTML = "<h3>"+name +"</h3>  <p>chaussure unisexe</p>";

} 

if(search_params.has('description' )){
    var description = search_params.get('description');
    document.getElementById('test').innerHTML = "<p>"+ description +"</p>";
} 

