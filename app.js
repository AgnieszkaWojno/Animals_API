
function other(){
    alert('Other!')
}

function showAnimals(){  
    
}

let main = document.querySelector("#main")
const button1 = document.querySelector("#b1")
button1.addEventListener('click',validation)
function validation(){
    let ile = document.querySelector("#number").value
    if(!ile.match(/^\d+/))
        {
        alert("Please enter only numeric characters")
        }
    if(ile<1 || ile >10)
    {
        alert("Please enter only mumber from 1 to 10")
    }
    else{
        main.innerHTML = ''
        loadZoo(ile)
    }
}
function loadZoo(ile){
    //let ile = document.querySelector("#number").value
    //validation(ile)
    let element = document.getElementById("main")
    element.classList.remove("cards")
    element.classList.add("unvisible")
    console.log("number= ",number)

   // const addressURL = "https://zoo-animal-api.herokuapp.com/animals/rand/" + ile.toString  //String(ile)
    //console.log(addressURL)
    axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/"+ ile.toString()).then(result => {
        console.log(result);
        result.data.forEach(animal => {
            let name = animal.name;
            let geo = animal.geo_range;
            let imageZoo = animal.image_link
            console.log(imageZoo)
            let habitat = animal.habitat
            let latin_name = animal.latin_name
            let next_card = document.createElement("div")
            document.getElementById("main").appendChild(next_card)
            let name_paragraf = document.createElement("p")
            next_card.appendChild(name_paragraf)
            name_paragraf.setAttribute("class","nazwy")
            name_paragraf.innerHTML = name
            let zooImage = document.createElement("img")
            next_card.appendChild(zooImage)
            next_card.setAttribute("class","cards")
            zooImage.setAttribute("src",imageZoo)
            let paragraf = document.createElement("p")
            next_card.appendChild(paragraf)
            paragraf.setAttribute("class","paragraf")
            let table = document.createElement("table")
            next_card.appendChild(table)
            let row1 = document.createElement("tr")
            table.appendChild(row1)
            let cell1 = document.createElement("th")
            row1.appendChild(cell1)
            cell1.innerHTML = "Location:"
            let cell2 = document.createElement("td")
            row1.appendChild(cell2)
            cell2.innerHTML = geo

            let row2 = document.createElement("tr")
            table.appendChild(row2)
            cell1 = document.createElement("th")
            row2.appendChild(cell1)
            cell1.innerHTML = "Latin name:"
            cell2 = document.createElement("td")
            row2.appendChild(cell2)
            cell2.innerHTML = latin_name
        });
     
    })
}

