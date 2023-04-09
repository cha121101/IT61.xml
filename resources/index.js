
//fetch from XAMMP directory. I dunno kung gagana siya sa laragon pero parang required kase ginagamit ni sir ren
fetch('http://localhost/IT61.xml/main.php').then(res => {
    //all the data frem the fetch will return as text.
    return res.text()

    //because of .then function we can get all the retured data and store it into JSONdata variable
}).then(JSONdata => {

    //since that 
    var datas = JSON.parse(JSONdata);

    //because I can't access the array of the JSON file, so I decide to get all the keys in datas
    var getkeys = Object.keys(datas)

    //this variable will be injected inside the HTML file
    var msg = ``;

    //since that getkeys is array type, so i decide to loop it and extract/get all the element in arrays.
    for (var dt of getkeys) {

        //
        msg += `
            <div class="col-2 col-auto mt-5 w-20"> 
                <div class="card" style="width: 100%; height: 100%">
                <img class="card-img-top" src="${datas[`${dt}`].imgpath}" alt="Card image cap" style="height : 1000px">
                <div class="card-body">
                <h5 class="card-title">English : ${datas[`${dt}`].title.english} </h5>
                <h5 class="card-title">Japanese : ${datas[`${dt}`].title.japanese}</h5>
                <p class="card-text">Author :${datas[`${dt}`].author}</p>
                <p class="card-text">Genre : ${datas[`${dt}`].genre.list}</p>
                <p class="card-text">Season : ${datas[`${dt}`].season}</p>
                <p class="card-text">Author :${datas[`${dt}`].description}</p>
                </div>
                </div>
            </div>
        `;

        // <div>
        // <img src="${datas[`${dt}`].imgpath}" alt="waley" srcset="">
        //     <p>Titles</p>
        //     <p>English : ${ datas[`${dt}`].title.english  } , Japanese : ${ datas[`${dt}`].title.japanese  } </p> 
        //     <p>Author : ${ datas[`${dt}`].author  }</p>
        //     <p>Genre : ${ datas[`${dt}`].genre.list } </p>
        //     <p>Season : ${ datas[`${dt}`].season  } </p>
        //     <p>Description</p>
        //     <p>${ datas[`${dt}`].description  }</p>
        //     <hr>
        // </div>

    }
    document.getElementById('vars').innerHTML = msg;

})

