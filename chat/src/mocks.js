const initialChats = [
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
];

const initialMessages1 = [
  {
    "text": "Я тут кое-что нарисовала! Посмотри как будет время!",
    "time": "10:23",
    "isUser": false,
    "img": "",
    "status": "",
    "new": false
  },
  {
    "text": "Тебе нравится как я нарисовала?",
    "time": "10:23",
    "isUser": false,
    "img": "",
    "status": "",
    "new": false
  },
  {
    "text": "",
    "time": "10:23",
    "isUser": false,
    "img": "../mock_image.jpg",
    "status": "",
    "new": false
  },
  {
    "text": "Горжусь тобой! Ты крутая!",
    "time": "10:23",
    "isUser": true,
    "img": "",
    "status": "read",
    "new": false
  },
  {
    "text": "Джен, ты молодец!",
    "time": "10:23",
    "isUser": true,
    "img": "",
    "status": "read",
    "new": false
  }
];

const initialMessages2 = [
  {
    "text": "Как же меня достала эта работа!",
    "time": "2:45",
    "isUser": true,
    "img": "",
    "status": "read",
    "new": false
  },
  {
    "text": "Привет, ты где?! Тебя начальник обыскался.",
    "time": "8:50",
    "isUser": false,
    "img": "",
    "status": "unread",
    "new": false
  },
  {
    "text": "Ты куда пропал?",
    "time": "15:52",
    "isUser": false,
    "img": "",
    "status": "unread",
    "new": false
  }
];

const initialMessages3 = [
  {
    "text": "Серёг, где моё бабло?!",
    "time": "15:52",
    "isUser": true,
    "img": "",
    "status": "sent",
    "new": false
  }
];

export const loadMockChats = () => {
  let chatNumber = 0;
  initialChats.forEach((currentChat) => {
      ++chatNumber;
      localStorage.setItem(`chat${chatNumber}`, JSON.stringify(currentChat));
  });
};

export const loadMockMessages = () => {
  let messageNumber = 0;
  initialMessages1.forEach((currentMessage) => {
      ++messageNumber;
      localStorage.setItem(`Дженнифер${messageNumber}`, JSON.stringify(currentMessage));
  });
  initialMessages2.forEach((currentMessage) => {
      ++messageNumber;
      localStorage.setItem(`Антон Коллега${messageNumber}`, JSON.stringify(currentMessage));
  });
  initialMessages3.forEach((currentMessage) => {
      ++messageNumber;
      localStorage.setItem(`Серёга (должен 2к)${messageNumber}`, JSON.stringify(currentMessage));
  });
};
