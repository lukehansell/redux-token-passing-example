const clientID = 'Auth0-clientID'
const domain = 'Auth0-domain'

const sharedConfig = {
  clientID,
  domain
}

export default {
  serverRuntimeConfig: {...sharedConfig},
  publicRuntimeConfig: {...sharedConfig}
}