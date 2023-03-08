/*
Každý e-mail je třeba zakončit zdvořilým pozdravem.
V souboru index.js vytvořte funkci bez parametrů s názvem goodbye. 
Tato funkce vloží do odstavce s třídou email__closing rozloučení „Na shledanou“.
Otevřete stránku v prohlížeči a zavolejte funkci v konzoli. 
Ověřte, že správně změnila pozdrav na konci e-mailu.
Končit e-mail slovy „Na shledanou“ je nezdvořilé. 
Přidejte proto do funkce goodbye parametr představující jméno pisatele e-mailu. 
Funkce do posledního odstavce vloží koncový pozdrav i se jménem. 
A:
*/

const goodbye = () => {
    let odstavec = document.querySelector('.email__closing')
    odstavec.textContent = "Na shledanou"
}

/*
Končit e-mail slovy „Na shledanou“ je nezdvořilé. 
Přidejte proto do funkce goodbye parametr představující jméno pisatele e-mailu.
 Funkce do posledního odstavce vloží koncový pozdrav i se jménem. Příklad použití:
C: 
*/

const goodbye2 = (pozdrav) => {
    let odstavec = document.querySelector('.email__closing')
    odstavec.textContent = "S pozdravem,  " + pozdrav
}

/*
Pokračujte na stránce z přechozího příkladu.
Do souboru index.js přidejte funkci fillSubject s jedním parametrem subject. 
Tato funkce ze stránky vybere DOM element představující předmět e-mailu a nastaví jeho obsah na řetězec,
 který přišel v parametru.
  Zavolejte funkci z konzole a vykoušejte si nastavit předmět e-mailu na různé řetězce.
Napište funkci fillBody s jedním parametrem body, která ze stránky vybere DOM element 
představující tělo e-mailu a nastaví jeho obsah dle hodnoty parametru. 
Funkci vyzkoušejte v konzoli.
Z předchozího cvičení nám zůstala funkce goodbye.
 Do funkce fillBody přidejte další parametr s názvem name. 
 Tento parametr bude představovat jméno odesílatele. 
 Funkce vyplní tělo e-mailu a do elementu email__closing vloží pozdrav, 
 který vyrobí pomocí volání funkce goodbye.
*/

const fillSubject = (subject) => {
    let subjectElement = document.querySelector('.email__subject')
    subjectElement.textContent = subject
}

const fillBody = (body, name) => {
    let bodyElement = document.querySelector('.email__body')
    bodyElement.textContent = body
    goodbye2(name)
}


/*
Převod měny
to dáš
Napište funkci convertToCZK, která převede částku zadanou v cízí měně na české koruny. 
Funkce bude podporovat následující měny a kurzy.
*/

const kurzy = {EUR: 24.47, GBP: 28.08, USD: 24.81, BTC: 478637}

const convertToCZK = (sum, currency) => {
    let actVal
    if(currency === 'EUR'){
        actVal = kurzy.EUR
    }else if(currency === 'GBP'){
        actVal = kurzy.GBP
    }else if(currency === 'USD'){
        actVal = kurzy.USD
    }else if(currency === 'BTC'){
        actVal = kurzy.BTC
    }else{
        return null
    }
    return (sum*actVal)
}