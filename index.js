const request = require('request');

module.exports = (req, res) => {
    const event = req.body.event;
    console.log('event received', event);

    request.post({
        url: 'https://slack.com/api/chat.postMessage',
        headers: {
            Authorization: 'Bearer xoxb-12920495843-593048888577-621uAxfNVGQkILUBEJEI2yL0',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        json: {
            "text": "Hello <@UA8RXUPSP>! Knock, knock.",
            "channel": "CHPPEQ5E0"
        }
    }, (error, response, responseBody) => {
        console.log('message posted', error, response, responseBody);
        res.end('Ok');
    });
};
