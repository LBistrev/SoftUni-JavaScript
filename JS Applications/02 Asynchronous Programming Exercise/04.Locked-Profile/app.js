function lockedProfile() {
    
    
}

async function findProfile() {

    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
    const response = await fetch(url);
    const data = response.json();

    console.log(data);
}

