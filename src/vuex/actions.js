import http from 'axios'

http.defaults.baseURL = 'https://easy-mock.com/mock/5aa10377e709546659f369c7/ssr'

export const getNews = ({ commit, state }) => {
  return http.post('news').then((response) => {
    if (response.statusText === 'OK') {
      commit('NEWS_LIST', response.data.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}

export const increment = ({ commit }) => commit('INCREMENT')
export const decrement = ({ commit }) => commit('DECREMENT')
