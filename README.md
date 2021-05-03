# Decentralised Webkiosk (Capstone 2020)

## About
Colleges make use of a centralised webkiosk for hosting of students academic information. This webkiosk, being centralised in nature, makes it prone to several vulnerabilities, namely server failure at times of peak load and various security concerns. The project aims to solve this issue by deploying a decentralised version of webkiosk in order to eliminate the random shut-downs during peak load instances and improve overall reliability of the service

## Hosted at :
[decentralised-webkiosk.on.fleek.co/](decentralised-webkiosk.on.fleek.co/)
Note : the auth will not work as smart contract needs to be hosted locally on Ganache

## Technology Used : 
1. ReactJS (Frontend)
2. Solidity (Smart Contract for Auth)
3. IPFS (Hosting)
4. Firestore (Database)

## Result :

![image](https://user-images.githubusercontent.com/9550542/116877806-0e212300-ac3c-11eb-8211-521fee46b0bf.png)

During the Stress test, the website is put under a gradually increasing user interaction and the load is relieved closer to the very end of the duration, as visible in the graph above. 
The graph portrays the Average Response Time from the website on the left hand side of the y-axis whereas the Current Active Users are shown on the right hand side of y-axis.
This test proves the superiority of IPFS during times of suddenly very high traffic being poured on the server.
Although IPFS’s performance was pretty bad during the start, we were able to prove that with an increase in users, it works really well due to its load balancing abilities.

## Deploying on your local machine : 
1. Clone the repo and run npm install to get the frontend working
2. Setup ganache and truffle to deploy the smart contract on a local ethereum network
3. Connect your metamask broswer extension to the ganache server.
4. That's all folks.
