    let EnterText = document.querySelector('.text');
    
    let searching = document.getElementById("poem");

    function generatePoem(event){
      event.preventDefault();
      let Enter = `<p class="wait">⏳ Generating a poem about <span class="searchFor">${EnterText.value}</span></p>`;
      searching.innerHTML = Enter;

      let text = document.querySelector(".wait");
      
      function toggleText() {
        if (text.style.display === 'none') {
          text.style.display = 'block';
          searching.style.height = "52px";
        } else {
          text.style.display = 'none';
          searching.style.height = "52px";
        }
      }
      setInterval(toggleText, 700);
      new Typewriter(".searching",{
        String: "hello",
        autoStart: true,
        delay: 1,
        cursor: "",
      });
    };
    
    let poemGeneratorForm = document.querySelector('form');
    poemGeneratorForm.addEventListener("submit", generatePoem);
    
