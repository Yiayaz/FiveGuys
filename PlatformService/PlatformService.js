const express = require('express');
const child_process = require('child_process');

const app = express();
const mainPort = 3000;

const services = [
    { endpoint: '/StreamingMediaService', filename: './StreamingMediaService/StreamingMediaService.js', port: 3004 },
    { endpoint: '/FinancialService', filename: './FinancialService/FinancialService.js', port: 3002 },
    { endpoint: '/AdminAccountService', filename: './AdminAccountService/AdminAccountService.js', port: 3001 },
    { endpoint: '/SubscriptionService', filename: './SubscriptionService/SubscriptionService.js', port: 3005 },
    { endpoint: '/IngestionService', filename: './IngestionService/IngestionService.js', port: 3012 },
    { endpoint: '/LoadBalancer', filename: './LoadBalancer/LoadBalancer.js', port: 3013 },
    { endpoint: '/UsersideManagerService', filename: './UsersideManagerService/UsersideManagerService.js', port: 3014 },
    { endpoint: '/UsersideService', filename: './UsersideService/UsersideService.js', port: 3015 },
    { endpoint: '/CreatorAccount', filename: './Creator_Account/CreatorAccount.js', port: 3006 },
    { endpoint: '/CreatorsideHistory', filename: './Creatorside_History/CreatorsideHistory.js', port: 3007 },
    { endpoint: '/ServersideHistory', filename: './Serverside_History/ServersideHistory.js', port: 3008 },
    { endpoint: '/UserAccount', filename: './User_Account/UserAccount.js', port: 3009 },
    { endpoint: '/UsersideHistory', filename: './Userside_History/UsersideHistory.js', port: 3010 },
    { endpoint: '/CircuitBre', filename: './CircuitBre/CircuitBre.js', port: 3016 },
    { endpoint: '/Creatorside', filename: './Creatorside/Creatorside.js', port: 3017 },
    { endpoint: '/CreatorsideMan', filename: './CreatorsideMan/CreatorsideMan.js', port: 3018 },
    { endpoint: '/Serverside', filename: './Serverside/Serverside.js', port: 3019 },
    { endpoint: '/ServersideManagerService', filename: './ServersideManagerService/ServersideManagerService.js', port: 3020 },
    { endpoint: '/ApiGateways', filename: './ApiGateways/ApiGateways.js', port: 3011 }
];

// const services = [
//     { endpoint: '/StreamingMediaService', filename: './StreamingMediaService/StreamingMediaService.js', port: 3004 },
//     { endpoint: '/FinancialService', filename: './FinancialService/FinancialService.js', port: 3002 },
//     { endpoint: '/AdminAccountService', filename: './AdminAccountService/AdminAccountService.js', port: 3001 },
//     { endpoint: '/SubscriptionService', filename: './SubscriptionService/SubscriptionService.js', port: 3005 },
//     { endpoint: '/IngestionService', filename: './IngestionService/IngestionService.js', port: 3012 },
//     { endpoint: '/LoadBalancer', filename: './LoadBalancer/LoadBalancer.js', port: 3013 },
//     { endpoint: '/UsersideManagerService', filename: './UsersideManagerService/UsersideManagerService.js', port: 3014 },
//     { endpoint: '/UsersideService', filename: './UsersideService/UsersideService.js', port: 3015 },
//     { endpoint: '/CreatorAccount', filename: './Creator_Account/CreatorAccount.js', port: 3006 },
//     { endpoint: '/CreatorsideHistory', filename: './Creatorside_History/CreatorsideHistory.js', port: 3007 },
//     { endpoint: '/ServersideHistory', filename: './Serverside_History/ServersideHistory.js', port: 3008 },
//     { endpoint: '/UserAccount', filename: './User_Account/UserAccount.js', port: 3009 },
//     { endpoint: '/UsersideHistory', filename: './Userside_History/UsersideHistory.js', port: 3010 },
//     { endpoint: '/CircuitBre', filename: './CircuitBre/CircuitBre.js', port: 3016 },
//     { endpoint: '/Creatorside', filename: './Creatorside/Creatorside.js', port: 3017 },
//     { endpoint: '/CreatorsideMan', filename: './CreatorsideMan/CreatorsideMan.js', port: 3018 },
//     { endpoint: '/Serverside', filename: './Serverside/Serverside.js', port: 3019 },
//     { endpoint: '/ServersideManagerService', filename: './ServersideManagerService/ServersideManagerService.js', port: 3020 },
//     { endpoint: '/ApiGateways', filename: './ApiGateways/ApiGateways.js', port: 3011 }
// ];

// Start all services as child processes
services.forEach(service => {
    child_process.fork(service.filename, [service.port]);
    console.log(`Started service from ${service.filename} on port ${service.port}`);
});

// Main Interface Routes
app.get('/', (req, res) => {
    let buttonsHtml = services.map(service => {
        return `<button><a href="${service.endpoint}">${service.endpoint.substr(1)}</a></button>`;
    }).join('<br>');

    res.send(`
    <html>
    <body>
        ${buttonsHtml}
    </body>
    </html>
    `);
});

services.forEach(service => {
    app.get(service.endpoint, (req, res) => {
        res.redirect(`http://localhost:${service.port}${service.endpoint}`);
    });
});

app.listen(mainPort, () => {
    console.log(`Main Interface running at http://localhost:${mainPort}/`);
});
