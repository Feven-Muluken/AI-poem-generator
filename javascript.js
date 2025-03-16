function displayPoem(response) {
  console.log("poem generated")
  console.log(response.data.answer)
  new Typewriter("#fool",{
    strings: [response.data.answer],
    autoStart: true,
    delay: 1,
    cursor: "",
    loop: false,
    onComplete: function () {
      // Ensure the text is preserved after the animation
      document.querySelector("#fool").innerHTML = response.data.answer;
    },

  });
  // let poem = document.querySelector(".searching")
  // poem.textContent(response.data.answer)
};
let EnterText = document.querySelector('.inputText');

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

  let apiKey = "cb8540803900a4b63a58b24827o4tf1f";
  prompt = `Generate a poem about ${EnterText.value}`;
  context = "write a short peom in basic html separate each line eith a <br/>.no header ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
  console.log(`prompt: ${prompt}`);
  // console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  // console.log(displayPoem)
  
};


let poemGeneratorForm = document.querySelector('form');
poemGeneratorForm.addEventListener("submit", generatePoem);

