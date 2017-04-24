import Palm from 'palm'
import searchApis from './search_apis'

// Initialize Palm
const palm = new Palm({
  // **** Example that works with Telegram API ****
  // talk: 'telegram',
  // telegram: require('../config').telegram // import telegram settings
  // **** END EXAMPLE ****

  // **** Example with RocketChat ****
  // talk: 'rocket_chat'
  // rocketchat: reqire('../config').rocketchat
  // **** END EXAMPLE ****

  // **** Example with CLI ****
  talk: 'cli'
  // NOTE: no settings needed for CLI
  // **** END EXAMPLE ****
})

// Add a plugin
palm.addCoco(searchApis)

// Start listening for messages
palm.listen()
