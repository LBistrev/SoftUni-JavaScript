function lockedProfile() {

    // add togle event listener to all profile buttons

    // create Array of all buttons
    const buttons = Array.from(document.querySelectorAll('.profile button'));

    //console.log(buttons)

    // for each button add eventlistener
    for (let button of buttons) {
        button.addEventListener('click', Show);
    }

    // allways receive event
    function Show(ev) {

        // find profile details, go one step above
        const profile = ev.target.parentElement;
        //console.log(profile);

        // for each profile we find button with information unlock
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        
        // if it^s visible -> hide it and display label 'show more'
        if (isActive) {

            // information about div - profile
            const infoDif = profile.querySelector("div")
          //  console.log(infoDif)

            if (ev.target.textContent == "Show more") {
                infoDif.style.display = "block";
                ev.target.textContent = "Hide it";

        // otherwise -> show it and display label 'hide it'
            } else {
                ev.target.textContent = "Show more"
                infoDif.style.display = "";
            }
        }
    }
}
