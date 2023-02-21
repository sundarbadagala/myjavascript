const legacyFontSizes = {
    extraLarge : {
        replaceName : 'gigantic',
        replaceValue : 'gigantic'
    },
    extraSmall : {
        replaceName : 'tiny',
        replaceValue : 'tiny'
    }
}

const fontSizes = {
    gigantic : 'gigantic',
    large : 'lrage',
    medium : 'medium',
    small : 'small',
    tiny : 'tiny'
}

const proxyOptions = {
    get(target, key){
        if(key in legacyFontSizes){
            const legacyProp = legacyFontSizes[key]
            console.warn(`${key} is deprecated.`,`use ${legacyProp.replaceName} instead`);
            return legacyProp.replaceValue
        }
        return Reflect.get(target, key)
    }
}

const proxyFontSizes = new Proxy(fontSizes, proxyOptions)

console.log(proxyFontSizes.small);
console.log(proxyFontSizes.large);
console.log(proxyFontSizes.extraLarge);