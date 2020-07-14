let languages = new Map()
languages.set('de', './de/')
languages.set('en', './en/')
var userLang = navigator.language || navigator.userLanguage 
if(userLang.length >= 2){
    var lang = userLang.substr(0,2)
    if(languages.has(lang)){
        window.location.replace(languages.get(lang))
    }else{
        window.location.replace(languages.get('en'))    
    }
}else{
    window.location.replace(languages.get('en'))
}



