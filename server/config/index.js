const APP = {
    HOST: 'localhost',
    PORT: 5678,
}

const MONGODB = {
    HOST: 'localhost',
    PORT: '27017',
    DATABASE: {
        NAME: 'aQuiz',
    },
}

const JWT = {
    SECRET: 'SOMESecret',
    EXPIRED_IN_DEFAULT: 60 * 60, // 3600 second === 1 hour
    EXPIRED_IN_REMEMBER_ME: 60 * 60 * 24 * 7, // one week
}

export {
    APP,
    MONGODB,
    JWT,
}
