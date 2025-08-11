const readline = require('node:readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question('Enter GitHub Username:', (username) => {
    fetchData(username)
    .then(message => {
        if(message){
            console.log(message);
        }
        r1.close();
    });
});

async function fetchData(username){
    try{
        let message = '';
        const response = await fetch(`https://api.github.com/users/${username}/events`);

        if(!response.ok){
            if(response.status === 404){
                throw new Error("User not found!");
            }else{
                throw new Error(`Error has occurred: ${response.statusText}`);
            }
        }

        const data = await response.json();
        
        for(let i = 0; i < data.length; i++) {
            let obj = data[i];

            switch (obj.type) {
                case 'PushEvent':
                    message += `Pushed ${obj.payload.size} commits to ${obj.repo.name}\n`;
                    break;
                case 'WatchEvent':
                    message += `Starred ${obj.repo.name}\n`;
                    break;
                case 'CreateEvent':
                    message += `Created a repository named ${obj.repo.name}\n`;
                    break;
                case 'ForkEvent':
                    message += `Forked ${obj.repo.name} to ${obj.payload.forkee.full_name}\n`;
                    break;
                default:
                    message += `Performed a ${obj.type} in ${obj.repo.name}\n`;
                    break;
            }
        }

        return message;

    }catch(error){
        console.log(error);
    }
}