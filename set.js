const fs = require('fs-extra');
const path = require("path");

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61Vy46jRhT9l9raGvMyYEstBfOyjZ9t46adzqJsClw2FLgowHRkKYvsovzBjKKsZ9s/kfmLbPMVEXZ3ppXHpCMFJLhUle495957Lt8CkuAMOagC3W9BSnEBGapNVqUIdEEvDwJEQRP4kEHQBZrhtFYHLmfJMPdg68hjZWYvVXO8vZ0nWdTrFbqnWOp4y4U34NwEab6J8PYLDtV1a4p3R3avRsu0oRt0PdxWtmHxU7RYLCbpYSyt5FMoeZZ7A861R4gpJqGZ7lCMKIwcVM0gpm+DL8+mx01mZOtV2VDtyUyabUbWOCXLrTFXV6PY5Yu5HvpuKLpvg38ftRTfSyZsQp3hOrp7dKzdjO1mXqDYmJ2K3fJYurd4mdvzK/wMhwT5Ax8Rhln15rzf9zXZHqj95RxaIazuYg63knA/2jjbXrm85/IOF8bt/aFzeGPec3w6xshbCsH4WLZ7MXS4mJYRh9wxicWDmDhm5dDTzDlwr4HP6EuvHP5L3rNZzzEsSjb2ZKQc4MY7dPbIGxu5NQrcjtJJ3V3DmK68OS+9Df7eDm7NRxqIsZeXmzD0xbG4V3MuuW9kBmsVfb3Xl5e+WQjZZ/iQ5fRLKNfWoJ+uB5ArwxUnGqwsyDYSFndqcBz5j4XIFYZVnuTVwl05rZ2xWZuKxqp7bSrNJoPUv5uwQX+RNxLbc0VqwOg46Pi4vLkwOqBq4IMuf24CikKcMQoZTshlTWkC6BcLtKWIXbILPNdKF6tRJsxXG016dCvGbNoOsBMERAjUY7+vnNpSy5Y47gY0QUqTLcoy5PdxxhJajVGWwRBloPv1pVA1Z4rihKEh9kEXdCRFElRRUXjhq+xduYMsg2n6jiAGmiCgSTxGoMtojprgcl5v80qbVxVNMg1F5RVJkwVdNzTJ1EVV7Eg1wfgac4ljlDEYpzWvttxRuI7AnZv/CwxJlyzBsFTTkM2O0THauqwKGs93VNGU2+q/wVDP3zQBQSd2beI69SLfBAGmGXNJnkYJ9F86/GUTbrdJTtiiIlu9NhAF3VfLiDFMwqwmlhNItztcIL3mAboBjDL0R7URRf4Ll+cJpid+3YQza8Xdj4QFqLHXjv6cmq7I/TU7BNaHwS9Pv3388MvTA/n16fsH8un9A/nt44cHcl15/0Dq+9N31/evTz++GN+/GD/Xjx8eyKefQBNEl8iCxCuiJEiq2BY7Kl9HrzfOf5CuMfqIQRxldWsM40W1HhvmkLTaY9e2tUGo6aEGPifpRXnX1j7GO65/1w9yXHpmLN/JAqIUyo1TR3OUan0wXDhdwmTAxebN3zipEUZYTG91bd+QZa+aGi1k4LK3vaOYRHkwyPxSHc0Nltvr+G4YlokvVfH0ZLYOVdsmhG8ks36sN9JhQG41ban2H91g0gtv6mg+KvAWvQ7mPJKGvC/bxWoyHfUXdl9al3Hc6w13ztGZBBlCG14rNCkJOstbx7Nabo+YSCjNoUXXxyLgN8XtoVdMV763Dxv3qZPJ3v55JlxmUvT8L8DPcsWXzwCjy2h9rvO/tcMVd9203Ln5ysXzrP6HedeDaeL3+J2oJJl1GuZRzshRFvIiC+Z6rsZrjbf3B+GoT4Y7cK7Vk0aQBQmN65EebyBoAprktQQGJEi+EEnXwkFvfmUdwYxpn2X1N0rlpeupGU3SPsx2dc1XinJ0a41UWpouGGQvKgVafTnqHJx/B6ypmODNCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME : process.env.OWNER_NAME || "DULLAH-MD",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255716945971",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT_NAME : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.IMAGE_MENU || 'https://files.catbox.moe/3v4ezj.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY,
    WARN_COUNT : process.env.WARN_COUNT || '3',
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'no',
    ANTICALL : process.env.ANTICALL || 'yes',
    AUTO_REACT : process.env.AUTO_REACT || 'no',
    AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_REPLY : process.env.AUTO_REPLY || 'no',
    AUTO_READ : process.env.AUTO_READ || 'yes',
    AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
    AUTO_BIO : process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'no',
    AUTO_STICKER : process.env.AUTO_STICKER || 'no',
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'no',
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'no',
    ANTIBAD: process.env.ANTIBAD || 'no',

    RMBG_KEY: "MLt7fM4Sqv63U9FAt6FdPKRL",

    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
        : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
};

let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`File updated: ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
