const firstContact = {
  id: "1",
  name: "Первый контакт"
};

const meetingArranged = {
  id: "2",
  name: "Назначена встреча"
};

const offerSent = {
  id: "3",
  name: "Отправлено КП"
};

const contractSent = {
  id: "4",
  name: "Выслан договор"
};

const inDevelopment = {
  id: "5",
  name: "Исполнение обязанностей"
};

export const stages = [
  firstContact,
  meetingArranged,
  offerSent,
  contractSent,
  inDevelopment
];

export const deals = [
  {
    id: "1",
    content: "Ridge Cloud",
    price: "1000",
    contact: "Королёв Гаянэ Дамирович",
    phone: "8(800)246-22-50",
    manager: {
      name: "Василий",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
    },
    stage: firstContact
  },
  {
    id: "2",
    content: "Rank Cloud",
    price: "1000",
    contact: "Авдеев Тимур Львович",
    phone: "8(800)178-15-20",
    manager: {
      name: "Василий",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
    },
    stage: firstContact
  },
  {
    id: "3",
    content: "Cloud Ex",
    price: "2000",
    contact: "Горбунов Федор Филатович",
    phone: "8(800)313-37-72",
    manager: {
      name: "Василий",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
    },
    stage: firstContact
  },
  {
    id: "4",
    content: "Cloud Rhino",
    price: "1400",
    contact: "Шубин Харитон Проклович",
    phone: "8(800)255-53-47",
    manager: {
      name: "Василий",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
    },
    stage: firstContact
  },
  {
    id: "5",
    content: "Cloud Able",
    price: "1200",
    contact: "Зуева Санда Михайловна",
    phone: "8(800)848-00-91",
    manager: {
      name: "Василий",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
    },
    stage: firstContact
  },
  {
    id: "6",
    content: "Dev Cloud",
    price: "300",
    contact: "Сорокина Аделия Арсеньевна",
    phone: "8(800)693-11-48",
    manager: {
      name: "Василий",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
    },
    stage: firstContact
  },
  {
    id: "7",
    content: "Cloud Vine",
    price: "500",
    contact: "Турова Эвелина Мэлоровна",
    phone: "8(800)528-29-19",
    manager: {
      name: "Василий",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
    },
    stage: firstContact
  },
  {
    id: "8",
    content: "Inc Cloud",
    price: "600",
    contact: "Егорова Эшли Андреевна",
    phone: "8(800)747-08-46",
    manager: {
      name: "Василий",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
    },
    stage: firstContact
  },
  {
    id: "9",
    content: "Cloud Vine",
    price: "800",
    contact: "Исаев Любомир Мэлорович",
    phone: "8(800)957-94-81",
    manager: {
      name: "Василий",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
    },
    stage: firstContact
  },
  {
    id: "10",
    content: "Data Cloud",
    price: "1800",
    contact: "Фролов Нелли Матвеевич",
    phone: "8(800)852-99-04",
    manager: {
      name: "Василий",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
    },
    stage: firstContact
  },
  {
    id: "11",
    content: "Zap Cloud",
    price: "1200",
    contact: "Селиверстов Устин Андреевич",
    phone: "8(800)281-18-67",
    manager: {
      name: "Василий",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
    },
    stage: firstContact
  },
  {
    id: "12",
    content: "Cloud Surge",
    price: "1500",
    contact: "Федотов Май Вениаминович",
    phone: "8(800)431-55-60",
    manager: {
      name: "Василий",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
    },
    stage: firstContact
  }
];

const getByStage = (stage, items) => items.filter(deal => deal.stage === stage);

export const stageDealMap = stages.reduce(
  (previous, stage) => ({
    ...previous,
    [stage.name]: getByStage(stage, deals)
  }),
  {}
);
