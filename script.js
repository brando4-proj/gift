const Element = document.getElementById("happy");
        const div = document.querySelector(".container");
        const audioElement = document.createElement("audio");
        const audioElement1 = document.createElement("audio");
        const display = document.getElementById("display");
        const Open = document.getElementById("Receive");
        const paragraph = document.getElementById("paragraph");
        const Img = document.createElement("img");
        const note = document.createElement("p")
        const p = document.createElement("p");
        const button = document.createElement("button");
        const message = document.createElement("p");
        const audio2 = document.createElement("audio");
        const name = document.createElement("p");
        const musicCTTO = document.createElement("p");
        const suggestion = document.createElement("p");
        const quote = document.createElement("p");
        const greeting = document.createElement("p");
        
        
        
        
        const audiolyrics = [
            {time: 0, text: "🎁", src: "none"},
            {time: 1, text: "😊", src: "none"},
            {time: 2, text: "🎀", src: "none"},
            {time: 3.1, text: "1", src: "none"},
            {time: 3.5, text: "2", src: "none"},
            {time: 3.7, text: "3", src: "none"},
            {time: 3.8, text: "GO!", src: "none"},
            {time: 4.3, text: "🗣️ Cocomelon", src: "none"},
            {time: 9, text: "Be ready please.", src: "none"},
            {time: 15, text: "Ready? 😁", src: "none"},
            {time: 17, text: "I think this will be over.", src: "none"},
            {time:  20, text: "🎶", src: "none"},
            {time: 23, text: "Intro.😅", src: "none"},
            {time: 25, text: "😁", src: "none"},
            {time: 28, text: "😄", src: "none"},
            {time: 33, text: "😃", src: "none"},
            {time: 36, text: "😀", src: "none"},
            {time: 38, text: "😕", src: "none"},
            {time: 39, text: "😐", src: "none"},
            {time: 40, text: "👍", src: "none"},
            {time: 43, text: "🥱", src: "none"},
            {time: 45, text: "😴", src: "none"},
            {time: 48, text: "😪", src: "none"},
            {time: 50, text: "🤧", src: "none"},
            {time: 53, text: "😒", src: "none"},
            {time: 55, text: "🙄", src: "none"},
            {time: 57, text: "😤", src: "none"},
            {time: 59, text: "❓❓", src: "none"},
            {time: 60, text: "💢", src: "none"},
            {time: 1 * 60 + 5, text: "😾", src: "none"},
            {time: 1 * 60 + 8, text: "😠", src: "none"},
            {time: 1 * 60 + 10, text: "😡", src: "none"},
            {time: 1 * 60 + 13, text: "🤬", src: "none"},
            {time: 1 * 60 + 16, text: "👿", src: "none"},
            {time: 1 * 60 + 18, text: "😤", src: "none"},
            {time: 1 * 60 + 21, text: "💤💤", src: "none"},
            {time: 1 * 60 + 24, text: "💤", src: "none"},
            {time: 1 * 60 + 28, text: "🎶", src: "none"},
            {time: 1 * 60 + 31, text: "🎶🎶", src: "none"},
            {time: 1 * 60 + 34, text: "🎶🎶🎶", src: "none"},
            {time: 1 * 60 + 37, text: "1", src: "none"},
            {time: 1 * 60 + 38, text: "2", src: "none"},
            {time: 1 * 60 + 39, text: "3", src: "none"},
            {time: 1 * 60 + 39.5, text: "🤨", src: "none"},
            {time: 1 * 60 + 41, text: "SURPRISE!🎉", src: "none"},
            {time: 1 * 60 + 42, text: "Us: 🥳, You: 🙊", src: "none"},
            {time: 1 * 60 + 43, text: "😊❤️💐", src: "none"},
            {time: 1 * 60 + 45, text: "Happy Birthday to you! 🥳", src: "none"},
            {time: 1 * 60 + 48, text: "Lujille kim!", src: "images/lujille.jpg"},
            {time: 1 * 60 + 49, text: "Happy Birthday to you! 😁", src: "none"},
            {time: 1 * 60 + 52, text: "Lujille Kim", src: "images/lujille.jpg"},
            {time: 1 * 60 + 53, text: "Happy Birthday, 😃", src: "none"},
            {time: 1 * 60 + 54, text: "Happy Birthday! 😁", src: "none"},
            {time: 1 * 60 + 55, text: "Happy Birthday to you! 🥳", src: "none"},
            {time: 1 * 60 + 56, text: "Lujille Kim", src: "images/lujille.kim"},
            {time: 1 * 60 + 59, text: "Happy Birthday to you! 😃", src: "none"},
            {time: 1 * 60 + 60, text: "Lujille Kim", src: "images/lujille.kim"},
            {time: 2 * 60, text: "Happy Birthday to you! 😁", src: "none"},
            {time: 2 * 60 + 1, text: "Lujille Kim", src: "images/lujille.jpg"},
            {time: 2 * 60 + 2, text: "Happy Birthday to you! 🥳", src: "none"},
            {time: 2 * 60 + 3, text: "Lujille Kim", src: "images/lujille.jpg"},
            {time: 2 * 60 + 5, text: "Happy Birthday, 😃", src: "none"},
            {time: 2 * 60 + 7, text: "Happy Birthday! 😁", src: "none", },
            {time: 2 * 60 + 9, text: "Happy Birthday to you! 🥳🎶", src: "none"},
            {time: 2 * 60 + 10, text: "Lujille Kim", src: "images/lujille.jpg"},
            {time: 2 * 60 + 20, text: "🥰😄🥳❤️👏", src: "none"},
            {time: 2 * 60 + 25, text: ".", src: "none"},
            {time: 2 * 60 + 26, text: "..", src: "none"},
            {time: 2 * 60 + 27, text: "...", src: "none"},
            {time: 2 * 60 + 28, text: "....", src: "none"},
            {time: 2 * 60 + 28.5, text: "SMILE", src: "none"},
            {time: 2 * 60 + 29, text: "😜", src: "none"},
            {time: 2 * 60 + 30, text: "Please click the heart.", src: "none"}
        ];
        
        
        
        function Display(){
        
           setTimeout(() => {
          
          div.style.display = "block";
        document.getElementById("Receive").onclick = () => {
          paragraph.textContent = "Here is your gift. Open it!"          
          Open.textContent = "Open";
          audioElement.src = "musics/happyBirthday.mp3";
          
          let isplaying = false;
          
          audioElement.ontimeupdate = () => {
           const currentTime = audioElement.currentTime;
           
               let lyrics = "";
               let img = "";
               let plays = true;
               
               
               if(!isplaying){
                   audioElement.play();
                   isplaying = true;
               }
               
                  
                  for(let i = 0; i < audiolyrics.length; i++){
                   if(currentTime >= audiolyrics[i].time){
                    lyrics = audiolyrics[i].text;
                    img = audiolyrics[i].src;
                    
                    if(img === "none"){
                        Img.style.display = "none";
                    } else{
                        Img.style.display = "block";
                        Img.style.objectFit = "contain";
                        Img.style.height =  "100px"
                    } 
                    
                    } else{
                       break;
                   }
                   Element.textContent = lyrics;
               Img.src = img;
                   
                   }     
                   
      

             if(plays){
              Open.remove();
     
              paragraph.textContent = "YEY! You have got:";
              note.style.fontWeight = "350";
              note.textContent = "P.S: Pasensya na sa Picture 🥺";
              note.style.color = "#ffffff";
              note.style.fontSize = "12px";
              button.textContent = "💜";
              button.style.fontSize = "26px";
              button.style.marginTop = "0";
              button.Id = "received";
              div.style.marginTop = "100px"
              suggestion.textContent = "#VOLUME UP PLEASE!";
              suggestion.className = "suggestion";
              
              paragraph.prepend(p);
              display.append(suggestion);
              display.append(note);
              Element.style.height = "auto";
              
              
           }
           
           if(currentTime >= audioElement.duration){
               audioElement.pause();
               isplaying = false;
           };
           
           
           audioElement.onplay = () =>{
               isplaying = true;
           };
           
           audioElement.onpause = () =>{
               isplaying = false;
               display.append(button);
               button.addEventListener('click', () => {
                   finale();
               })
           };

          
          }
          div.style.marginTop = "100px";           
           display.append(Element);
           Element.style.display = "block";
           display.append(Img);
           display.append(audioElement);
           Img.style.width = "100%";
           Img.style.margin = "0";
           Img.style.borderRadius = "20px";
           audioElement.style.width = "100%";
           button.className = "Receive";
           button.id = "Received";
            
         
           
           
           

           
          }
          
          
          }, 2000)
          
          
                    
          
          
          
          
          
          
          }
        
        
        function finale(){
          
            setTimeout(() =>{
               
               audio2.src = "musics/dance_all_night.mp3";
               audio2.play();
               
               button.remove();
               const contents = document.querySelector(".container");               
               const imgElement = document.createElement("img");
               
               div.textContent = "HAPPY 18th BIRTHDAY";
               div.style.fontSize = "20px";
               div.style.display = "flex";
               div.style.flexDirection = "column";
               div.style.margin = "20px 10px 20px 10px";
               div.style.color = "#ffffff";
               imgElement.style.marginTop = "20px";
               imgElement.src = "images/kim.jpeg";
               imgElement.style.width = "200px";
               imgElement.alt = "photo_NOT_MINE";
               imgElement.padding = "20px";
               imgElement.border = "2px dotted #ff4424";
               message.style.fontSize = "20px";
               greeting.style.fontSize = "20px";
               greeting.style.textAlign = "left";
               greeting.innerHTML = `<i>Dear Lujille Kim:</i>`
               message.innerHTML = `Happy happy birthday Kim 🥳🥰! sana naresibe mo ini sa magayon na orog(?)/mood. gusto ko sanang sabihon na nagpapasalamat ako sa mga panahon na kita nagkairibahan lalo na sa mga kalokohan na piggibo ta kaito. saka sa mga girumdom/alaala na satuyong tiniripon/binuo. eu lang. Dakol pang mga kagustohan mo sabuhay na maabot. Ini ang keyk 🎂🍰, kakanon mo ini ta haká mo ini!`;
               message.style.textAlign = "justify";
               name.textContent = "Lujille Kim Clutario";
               name.style.textAlign = "center";
               musicCTTO.style.textAlign = "left";
               musicCTTO.style.fontSize = "12px";
               musicCTTO.textContent = "Music: Dance_all_Night 🎶🎶🎶          Rosé/Rosie/Roseanne-Park/Park-Chaeyong/Roseanne-Chaeyong-Park";
               musicCTTO.style.fontFamily = "courier new";
               quote.innerHTML = `"Every year on your birthday, you get a new chance to start new." <br>~Sammy Hagar`;
               quote.style.fontStyle = "italic";
               
               
               
               contents.append(audio2);
               contents.append(greeting);
               contents.append(message);
               contents.append(quote);
               contents.append(imgElement);
               contents.append(name);               
               contents.append(musicCTTO);
               
      
           }, 2000);
              
  
        }
               
        Display(finale);
