module.exports = function decorate(data) {
    data.asFraction = function(n) {
        if (!n) return ""

        let result = `${n}`
        result = result.replace(/\.125$/, "⅛")
        result = result.replace(/\.25$/, "¼")
        result = result.replace(/\.3+$/, "⅓")
        result = result.replace(/\.375$/, "⅜")
        result = result.replace(/\.5$/, "½")
        result = result.replace(/\.625$/, "⅝")
        result = result.replace(/\.6+$/, "⅔")
        result = result.replace(/\.75$/, "¾")
        result = result.replace(/\.875$/, "⅞")
        result = result.replace(/^0+/, "")
        return result
    }
    return data
}
