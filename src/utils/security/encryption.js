import CryptoJS from "crypto-js";

export const generateEncryption = ({ plainText = "", signature = process.env.SIGNATURE } = {}) => {
    const encryption = CryptoJS.AES.encrypt(plainText, signature).toString()
    return encryption
}

export const generateDecryption = ({ cipherText = "", signature = process.env.SIGNATURE } = {}) => {
    const decoded = CryptoJS.AES.decrypt(cipherText, signature).toString(CryptoJS.enc.Utf8)
    return decoded
}