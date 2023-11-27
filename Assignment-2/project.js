fetch ("https://openapi.programming-hero.com/api/videos/categories")
    .then (res=>res.json())
    .then (data=>{
        const all_btn_name = data.data[0].category;
        document.getElementById("all_btn_fun").innerHTML=all_btn_name;

        const music_btn_name = data.data[1].category;
        document.getElementById("music_btn_fun").innerHTML=music_btn_name;


        const comedy_btn_name = data.data[2].category;
        document.getElementById("com_btn_fun").innerHTML=comedy_btn_name;


        const draw_btn_name = data.data[3].category;
        document.getElementById("drawing_btn_fun").innerHTML=draw_btn_name;
    });

// All



const allBtnFunction = () =>{
    fetch ("https://openapi.programming-hero.com/api/videos/categories")
    .then (res=>res.json())
    .then (data=>{
        const all_btn_id = data.data[0].category_id;
        fetch(`https://openapi.programming-hero.com/api/videos/category/${all_btn_id}`)
        .then(res=>res.json())
        .then(videos=>{displayDataAll(videos.data)})
    })
};

const displayDataAll = (videos) =>{
    const allSelect= document.getElementById("video_container");
    allSelect.innerHTML="";
    const videoContainer = document.getElementById("video_container");
    if (videos.length==0){
        const card = document.createElement("div");
       card.classList.add("notice")
       card.innerHTML=`
       <div class=notice_container>
       <img clas="icon" src="./Icon.png" alt="" srcset="">
       <h1>NO VIDEO FOUND</h1>
       </div>`;
       videoContainer.appendChild(card);
    }
    videos.forEach((video)=>{
       const card = document.createElement("div");
       card.classList.add("box")
       card.innerHTML=`
       <img class="box_img" src = "${video.thumbnail}" alt="">
       <div class="title_auth">
           <img class="author_img" src = "${video.authors[0].profile_picture}"alt="">
           <h2 class="box_title">${video.title}</h2>
       </div>

       <div class="auth_name_verification">
          <p class="auth_name">${video.authors[0].profile_name}</p>
          <p class="varification">Verification : ${video.authors[0].verified?video.authors[0].verified:"NOT"}</p>
       </div>
         <p class="views">Views : ${video.others.views}</p>`
       videoContainer.appendChild(card);
    })
}



// Music
const musicBtnFunction = () => {
    fetch ("https://openapi.programming-hero.com/api/videos/categories")
    .then (res=>res.json())
    .then (data=>{
        // console.log(data);
        const music_btn_id = data.data[1].category_id;
        fetch(`https://openapi.programming-hero.com/api/videos/category/${music_btn_id}`)
        .then (res=>res.json())
        .then (musics=>{displayDataMusic(musics.data)})
    })
}

const displayDataMusic = (videos) =>{
    const allSelect= document.getElementById("video_container");
    allSelect.innerHTML="";
    const videoContainer = document.getElementById("video_container");
    if (videos.length==0){
        const card = document.createElement("div");
       card.classList.add("notice")
       card.innerHTML=`
       <div class=notice_container>
       <img clas="icon" src="./Icon.png" alt="" srcset="">
       <h1>NO VIDEO FOUND</h1>
       </div>`;
       videoContainer.appendChild(card);
    }
    videos.forEach((video)=>{
       const card = document.createElement("div");
       card.classList.add("box")
       card.innerHTML=`
       <img class="box_img" src = "${video.thumbnail}" alt="">
       <div class="title_auth">
           <img class="author_img" src = "${video.authors[0].profile_picture}"alt="">
           <h2 class="box_title">${video.title}</h2>
       </div>

       <div class="auth_name_verification">
          <p class="auth_name">${video.authors[0].profile_name}</p>
          <p class="varification">Verification : ${video.authors[0].verified?video.authors[0].verified:"NOT"}</p>
       </div>

       <div class="view">
         <p class="views">Views : ${video.others.views}</p>
       </div>
       <p></p>`;
       videoContainer.appendChild(card);
    })
}


// Comedy
const ComFunction=()=>{
    fetch ("https://openapi.programming-hero.com/api/videos/categories")
    .then (res=>res.json())
    .then (data=>{
        fetch ("https://openapi.programming-hero.com/api/videos/categories")
        .then (res=>res.json())
        .then (data=>{
            // console.log(data);
            const music_btn_id = data.data[2].category_id;
            fetch(`https://openapi.programming-hero.com/api/videos/category/${music_btn_id}`)
            .then (res=>res.json())
            .then (comedies=>{displayDataComedy(comedies.data)})
    })
    })
}

const displayDataComedy = (videos) =>{
    const allSelect= document.getElementById("video_container");
    allSelect.innerHTML="";
    const videoContainer = document.getElementById("video_container");
    if (videos.length==0){
        const card = document.createElement("div");
       card.classList.add("notice")
       card.innerHTML=`
       <div class=notice_container>
       <img clas="icon" src="./Icon.png" alt="" srcset="">
       <h1>NO VIDEO FOUND</h1>
       </div>`;
       videoContainer.appendChild(card);
    }
    videos.forEach((video)=>{
       const card = document.createElement("div");
       card.classList.add("box")
       card.innerHTML=`
       <img class="box_img" src = "${video.thumbnail}" alt="">
       <div class="title_auth">
           <img class="author_img" src = "${video.authors[0].profile_picture}"alt="">
           <h2 class="box_title">${video.title}</h2>
       </div>

       <div class="auth_name_verification">
          <p class="auth_name">${video.authors[0].profile_name}</p>
          <p class="varification">Verification : ${video.authors[0].verified?video.authors[0].verified:"NOT"}</p>
       </div>

       <div class="view">
         <p class="views">Views : ${video.others.views}</p>
       </div>
       <p></p>`;
       videoContainer.appendChild(card);
    })
}

//drawing
const DrawBtnFunction=()=>{
    fetch ("https://openapi.programming-hero.com/api/videos/categories")
    .then (res=>res.json())
    .then (data=>{
        fetch ("https://openapi.programming-hero.com/api/videos/categories")
        .then (res=>res.json())
        .then (data=>{
            // console.log(data);
            const music_btn_id = data.data[3].category_id;
            fetch(`https://openapi.programming-hero.com/api/videos/category/${music_btn_id}`)
            .then (res=>res.json())
            .then (drawings=>{displayDataDrawing(drawings.data)})
    })
    })
}

const displayDataDrawing = (videos) =>{
    const allSelect= document.getElementById("video_container");
    allSelect.innerHTML="";
    const videoContainer = document.getElementById("video_container");
    if (videos.length==0){
        const card = document.createElement("div");
       card.classList.add("notice")
       card.innerHTML=`
       <div class=notice_container>
       <img clas="icon" src="./Icon.png" alt="" srcset="">
       <h1>NO VIDEO FOUND</h1>
       </div>`;
       videoContainer.appendChild(card);
    }
    videos.forEach((video)=>{
       const card = document.createElement("div");
       card.classList.add("box")
       card.innerHTML=`
       <img class="box_img" src = "${video.thumbnail}" alt="">
       <div class="title_auth">
           <img class="author_img" src = "${video.authors[0].profile_picture}"alt="">
           <h2 class="box_title">${video.title}</h2>
       </div>

       <div class="auth_name_verification">
          <p class="auth_name">${video.authors[0].profile_name}</p>
          <p class="varification">Verification : ${video.authors[0].verified?video.authors[0].verified:"NOT"}</p>
       </div>

       <div class="view">
         <p class="views">Views : ${video.others.views}</p>
       </div>
       <p></p>`;
       videoContainer.appendChild(card);
    })
}
allBtnFunction()