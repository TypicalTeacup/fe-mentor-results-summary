const results = document.querySelector("#results");

const createSummarySection = (sectionObject) => {
    const summarySection = document.createElement("figure");
    summarySection.id = sectionObject.category.toLowerCase();

    const caption = document.createElement("figcaption");
    const icon = document.createElement("img");
    icon.src = sectionObject.icon;
    caption.appendChild(icon);

    caption.appendChild(document.createTextNode(sectionObject.category));
    summarySection.appendChild(caption);

    const rightDiv = document.createElement("div");
    const score = document.createElement("span");
    score.textContent = sectionObject.score;
    rightDiv.appendChild(score);

    rightDiv.appendChild(document.createTextNode(" / 100"));
    summarySection.appendChild(rightDiv);
    
    return summarySection;
};

fetch("./data.json")
    .then((r) => r.json())
    .then((data) => {
        data.forEach((element) => {
            results.appendChild(createSummarySection(element));
        });
    });
