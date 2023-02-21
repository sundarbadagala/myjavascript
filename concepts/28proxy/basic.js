const gameSetting = { 
    'difficulty': 'easy', 
    'leves': 30 
}

const gameSettingProxy = new Proxy(gameSetting, {
    get(target, key) {
        return key in target ? target[key] : 'no data'
    },
    set(target, key, value){
        if(key === 'difficulty' && !['easy', 'medium', 'hard'].includes(value.toLowerCase())){
            throw new Error('Difficulty is invalid')
        }
        if(key === 'theme' && !['dark','light'].includes(value.toLowerCase())){
            throw new Error('Theme is invalid')
        }
        return target[key] = value
    }
})

console.log(gameSettingProxy.difficulty);
console.log(gameSettingProxy.leves);
console.log(gameSettingProxy.theme);
gameSettingProxy.theme = 'dark'
console.log(gameSettingProxy.theme);

