
function solve() {
    const firstInput = document.getElementById("task");
    const secondInput = document.getElementById("description");
    const thirdInput = document.getElementById("date")

    const allSections = Array.from(document.getElementsByTagName("section"));
    const openSection = allSections[1]
    const inProgressSection = allSections[2]
    const completeSection = allSections[3]

    const addBtn = document.getElementById("add");
    addBtn.addEventListener("click", moveToOpenSection);

    function moveToOpenSection(e) {
        e.preventDefault();

        if (firstInput.value !== "" && secondInput.value !== "" && thirdInput.value !== "") {
            const newArticle = document.createElement("article");
            newArticle.innerHTML = `<h3>${firstInput.value}</h3>
                                    <p>Description: ${secondInput.value}</p>
                                    <p>Due Date: ${thirdInput.value}</p>
                                    <div class="flex">
                                        <button class="green">Start</button>
                                        <button class="red">Delete</button>
                                    </div>`

            
            openSection.lastElementChild.appendChild(newArticle);
            firstInput.value = "";
            secondInput.value = "";
            thirdInput.value = "";

            const buttons = Array.from(openSection.querySelectorAll("div button"));
            const startBtn = buttons[0];
            const deleteBtn = buttons[1]

            startBtn.addEventListener("click", moveToProgress);

        }
    }

    function moveToProgress(e) {
        const newArticle = document.createElement("article");
            newArticle.innerHTML = `<h3>${firstInput.value}</h3>
                                    <p>Description: ${secondInput.value}</p>
                                    <p>Due Date: ${thirdInput.value}</p>
                                    <div class="flex">
                                        <button class="red">Delete</button>
                                        <button class="orange">Finish</button>
                                    </div>`

            inProgressSection.lastElementChild.appendChild(newArticle);
            firstInput.value = "";
            secondInput.value = "";
            thirdInput.value = ""
    }

}

/*
function solve() {
    const [_, sectionOpen, sectionInProgress, sectionComplete] = document.getElementsByTagName('section');
    document.getElementsByClassName('wrapper')[0].addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName == 'BUTTON' && e.target.id == 'add') {
            const task = document.getElementById('task');
            const description = document.getElementById('description');
            const date = document.getElementById('date');
            if (task.value && description.value && date.value) {
                const article = elem('article', {},
                    elem('h3', {}, task.value),
                    elem('p', {}, `Description: ${description.value}`),
                    elem('p', {}, `Due Date: ${date.value}`),
                    elem('div', { className: 'flex' },
                        elem('button', { className: 'green' }, 'Start'),
                        elem('button', { className: 'red' }, 'Delete')
                    )
                );
                sectionOpen.lastElementChild.appendChild(article);
                task.value = '';
                description.value = '';
                date.value = '';
            }
        } else if (e.target.tagName == 'BUTTON' && e.target.className == 'green') {
            const clickedArticle = sectionOpen.lastElementChild.lastElementChild;
            const [leftButton, rightButton] = Array.from(clickedArticle.lastElementChild.children);
            leftButton.setAttribute('class', 'red');
            leftButton.textContent = 'Delete';
            rightButton.setAttribute('class', 'orange');
            rightButton.textContent = 'Finish';
            sectionInProgress.lastElementChild.appendChild(clickedArticle);
        } else if (e.target.tagName == 'BUTTON' && e.target.className == 'orange') {
            const clickedArticle = sectionInProgress.lastElementChild.lastElementChild;
            clickedArticle.lastElementChild.remove();
            sectionComplete.lastElementChild.appendChild(clickedArticle);
        } else if (e.target.tagName == 'BUTTON' && e.target.className == 'red') {
            e.target.parentElement.parentElement.remove();
        }
    });
    function elem(type, props, ...content) {
        const element = document.createElement(type);
        for (const prop in props) {
            element[prop] = props[prop];
        }
        for (let entry of content) {
            if (typeof entry == 'string' || typeof entry == 'number') {
                entry = document.createTextNode(entry);
            }
            element.appendChild(entry);
        }
        return element;
    }
}
*/