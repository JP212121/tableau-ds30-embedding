// 1. create a variable to store the vizContainer

const vizContainer = document.getElementById("vixContainer");

// 2. create a variable to store the dashboard options

const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

// 3. create a variable to store the url

const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia";

// 4. define function to load the dashboard
function initViz() {
  const viz = new tableau.Viz(vizContainer, url, options);
}

// 5. execute function to actually load the dahboard
document.addEventListener("DOMContentLoaded", initViz);
