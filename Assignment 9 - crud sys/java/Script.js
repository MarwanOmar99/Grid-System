var ProductName = document.getElementById("ProducName");
var ProducPrice = document.getElementById("ProducPrice");
var ProducDec = document.getElementById("ProducDec");
var ProducCat = document.getElementById("ProducCat");
var TableBody = document.getElementById("TableBody");
var AddUp = document.getElementById("AddUp");
var continerProduct = [];
var currentIndex ;
if (localStorage.getItem("AllProducts")!=null){
    continerProduct = JSON.parse(localStorage.getItem("AllProducts"))
    DisplayProduct(continerProduct);
}

function ForValidtae(){
    if ((AddUp.innerHTML == "Add Product") == true){
        var Product = {
            Name : ProductName.value ,
            Price : ProducPrice.value ,
            Des : ProducDec.value ,
            Cat : ProducCat.value ,   
        };
        continerProduct.push(Product);
        localStorage.setItem("AllProducts",JSON.stringify(continerProduct));
        DisplayProduct(continerProduct); 
        ClearProduct();
    } else {
        UpdateOpject();
    }
}
function ClearProduct(){
    ProductName.value = "";
    ProducPrice.value = "";
    ProducDec.value = "";
    ProducCat.value = "";
}

function DisplayProduct(ArrayProduct){
    BOX = ``;
    for (i = 0 ; i < ArrayProduct.length ; i++){
    BOX += `             <tr>
                            <td>${i + 1}</td>
                            <td>${ArrayProduct[i].Name}</td>
                            <td>${ArrayProduct[i].Price}</td>
                            <td>${ArrayProduct[i].Des}</td>
                            <td>${ArrayProduct[i].Cat}</td>
                            <td>
                                <button class="btn btn-danger" onclick="DeleteItem(${i});">Delete</button>
                                <button class="btn btn-warning" onclick="GetOpject(${i});">Update</button>
                            </td>
                        </tr>
    `;
    }
    TableBody.innerHTML = BOX;
}
function GetOpject(index){
    currentIndex = index;
    ProductName.value=continerProduct[index].Name;
    ProducPrice.value=continerProduct[index].Price;
    ProducDec.value=continerProduct[index].Des;
    ProducCat.value=continerProduct[index].Cat;
    AddUp.innerHTML = "Update Products";
}
function UpdateOpject(){
    var Product = {
        Name : ProductName.value ,
        Price : ProducPrice.value ,
        Des : ProducDec.value ,
        Cat : ProducCat.value ,   
    };
    continerProduct[currentIndex] = Product;
    localStorage.setItem("AllProducts",JSON.stringify(continerProduct));
    ClearProduct();
    DisplayProduct(continerProduct);
    AddUp.innerHTML = "Add Product";
}
function DeleteItem(index){
    continerProduct.splice(index, 1);
    DisplayProduct(continerProduct)
    localStorage.setItem("AllProducts",JSON.stringify(continerProduct));
}
function SearchFilter(Term) {
    var Filter = [];
    for (var i = 0 ; i < continerProduct.length ; i++){
        if (continerProduct[i].Name.toUpperCase().includes(Term.toUpperCase()) == true)
        {
            Filter.push(continerProduct[i]);
            DisplayProduct(Filter);
        }
        DisplayProduct(Filter);
    }
}
function ClearAll(){
    localStorage.removeItem("AllProducts");
    continerProduct=[];
    DisplayProduct(continerProduct);
}
function verfication(){
    var rgx = /^[1-9]{1,}$/;
    if ((rgx.test(ProducPrice.value))==true){
        ProducPrice.classList.add("is-valid");
        ProducPrice.classList.remove("is-invalid");
    }else
    {
        ProducPrice.classList.remove("is-valid");
        ProducPrice.classList.add("is-invalid")
    }

}
function verfication1(){
    var rgx2 = /^[A-Z][a-z]{3,10}$/;
    if ((rgx2.test(ProductName.value))==true){
        ProductName.classList.add("is-valid");
        ProductName.classList.remove("is-invalid");
    }else
    {
        ProductName.classList.remove("is-valid");
        ProductName.classList.add("is-invalid")
    }
}
function verfication2(){
    var rgx2 = /^[A-Z][a-z]{5,50}$/;
    if ((rgx2.test(ProducDec.value))==true){
        ProducDec.classList.add("is-valid");
        ProducDec.classList.remove("is-invalid");
    }else
    {
        ProducDec.classList.remove("is-valid");
        ProducDec.classList.add("is-invalid")
    }
}
function verfication3(){
    var rgx2 = /^(Phone|Device|Laptop|Clothe)$/;
    if ((rgx2.test(ProducCat.value))==true){
        ProducCat.classList.add("is-valid");
        ProducCat.classList.remove("is-invalid");
    }else
    {
        ProducCat.classList.remove("is-valid");
        ProducCat.classList.add("is-invalid")
    }
}

