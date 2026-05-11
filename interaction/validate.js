export function validateEmail(email) {
    const chars = email.split(""); //transformando o email num array de characteres
    const size = chars.length;
    if (chars.slice(size - 4, size).join("") === ".com" && chars.includes('@') && chars[size-5] !== '@' && chars[0] !== '@') {
        return true; //true significa que o email é válido
    }
    return false; //false é inválido
}