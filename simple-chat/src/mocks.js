const currentMessages = [
    {
        "text": "Я тут кое-что нарисовала! Посмотри как будет время!",
        "time": "10:23",
        "isUser": false,
        "img": ""
    },
    {
        "text": "Тебе нравится как я нарисовала?",
        "time": "10:23",
        "isUser": false,
        "img": ""
    },
    {
        "text": "",
        "time": "10:23",
        "isUser": false,
        "img": "https://loremflickr.com/320/240/landscape,drawing/all"
    },
    {
        "text": "Горжусь тобой! Ты крутая!",
        "time": "10:23",
        "isUser": true,
        "img": ""
    },
    {
        "text": "Джен, ты молодец!",
        "time": "10:23",
        "isUser": true,
        "img": ""
    }
]
if (!localStorage.getItem('message1')) {
    let messageNumber = 0;
    currentMessages.forEach((currentMessage) => {
        ++messageNumber;
        localStorage.setItem(`message${messageNumber}`, JSON.stringify(currentMessage));
    });
}
