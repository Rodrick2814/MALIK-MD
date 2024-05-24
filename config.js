const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("256782956464,")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://malikmd:malikmd@cluster0.bfc7ce9.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'rodrick2814@gmail.com'
global.github = 'https://github.com/arkhan998/MALIK-MD'
global.location = 'Pakistan'
global.gurl = 'king-md.db' // add your username
global.sudo = process.env.SUDO || '923124533358'
global.devs = '923124533358';
global.website = 'https://github.com/arkhan998/MALIK-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/dce77f7538019d05afe65.jpg'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "MALIK-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEtPUWJwMXB5dmJCckdqKzFvQzQzWjNUTkJhdHVGMjdJeXFZTjBhMnZGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSForTFZxY0pxL3hQeFhPajFwL2wzZlZwajVibkppYkxXdHV3WlJQRUZEWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTHlSK0d2U1hFNVhIU1dvazNtbHN0NlVOaXFSWlJhMVkzL0VLMlQwNFd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5NElVcG5hZmhCWmpaS2ZrcEprcDdub2grb3JnT09Va09hemtIYzZjaURzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBKOXNmY0NDYVR2aFlISlBjRExCRGpTcEdqN2R3RERvUjNLcDdkRjZKVWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYxNWlleTUzVFJ4a2MzK1lIZVVKZ3BUTVBDTG5HdXNtYlhrTmpsOUd3REU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUI4dnJieTdMRUVkYmhwdW85Z2V2WURSVXNFWDY1U1dsVGg2RWpPMG5saz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWd3RUlFOVA3ZHBDa3ZxZEJGZ3V6Q2RzN2pYTjJBTDZJT3RDaiswaUVUND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdyblVxTFA4OGQ2dzZJNDVUNGNIR1V2VDIrblNxeXk5QmZkZm1VVlFQeTVyc2M5UlozVlZSWitYdUVNdGpaZEdRaVdCYi9nN2N0YU8vaWFnVUZCUGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiJLei9tZHovdnRRQVRyMmpwczlZejhKcEQyME5UNTVjV2U4cXUxOTRwVzYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXbElXc0xsOVE5LTU4d2hTSDRMRmhRIiwicGhvbmVJZCI6IjU0NmY2OTY3LTRmOTQtNDg2NS05NzgyLTBkNTVlMmYxMmEzOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3MVhTM1pEZ1RHSHpUVEVlbEZiMjJjTW12L1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTklLZEdlZHowSVNlcEpoMWxBd29FaUNFV1VJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJZOVcyQkNLIiwibWUiOnsiaWQiOiIyNTY3ODI5NTY0NjQ6NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS25nbDhnREVLdnl2N0lHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNUU4cnNTYmplb0NocDFwT2JHMlQ5bm8yMVptdjJ4NDFnUlRaY2liRFYxMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZlY4M3pYTEFXZmQ5RnRkUlhBN3JhcXVQcWwya2RhUUtac0V4THlnb2IwcEJqbEt1bHhXMVNwNTh2RllIb2FsemlDSHIxQmF1Q2VlMWhjSzlhTnFnREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImNzUDM3cHdMWFUrY2Fpb2RKK1NFMUtCKzBwbWZxR1AzVUhUUlNPcjlMSGpqcVVCYkJ5NmRQYUs3Y0tTR0xZeHZFM1pMYzdtNFdOWjh2WXRXNksvRGlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzgyOTU2NDY0OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZVJQSzdFbTQzcUFvYWRhVG14dGsvWjZOdFdacjlzZU5ZRVUyWEltdzFkZCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNjUxNzE3NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLTGsifQ==",
  botname:   process.env.BOT_NAME === undefined ? 'XXXAVIER ' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'RODRICK' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'bot' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'malik-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '#' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'MALIK',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
