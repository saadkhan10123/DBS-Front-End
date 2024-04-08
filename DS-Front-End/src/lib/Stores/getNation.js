export const getNation = (code) => {
    code.toLowerCase();
    return "/Flags/" + code + ".png";
}