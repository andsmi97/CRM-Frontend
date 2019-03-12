import {
  CHANGE_ORDER,
  CHANGE_COLUMNS,
  ADD_DEAL,
  DEAL_STATUS_CLOSE,
  DEAL_STATUS_OPEN,
  DEAL_STATUS_ACCEPT,
  CHANGE_DEAL_FIELD
} from "./constants.js";
const initialStateBoard = {
  columns: {
    "Первый контакт": [
      {
        id: "507f1f77bcf86cd799439012",
        company: "Ridge Cloud",
        price: "1000",
        contact: "Королёв Гаянэ Дамирович",
        phone: "8(800)246-22-50",
        name: "Создание сайта",
        email: "MarkSLucas@teleworm.us",
        manager: {
          name: "Василий",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
        }
      },
      {
        id: "507f1f77bcf86cd799439013",
        company: "Rank Cloud",
        price: "1000",
        contact: "Авдеев Тимур Львович",
        phone: "8(800)178-15-20",
        name: "Создание Дизайна",
        email: "BrandiJMusselman@armyspy.com",
        manager: {
          name: "Василий",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
        }
      },
      {
        id: "507f1f77bcf86cd799439014",
        company: "Cloud Ex",
        price: "2000",
        contact: "Горбунов Федор Филатович",
        phone: "8(800)313-37-72",
        name: "Создание сайта",
        email: "MicahEMurray@dayrep.com",
        manager: {
          name: "Василий",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
        }
      },
      {
        id: "507f1f77bcf86cd799439015",
        company: "Cloud Rhino",
        price: "1400",
        contact: "Шубин Харитон Проклович",
        phone: "8(800)255-53-47",
        manager: {
          name: "Василий",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
        }
      },
      {
        id: "507f1f77bcf86cd799439016",
        company: "Cloud Able",
        price: "1200",
        contact: "Зуева Санда Михайловна",
        phone: "8(800)848-00-91",
        manager: {
          name: "Василий",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
        }
      },
      {
        id: "507f1f77bcf86cd799439017",
        company: "Dev Cloud",
        price: "300",
        contact: "Сорокина Аделия Арсеньевна",
        phone: "8(800)693-11-48",
        manager: {
          name: "Василий",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
        }
      },

      {
        id: "507f1f77bcf86cd799439018",
        company: "Cloud Vine",
        price: "800",
        contact: "Исаев Любомир Мэлорович",
        phone: "8(800)957-94-81",
        manager: {
          name: "Василий",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
        }
      },
      {
        id: "507f1f77bcf86cd799439019",
        company: "Data Cloud",
        price: "1800",
        contact: "Фролов Нелли Матвеевич",
        phone: "8(800)852-99-04",
        manager: {
          name: "Василий",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
        }
      }
    ],
    "Назначена встреча": [
      {
        id: "507f1f77bcf86cd79943901a",
        company: "Zap Cloud",
        price: "1200",
        contact: "Селиверстов Устин Андреевич",
        phone: "8(800)281-18-67",
        manager: {
          name: "Василий",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
        }
      },
      {
        id: "507f1f77bcf86cd79943901b",
        company: "Cloud Surge",
        price: "1500",
        contact: "Федотов Май Вениаминович",
        phone: "8(800)431-55-60",
        manager: {
          name: "Василий",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
        }
      }
    ],
    "Отправлено КП": [
      {
        id: "507f1f77bcf86cd79943901c",
        company: "Cloud Vine",
        price: "500",
        contact: "Турова Эвелина Мэлоровна",
        phone: "8(800)528-29-19",
        manager: {
          name: "Василий",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
        }
      },
      {
        id: "507f1f77bcf86cd79943901d",
        company: "Inc Cloud",
        price: "600",
        contact: "Егорова Эшли Андреевна",
        phone: "8(800)747-08-46",
        manager: {
          name: "Василий",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
        }
      }
    ],
    "Выслан договор": [],
    "Исполнение обязанностей": [],
    "Успех": [],
    "Неудача": [],
  },
  ordered: Object.keys({
    "Первый контакт": [],
    "Назначена встреча": [],
    "Отправлено КП": [],
    "Выслан договор": [],
    "Исполнение обязанностей": [],
    "Успех": [],
    "Неудача": [],
  }),
  name: "",
  contact: "",
  email: "",
  phone: "",
  price: "",
  company: "",
  newTask: "",
  dealModalStatus: false,
  dealModalType: "",
  dealModalFunction: () => {}
};

export const boardReducer = (state = initialStateBoard, action = {}) => {
  switch (action.type) {
    case CHANGE_ORDER:
      return { ...state, ordered: action.payload };
    case CHANGE_COLUMNS:
      return { ...state, columns: action.payload };
    case CHANGE_DEAL_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.text
      };
    case ADD_DEAL:
      return {
        ...state,
        columns: {
          ...state.columns,
          "Первый контакт": [
            {
              id: "507f1f77bcf86cd799439011",
              company: "TESTING",
              price: "10000",
              contact: "Егорова Эшли Андреевна",
              phone: "8(800)747-08-46",
              manager: {
                name: "Василий",
                avatarUrl:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
              }
            },
            ...state.columns["Первый контакт"]
          ]
        }
      };
    case DEAL_STATUS_CLOSE:
      return { ...state, dealModalStatus: action.payload };
    case DEAL_STATUS_OPEN: {
      const {
        company,
        name,
        contact,
        price,
        phone,
        email
      } = action.payload.deal;
      return {
        ...state,
        dealModalStatus: action.payload.status,
        //so we can use modal for editing and for inserting
        name: name ? name : "",
        company: company ? company : "",
        contact: contact ? contact : "",
        price: price ? price : "",
        phone: phone ? phone : "",
        email: email ? email : "",
        dealModalFunction: action.payload.dealModalFunction,
        dealModalType: action.payload.type
      };
    }
    case DEAL_STATUS_ACCEPT:
      return {
        ...state,
        dealModalStatus: action.payload.status,
        dealModalFunction: action.payload.dealModalFunction
      };

    default:
      return state;
  }
};

const initialStateDeals = {};

export const dealsReducer = (state = initialStateDeals, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
