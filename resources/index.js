
//fetch from XAMMP directory. I dunno kung gagana siya sa laragon pero parang required kase ginagamit ni sir ren
fetch('http://localhost/Charles_SourceFile/main.php').then(res => {
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
                
            <div class="col-6 col-auto mt-8 w-70"> 
                <div class="round">
                    <div class="card" align ="center" style="width: 100%; height: 100%">
                    
                        <h3 class="card-title">EN : <i><u> ${datas[`${dt}`].title.english} </u></i> </h3>
                        <h3 class="card-title">JP : <i><u> ${datas[`${dt}`].title.japanese} </u></i> </h3>
                        <hr>
                        
                        <img class="rounded mx-auto d block" src="${datas[`${dt}`].imgpath}" alt="Card image cap">
                        
                        <hr>
                        <div class="card-body">
                          
                            <class="card-text"><h4>Author</h4> <i><u><b> ${datas[`${dt}`].author} </b></u></i>
                                <br>
                                <br>
                            <class="card-text"><h4>Genre</h4> <i><u><b> ${datas[`${dt}`].genre} </b></u></i>

                                <br>
                                <br> 

                            <class="card-text"><h4>Seasons</h4> <i><u><b> ${datas[`${dt}`].season} </b></u></i>

                                <br>
                                <br>
                                <hr>

                            <p class="card-text"><h4>Description</h4> ${datas[`${dt}`].description}</p>
                        </div>
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

