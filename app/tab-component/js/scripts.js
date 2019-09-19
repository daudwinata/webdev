const tabbedWrapper = document.querySelector(".tabbed-wrapper");
const tabComponent = tabbedWrapper.querySelectorAll(".tab");
const tabbedContent = tabbedWrapper.querySelectorAll(".tab-content");

for (let i = 0; i < tabComponent.length; i++) {
  const tabLoops = tabComponent[i];

  tabLoops.addEventListener("click", function () {
    const link = tabLoops.children[0];
    const href = link.getAttribute('href');
    const tabContent = tabbedWrapper.querySelector(href);

    //tabComponent.forEach(elem => elem.classList.remove('is-selected'));
    for (let j = 0; j < tabComponent.length; j++) {
      const tabLoops2 = tabComponent[j];
      tabLoops2.classList.remove('is-selected');
    }

    //tabbedContent.forEach(elem => elem.classList.remove('is-selected'));
    for (let r = 0; r < tabbedContent.length; r++) {
      const tabLoops3 = tabbedContent[r];
      tabLoops3.classList.remove('is-selected');
    }

    tabLoops.classList.add('is-selected');
    tabContent.classList.add('is-selected');
  })
}



/* const component = document.querySelector('.tabbed-component')
const tabs = Array.from(component.querySelectorAll('.tab'))
const contents = Array.from(component.querySelectorAll('.tab-content'))

tabs.forEach(tab => {
  tab.addEventListener('click', _ => {
    const link = tab.children[0]
    const href = link.getAttribute('href')
    const tabContent = component.querySelector(href)

    // Hiding previous tab and tab content
    tabs.forEach(elem => elem.classList.remove('is-selected'))
    contents.forEach(elem => elem.classList.remove('is-selected'))

    // Showing the selected tab and tab content
    tab.classList.add('is-selected')
    tabContent.classList.add('is-selected')
  })
}) */










/* const clickTabbed = document.querySelector(".tabbed-list");
const clickTabbedChild = clickTabbed.querySelectorAll("li");

//const clickFirstChild = clickTabbedChild[0];

for (let i = 0; i < clickTabbedChild.length; i++) {
  const tabbedLoops = clickTabbedChild[i];
  const tabbedContent = document.querySelector(".tabbed-content");

  tabbedLoops.addEventListener("click", function () {
    //console.log("yes");
    if (tabbedContent.classList.contains("tabbed-open")) {
      tabbedContent.classList.remove("tabbed-open");
    } else {
      tabbedContent.classList.add("tabbed-open");
    }
  })
} */