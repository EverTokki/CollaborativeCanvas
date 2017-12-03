# CollaborativeCanvas

![Collaborative Canvas](https://i.imgur.com/q5MX8yy.png)

A shared canvas that can be accessed concurrently by numerous contributors.

MLH Local Hack Day 

UBCHACKS 2017 Workshop by Matthew Siu

- Node.js

- express

- socket.io

- Use ngrok to run service temporalily on the web.

# Setup environment
- install Node.js

`npm init`

`npm install express --save`

`npm install socket.io --save`

- optional: install ngrog

# Run the code
`cd <file directory>`

`npm run start`

# Run the code on a temporary domain
`cd <file directory with extracted ngrok>`

`./ngrok http 3000`

- copy URL under "Forwarding"

- paste URL onto sketch.js `socket = io.connect('<URL>');`

`cd <file directory>`

`npm run start`

- connect to previously given URL
