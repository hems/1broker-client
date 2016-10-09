OneBroker = require "../src/client"
api_key   = require "./api_key"

if not api_key

  console.log "Can't test without API_KEY !"
  console.log "Please update tests/api_key.coffee"
  return

client = OneBroker( api_key )

callback = ( error, response ) ->

  if error
    console.log "got error"
    console.log error
    return

  console.log "response"
  console.log response

# client.account_overview();
# client.account_info();
client.account_bitcoin_deposit_address callback