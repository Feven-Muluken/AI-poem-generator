function displayPoem(response) {
  console.log("poem generated")
  console.log(response.data.answer)
  new Typewriter("#writePoem",{
    strings: [response.data.answer],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
};
function generatePoem(event){
  event.preventDefault();
  let EnterText = document.querySelector('.inputText');
  let searching = document.getElementById("poem");
  let writePoem = document.getElementById("writePoem");

  let apiKey = "cb8540803900a4b63a58b24827o4tf1f";
  prompt = `Generate a poem about ${EnterText.value}`;
  context = "write a short peom in basic html separate each line eith a <br/>.no header ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);

  searching.innerHTML = `<p class="blink">⏳ Generating a poem about ${EnterText.value}</p>`;

  let text = document.querySelector(".wait");
  writePoem.classList.remove("hidden")
  
  console.log(`prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  
};


let poemGeneratorForm = document.querySelector('form');
poemGeneratorForm.addEventListener("submit", generatePoem);

