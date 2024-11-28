const initialChats = [
  {
    user: "Дженнифер",
    avatar: "https://avatar.iran.liara.run/public/98",
    online: "в сети",
    messages: [
      {
        text: "Я тут кое-что нарисовала! Посмотри как будет время!",
        time: "10:23",
        isUser: false,
        img: null,
        status: ""
      },
      {
        text: "Тебе нравится как я нарисовала?",
        time: "10:23",
        isUser: false,
        img: null,
        status: ""
      },
      {
        text: null,
        time: "10:23",
        isUser: false,
        img: "https://loremflickr.com/320/240/landscape,drawing/all",
        status: ""
      },
      {
        text: "Горжусь тобой! Ты крутая!",
        time: "10:23",
        isUser: true,
        img: null,
        status: "read"
      },
      {
        text: "Джен, ты молодец!",
        time: "10:23",
        isUser: true,
        img: null,
        status: "read"
      }
    ]
  },
  {
    user: "Антон Коллега",
    avatar: "https://avatar.iran.liara.run/public/17",
    online: "был 10 мин назад",
    messages: [
      {
        text: "Как же меня достала эта работа!",
        time: "2:45",
        isUser: true,
        img: null,
        status: "read"
      },
      {
        text: "Привет, ты где?! Тебя начальник обыскался.",
        time: "8:50",
        isUser: false,
        img: null,
        status: "unread"
      },
      {
        text: "Ты куда пропал?",
        time: "15:52",
        isUser: false,
        img: null,
        status: "unread"
      }
    ]
  },
  {
    user: "Серёга (должен 2к)",
    avatar: "https://avatar.iran.liara.run/public/42",
    online: "был недавно",
    messages: [
      {
        text: "Серёг, где моё бабло?!",
        time: "15:52",
        isUser: true,
        img: null,
        status: "sent"
      }
    ]
  }
];


export const getMockChats = () => initialChats;

export const getMockMessages = (userName) => {
    const chat = initialChats.find(chat => chat.user === userName);
    return chat ? chat.messages : [];
};
