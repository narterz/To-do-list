//text from form that is appended to list
let form = document.getElementById("container__form--input");
//button that is clicked to add text to list
let add = document.getElementById("container__form--btn");
//list that will contain the text from the input
let list = document.getElementById("container__list");
//clear all button
const clear = document.getElementById("clear");

//add a button event listner
      //create an paragraph element that is to be stored in the list
      //change the text of the paragraph to match the input text
      //append the paragraph into the container list
      //append the text in the input to the paragraph variable
      //remove the text from the input after clicking button
      //add styling to the paragraph (refrence the styling from sass)

add.addEventListener("click", () => {
      if (form.value.length == 0){
            alert("Please enter task!");
      }
      else {
            var wrapper = document.createElement("div");
            wrapper.classList.add("to-do-wrapper");
            var para = document.createElement("p");
            let exit = document.createElement("button");
            exit.innerText = "x";
            exit.classList.add("exit-btn");
            wrapper.appendChild(para);
            wrapper.appendChild(exit);
            para.innerText = form.value;
            list.appendChild(wrapper);
            form.value = '';

            exit.addEventListener('click', () => {
                  list.removeChild(wrapper);
            });
      };
});


