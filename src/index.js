const styles = `
  body {
    font-family: 'Roboto', sans-serif;
  }
  
  #pitlor-dev-electionPage {
  
  }
  
  .result {
  
  }
`;
const pageTemplate = `
<head>
  <title>Summit County Election Results</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <style>${styles}</style>
</head>
<body>
  <div id="pitlor-dev-electionPage">
    hey there!
  </div>
</body>
`;
const resultTemplate = `
  <div class="result">
  
  </div>
`;
const resultsDomain = "https://www.summitcountyboe.gov/ElectionResults";

function parseResults(html) {}

function updatePage(results) {}

function init() {
  if (!window.location.href.startsWith(resultsDomain)) {
    alert("This bookmarklet only works with Summit County election results!");
    return false;
  }

  const alreadyRan = document.querySelector("#pitlor-dev-electionPage");
  if (alreadyRan) {
    return false;
  }

  const root = document.querySelector("html");
  const html = root.outerHTML;
  root.innerHTML = pageTemplate;

  const results = parseResults(html);
  updatePage(results);
  return true;
}

async function refresh() {
  const result = await fetch(window.location.href);
  const html = await result.text();
  const results = parseResults(html);
  updatePage(results);
}

if (init()) {
  setInterval(refresh, 10 * 1000);
}
