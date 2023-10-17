import {
  firstResult,
  secondResult,
  firstOption,
  secondOption,
  filter,
  input,
  labelFrom,
  labelTo,
  resultLabel1,
  resultLabel2,
  errMsg,
  convertBtn
} from "./app.js";

import { pattern } from "./validation.js";

export default function recentConvertion() {
  const emptyText = document.querySelector("#emptyText");
  const listContainer = document.querySelector("#listContainer");
  filter.addEventListener("change", handleFilterChange);

  function handleFilterChange(e) {
    const filterValue = e.target.value;

    const conversions = document.querySelectorAll(".list");
    let showEmptyText = true;

    conversions.forEach((conversion) => {
      const firstName = conversion.getAttribute("firstName");
      const secondName = conversion.getAttribute("secondName");

      if (
        filterValue === "all" ||
        filterValue === firstName ||
        filterValue === secondName
      ) {
        conversion.style.display = "flex";
        showEmptyText = false;
      } else {
        conversion.style.display = "none";
        emptyText.innerHTML = `No recent convertion for ${filter.value}`;
      }
    });
    
    
    emptyText.style.display = showEmptyText ? "block" : "none";
  }

  function createConversionElement() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    const list = document.createElement("div");
    list.classList.add("list");
    list.setAttribute("firstName", firstOption.value);
    list.setAttribute("secondName", secondOption.value);

    if (
      filter.value === "all" ||
      filter.value === firstOption.value ||
      filter.value === secondOption.value
    ) {
      emptyText.style.display = "none";
      list.classList.add("Active");
    } else {
      list.classList.add("notActive");
    }

    const listFormatter = document.createElement("div");
    listFormatter.classList.add("listFormat");

    const removeList = document.createElement("span");
    removeList.classList.add("removeList");
    removeList.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    const editList = document.createElement("span");
    editList.classList.add("editList");
    editList.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

    listFormatter.innerHTML = `
        <div class="format">
        <div class="pContainer">
          <span class="firstFormatval">
          ${firstOption.value}
          </span>
          ~  
           <span class="secondFormatval">
           ${secondOption.value} 
           </span>
        </div> 
        • &nbsp;
        <time>
        ${formattedHours} : ${minutes} : ${seconds} ${amOrPm}
        </time>                          
      </div>

      `;

    listFormatter.appendChild(editList);
    listFormatter.appendChild(removeList);

    const recentInput1 = document.createElement("input");
    recentInput1.type = "text";
    recentInput1.setAttribute("readonly", "readonly");
    recentInput1.value = firstResult.value;

    list.appendChild(recentInput1);

    const recentInput2 = document.createElement("input");
    recentInput2.type = "text";
    recentInput2.setAttribute("readonly", "readonly");
    recentInput2.value = secondResult.value;

    list.appendChild(recentInput2);

    list.appendChild(listFormatter);
    listContainer.appendChild(list);

    removeList.addEventListener("click", () => {
      list.remove();

      if(listContainer.childElementCount === 1){
        emptyText.style.display = "block";
        emptyText.innerHTML = "No recent convertion";
      }

    });

    editList.addEventListener("click", handleEditList);

    function handleEditList() {
      const tempFirstOption = list.getAttribute("firstName");
      const tempSecondOption = list.getAttribute("secondName");

      const patternNames = {
        binary: "binary",
        decimal: "decimal and octal",
        octal : "decimal and octal",
        hexadecimal: "hexadecimal",
      };

      const patterns = {
        binary : pattern.binary,
        decimal : pattern.decimal,
        octal : pattern.decimal,
        hexadecimal : pattern.hexadecimal,
      }

      list.remove();
      input.focus();
      input.value = recentInput1.value;

      firstOption.value = tempFirstOption;
      secondOption.value = tempSecondOption;
      labelFrom.innerHTML = `From: ${tempFirstOption}`;
      labelTo.innerHTML = `To: ${tempSecondOption}`;
      resultLabel1.textContent = tempFirstOption;
      resultLabel2.textContent = tempSecondOption;
      secondResult.value = recentInput2.value;
      firstResult.value = recentInput1.value;

      errMsg.innerHTML = "";
      const selectedOptions = firstOption.value;

        
      if(patterns[selectedOptions]){
        input.setAttribute("name", patternNames[selectedOptions]);
        input.setAttribute("pattern", patterns[selectedOptions]);
      }

      if (input.checkValidity()) convertBtn.removeAttribute("disabled");
      
    }
  }

  // Create the initial conversion element
  createConversionElement();
}
