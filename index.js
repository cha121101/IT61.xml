//create a variable where store all the documents in xml
const animeData = ``;

//create a variable where in store lists from xml element
let listTitle = ``; 
let listGenre = ``;

//create a variable where data is stored in the table

// type of anime  , title , author , genre


let tableData = `
        
    <tr>
        <th> Type of anime </th>
        <th>  Title </th>
        <th>  Author</th>
        <th>  Genre </th>
        
    </tr>


`


//crete a function(arror function sheeshh) where can feteh data from the xml file, then it returns data from the xml to html text.
fetch('anime.xml').then(res =>{
    return res.text()
}).then(animeData =>{
    const xmlDocs = new DOMParser().parseFromString(animeData , 'text/xml');
    let datas = xmlDocs.querySelector('anime').children;


    //create a for each where can show all the datas from the variable data
    for(const dt of datas){
            
        //create a for each where get all the list in the data

        //listTitle
        for(const getTile of dt.querySelector('title').children){
            listTitle += `
                         <li> ${getTile.textContent}</li>
                         `
        }
        //listGenre
        for(const getGenre of dt.querySelector('genre').children){
            listGenre += `
                         <li> ${getGenre.textContent}</li>
                         `
        }
        //this
        tableData += `
                 <tr>
                        <td> ${dt.tagName}</td>
                        <td><ul>  ${listTitle} </ul></td>
                        <td> ${dt.querySelector('author').textContent}</td>
                        <td><ul>  ${listGenre} </ul></td>
                </tr>
 
                     `
            //call a variales listTitle and listGenre and make make it value into '';
            listTitle = ``;
            listGenre = ``;
    }
    document.getElementById('animeData').innerHTML = tableData;
})



