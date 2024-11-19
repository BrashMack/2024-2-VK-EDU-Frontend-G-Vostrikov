const currentChats = [
    {
        "user": "Дженнифер",
        "avatar": "https://avatar.iran.liara.run/public/98",
        "message": "Джен, ты молодец!",
        "time": "10:23",
        "status": "read",
        "online": "в сети"
    },
    {
        "user": "Антон Коллега",
        "avatar": "https://avatar.iran.liara.run/public/17",
        "message": "Ты куда пропал?",
        "time": "15:52",
        "status": "unread 2",
        "online": "был 10 мин назад"
    },
    {
        "user": "Серёга (должен 2к)",
        "avatar": "https://avatar.iran.liara.run/public/42",
        "message": "Серёг, где моё бабло?!",
        "time": "15:52",
        "status": "sent",
        "online": "был недавно"
    }
]
if (!localStorage.getItem('chat1')) {
    let chatNumber = 0;
    currentChats.forEach((currentChat) => {
        ++chatNumber;
        localStorage.setItem(`chat${chatNumber}`, JSON.stringify(currentChat));
    });
}
