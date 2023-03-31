const store = {
  profile: {
    username: "",
  },
  contacts: [
    {
      id: 1,
      username: "User 1",
    },
    {
      id: 2,
      username: "User 2",
    },
    {
      id: 3,
      username: "User 3",
    },
    {
      id: 4,
      username: "User 4",
    },
  ],
  messages: [
    {
      id: 1,
      msg: "Hola tú",
      author: 1,
    },
    {
      id: 2,
      msg: "Hola tambien",
      author: 2,
    },
    {
      id: 3,
      msg: "Hola todos",
      author: 3,
    },
    {
      id: 4,
      msg: "Hola tú",
      author: 1,
    },
    {
      id: 5,
      msg: "Hola tambien",
      author: 2,
    },
    {
      id: 6,
      msg: "Hola todos",
      author: 4,
    },
  ],
  channels: [
    {
      id: 1,
      name: "Canal 1",
      messages: [1, 2, 3],
    },

    {
      id: 2,
      name: "Canal 2",
      messages: [4, 5, 6],
    },
  ],
};