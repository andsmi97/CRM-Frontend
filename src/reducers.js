import {
  AUTH_PENDING,
  AUTH_SUCCESS,
  AUTH_FAILED,
  SNACK_STATUS_CLOSE,
  SNACK_STATUS_OPEN,
  ALERT_STATUS_CLOSE,
  ALERT_STATUS_OPEN,
  ALERT_STATUS_ACCEPT
} from "./constants.js";
const initialStateApp = {
  snackType: "success",
  snackMessage: "",
  snackStatus: false,
  authPending: false,
  isResponseCorrect: false,
  alertMessage: "",
  alertStatus: false,
  alertFunction: () => {}
};

export const appReducer = (state = initialStateApp, action = {}) => {
  switch (action.type) {
    case AUTH_PENDING:
      return { ...state, authPending: action.payload };
    case AUTH_SUCCESS:
      return {
        ...state,
        isResponseCorrect: true,
        authPending: false
      };
    case AUTH_FAILED:
      return {
        ...state,
        error: action.payload,
        authPending: false
      };
    case SNACK_STATUS_CLOSE:
      return { ...state, snackStatus: action.payload };
    case SNACK_STATUS_OPEN:
      return {
        ...state,
        snackStatus: action.payload.status,
        snackType: action.payload.type,
        snackMessage: action.payload.message
      };
    case ALERT_STATUS_CLOSE:
      return { ...state, alertStatus: action.payload };
    case ALERT_STATUS_OPEN:
      return {
        ...state,
        alertStatus: action.payload.status,
        alertFunction: action.payload.alertFunction,
        alertMessage: action.payload.message
      };
    case ALERT_STATUS_ACCEPT:
      return {
        ...state,
        alertStatus: action.payload.status,
        alertFunction: action.payload.alertFunction
      };
    default:
      return state;
  }
};


const initialStateDeals = {
    "Первый контакт": [
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
      }
    ],
    "Назначена встреча": [
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
        }
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
        }
      }
    ],
    "Отправлено КП": [
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
        }
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
        }
      }
    ],
    "Выслан договор": [],
    "Исполнение обязанностей": []
  };
  
  export const dealsReducer = (state = initialStateDeals, action = {}) => {
      switch (action.type) {
        
        default:
          return state;
      }
    };
    