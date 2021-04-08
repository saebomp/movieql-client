import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'



const restLink = new RestLink({
  uri: 'https://newsapi.org/v2/',
  headers: {
    Authorization: '16849f05254a4414971358ff80e77661'
  },
})

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
})


export default client;

// https://blog.naver.com/objconsolelog/222080587338

// https://stackoverflow.com/questions/50278979/how-to-overcome-cors-issue-with-https-newsapi-org


// https://stackoverflow.com/questions/62091171/how-to-fix-cors-issue-in-netlify
// https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141