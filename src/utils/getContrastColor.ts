function getContrastColor(hexColor: string) {
    if (!hexColor) return null
    // Remove the hash character if it's included
    hexColor = hexColor?.replace('#', '')

    // Convert the hex color to RGB
    var r = parseInt(hexColor.slice(0, 2), 16)
    var g = parseInt(hexColor.slice(2, 4), 16)
    var b = parseInt(hexColor.slice(4, 6), 16)

    // Calculate the luminance using the relative luminance formula
    var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

    // Choose white or black as the contrasting color based on luminance
    return luminance > 0.5 ? '#000000' : '#FFFFFF'
}

export default getContrastColor
