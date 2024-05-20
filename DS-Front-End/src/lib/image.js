export function image(img) {
    const index = img.indexOf("base64")
    return `data:image/${img.substring(10, index)};base64,${img.substring(index + 6)}`
}