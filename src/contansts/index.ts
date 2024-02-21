export const URL_CONTACT = 'https://api.whatsapp.com/send?phone=+971524574831&text=Hi%21+I%27m+interested+in+renting+a+luxury+car+with+MKAutos'
export function appendToUrlContact(text = ''){
  const url = new URL('https://api.whatsapp.com/send?phone=+971524574831&text=Hi%21+I%27m+interested+in+renting+a+luxury+car+with+MKAutos')
  if(text.trim().length > 1) {
    url.searchParams.set('text', text)
  }
  return url.toString()
}