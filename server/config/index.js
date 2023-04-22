const CLIENT = {
  PROTOCOL: "http",
  HOST: "localhost",
  PORT: 3000,
};

const SERVER = {
  PROTOCOL: "http",
  HOST: "localhost",
  PORT: 5678,
};

const MONGODB = {
  HOST: "localhost",
  PORT: "27017",
  DATABASE: {
    NAME: "aQuiz",
  },
};

const JWT = {
  ACCESS_TOKEN: {
    SECRET: "SOMESecret",
    EXPIRED_IN_DEFAULT: 60 * 60, // 60 minute
    EXPIRED_IN_REMEMBER_ME: 60 * 60 * 24 * 7, // one week
    REFRESHING_PERIOD: 1000 * 60 * 60 * 24 * 7, // one week in milliseconds
  },
  CONFIRM_EMAIL_TOKEN: {
    SECRET: "5",
  },
  RESET_PASSWORD_TOKEN: {
    SECRET: "6",
    EXPIRED_IN: 30 * 60, // 30 minute
  },
};

const PASSWORD = {
  MD5SECRET: "VeryImportantSecret",
};

const MAILER = {
  HOST: "smtp.mail.ru",
  PORT: 465,
  SECURE: true,
  SENDER: {
    EMAIL: "aquiz_mail@mail.ru",
    PASSWORD: "iv1eMmvkrViXCK2bfivd",
  },
};

const GAME = {
  QUESTION_MORE_THEN_TIME: 2,
  POINTS_PER_ANSWER: 100,
};

export { SERVER, CLIENT, MONGODB, JWT, PASSWORD, MAILER, GAME };
