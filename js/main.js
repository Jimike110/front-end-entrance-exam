// /* jshint esversion: 6 */

// document.addEventListener("DOMContentLoaded", () => {
//   // const body = document.querySelector("body");

//   // if (body) {
//     const textElements = document.querySelectorAll(
//       "h1, h2, h3, h4, h5, h6, p, span, li, a"
//     );

//     // Helper function to generate unique IDs
//     // const generateId = (element) => {
//     //   return `${element.tagName.toLowerCase()}-${Array.from(
//     //     body.getElementsByTagName(element.tagName)
//     //   ).indexOf(element)}`;
//     // };

//     // Load saved content from LocalStorage
//     textElements.forEach((element) => {
//       element.addEventListener("click", () => {
//       // const id = generateId(element);
//       const id = element.getAttribute("data-id");
//       // element.setAttribute("data-id", id);

//       const savedContent = localStorage.getItem(id);
//       if (savedContent) {
//         element.innerHTML = savedContent;
//       }

//       // Make the element contenteditable and add Material Wave effect
//       element.setAttribute("contenteditable", "true");
//       // element.classList.add("material-wave");

//       // element.addEventListener("click", (event) => {
//       //   const wave = document.createElement("div");
//       //   wave.className = "wave";
//       //   wave.style.left = `${event.clientX - element.offsetLeft}px`;
//       //   wave.style.top = `${event.clientY - element.offsetTop}px`;
//       //   element.appendChild(wave);

//       //   // Remove the wave after animation
//       //   wave.addEventListener("animationend", () => {
//       //     wave.remove();
//       //   });
//       // });

//       // Save changes to LocalStorage on input and blur events
//       element.addEventListener("input", () => {
//         localStorage.setItem(id, element.innerHTML);
//       });

//       element.addEventListener("blur", () => {
//         localStorage.setItem(id, element.innerHTML);
//       });
//     });
//   });
//   });
// // });

// function downloadPDF() {
//   const opt = {
//     // margin:       1,
//     filename: "resume.pdf",
//     image: { type: "jpeg", quality: 1 },
//     html2canvas: { scale: 4, height: 2150 },
//     pagebreak: { after: "#experience-and-tools" },
//     // jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//   };

//   // New Promise-based usage:
//   html2pdf().set(opt).from(document.body).save();
// }

// document
//   .querySelector("#downloadButton")
//   .addEventListener("click", function () {
//     downloadPDF();
//   });


document.addEventListener("DOMContentLoaded", () => {
  const textElements = document.querySelectorAll(
    "h1, h2, h3, h4, h5, h6, p, span, li, a"
  );

  // Initialize elements
  textElements.forEach((element) => {
    if (element.getAttribute("data-id")) {
    const id = element.getAttribute("data-id");
    element.setAttribute("data-id", id);

    // Load saved content from LocalStorage
    const savedContent = localStorage.getItem(id);
    if (savedContent) {
      element.innerHTML = savedContent;
    }

    // Make the element contenteditable
    element.setAttribute("contenteditable", "true");

    // Save changes to LocalStorage on input and blur events
    element.addEventListener("input", () => {
      localStorage.setItem(id, element.innerHTML);
    });

    element.addEventListener("blur", () => {
      localStorage.setItem(id, element.innerHTML);
    });
  };
  });
});
