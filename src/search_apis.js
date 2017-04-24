import axios from 'axios'
import logger from 'chalk-log'
import _ from 'lodash'

import config from '../config'

const headers = {
	'X-Admin-Auth-Token': config.api_umbrella.auth_token,
	'X-Api-Key': config.api_umbrella.api_key
}

export default {
  enabled: true,
  name: 'search_apis',
  details: 'Search APIs on APInf.',
  keywords: ['api'],
  exec (text) {
    // Get api text
    const text2Find = text.split(' ')[1]

    // Return promise
    return new Promise((resolve, reject) => {
      // Fetch APIs list
      axios.get(config.api_umbrella.url, { headers })
      .then(res => {
        let foundApis = []
        const apis = res.data.data

        // Find APIs
        _.forEach(apis, api => {
          if (api.name.match(new RegExp(text2Find, 'i'))) {
            foundApis.push(api)
          }
        })

        // Construct text to send
        let text = `Found ${foundApis.length} api(s)!\n`
        if (foundApis.length > 0) {
          _.forEach(foundApis, api => {
            text += `\n - API: ${api.name} - ${api.backend_protocol}://${api.backend_host}`
          })
        }

        resolve(text)
      })
      .catch(err => logger.error(err))
    })
  }
}
