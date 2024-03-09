export const URL_CONTACT = 'https://api.whatsapp.com/send?phone=5511912345678&amp;text=MESSAGE_PLACEHOLDER'
export const URL_WP ='https://api.whatsapp.com/send?phone=5511912345678&amp;text=MESSAGE_PLACEHOLDER'
export const PHONE ='(11) 5050-4040'
export const EMAIL_CONTACT ='contato@upcambio.com.br'
export const URL_INSTA ='https://www.instagram.com/upcambio_exchange/'
export const TERMOS ='https://upcambio.com/TERMOS_DE_USO_URL'
export const POLITIVA_PRIVACIDADE ='https://upcambio.com/POLITICA_DE_PRIVACIDADE'

export function appendToUrlContact(text = ''){
  const url = new URL(URL_CONTACT)
  if(text.trim().length > 1) {
    url.searchParams.set('text', text)
  }
  return url.toString()
}