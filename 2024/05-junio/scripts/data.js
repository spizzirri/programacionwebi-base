const LOCALSTORAGE_SERIES = 'series'

/**
 * nombre
 * sinopsis
 * temporadas 
 * 
 */

if(localStorage.getItem('series') == null){

    const THE_OFFICE = {nombre: 'The Office', sinopsis: 'lalala', temporadas: 9}
    const HOW_I_MEET_YOUR_MOTHER = {nombre: 'How I meet your mother', sinopsis: 'lalala', temporadas: 9}
    const BLACK_MIRROR = {nombre: 'Black Mirror', sinopsis: 'lalala', temporadas: 6}
    const GAMES_OF_THRONES = {nombre: 'Games of Thrones', sinopsis: 'lalalal', temporadas: 8}
    const THE_WITCHER = {nombre: 'The Witcher', sinopsis: 'lalalal', temporadas: 4}
    
    const SERIES_A_GUARDAR = [
        THE_OFFICE, HOW_I_MEET_YOUR_MOTHER, BLACK_MIRROR, GAMES_OF_THRONES, THE_WITCHER
    ]
    
    localStorage.setItem(LOCALSTORAGE_SERIES, JSON.stringify(SERIES_A_GUARDAR))
}
