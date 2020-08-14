export default function convertShortcode(content) {
    const button =
        '<a href="#invoice-gen" class="invoice-maker-btn">Make an Invoice Now</a>'
    if (content) {
        return content.replace('[invoice-maker-button]', button)
    }
    return content
}
