export const fallbackLng = 'ro'
export const languages = [fallbackLng, 'ru', 'en']

export const defaultNS = 'translation'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    // detection: {
    //   order:['cookie', 'localStorage'],
    //   caches: ['cookie', 'localStorage']
    // },
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}