//this where all the xml file is stored
const datas = `
`;
//needs to store other datas that are in lists
let sepTitle  = ``;
let sepGenre = ``

let showDatas =`
<tr>
    <th>Kind of anime</th>
    <th>Title</th>
    
    <th>Author</th>    
    <th>Season</th>   
    <th>Genre</th>      
</tr>
    `;
    //<th>Description</th>
    fetch("anime.xml").then(response =>{
        return response.text();
    }).then(datas =>{
        const xmldocs = new DOMParser().parseFromString(datas , 'text/xml');
        let animeData = xmldocs.querySelector('anime').children;
        // console.log(animeData);
        for (const dt  of animeData){
            
            for(const t of dt.querySelector('title').children){
                sepTitle += `
                        <li> ${t.textContent}</li>
                `
            }
            for(const t of dt.querySelector('genre').children){
                sepGenre += `
                        <li> ${t.textContent}</li>   
                `
            }

            showDatas += `
                <tr>
                    <td>${dt.tagName} </td>
                    <td> <ul> ${sepTitle} </ul> </td>
                    
                    <td>${dt.querySelector('author').textContent}</td>
                    <td>${dt.querySelector('season').textContent}</td>
                    <td> <ul> ${sepGenre} </ul> </td>
                </tr>
            `
            // <td>${dt.querySelector('description').textContent} </td>
            sepTitle = ""
            sepGenre = ""
            
            // console.log(dt.querySelector('description').textContent);
            // console.log(dt.querySelector('author').textContent);
            // console.log(dt.querySelector('season').textContent)
            // console.log(dt.querySelector('genre').textContent);
            
        }
        document.getElementById('animeDatas').innerHTML = showDatas;
    })



