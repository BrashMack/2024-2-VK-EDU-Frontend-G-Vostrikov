export function mocksRender(name) {
    let currentMessages = [];
    switch (name) {
        case 'Дженнифер':
            currentMessages = [
                {
                    "text": "Я тут кое-что нарисовала! Посмотри как будет время!",
                    "time": "10:23",
                    "isUser": false,
                    "img": "",
                    "status": ""
                },
                {
                    "text": "Тебе нравится как я нарисовала?",
                    "time": "10:23",
                    "isUser": false,
                    "img": "",
                    "status": ""
                },
                {
                    "text": "",
                    "time": "10:23",
                    "isUser": false,
                    "img": "https://loremflickr.com/320/240/landscape,drawing/all",
                    "status": ""
                },
                {
                    "text": "Горжусь тобой! Ты крутая!",
                    "time": "10:23",
                    "isUser": true,
                    "img": "",
                    "status": "read"
                },
                {
                    "text": "Джен, ты молодец!",
                    "time": "10:23",
                    "isUser": true,
                    "img": "",
                    "status": "read"
                }
            ]
            break;
        case 'Антон Коллега':
            currentMessages = [
                {
                    "text": "Как же меня достала эта работа!",
                    "time": "2:45",
                    "isUser": true,
                    "img": "",
                    "status": "read"
                },
                {
                    "text": "Привет, ты где?! Тебя начальник обыскался.",
                    "time": "8:50",
                    "isUser": false,
                    "img": "",
                    "status": "unread"
                },
                {
                    "text": "Ты куда пропал?",
                    "time": "15:52",
                    "isUser": false,
                    "img": "",
                    "status": "unread"
                }
            ]
            break;
        case 'Серёга (должен 2к)':
            currentMessages = [
                {
                    "text": "Серёг, где моё бабло?!",
                    "time": "15:52",
                    "isUser": true,
                    "img": "",
                    "status": "sent"
                }
            ]
            break;
    }
    if (!localStorage.getItem(`${name}1`)) {
        let messageNumber = 0;
        currentMessages.forEach((currentMessage) => {
            ++messageNumber;
            localStorage.setItem(`${name}${messageNumber}`, JSON.stringify(currentMessage));
        });
    }
    return;
}
