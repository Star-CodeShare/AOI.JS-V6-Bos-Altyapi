const { AoiClient, LoadCommands, Util } = require("aoi.js");
const { token, prefix, intents, events } = require('./config.json')
const bot = new AoiClient({
    token,
    prefix,
    intents,
    events,
    disableFunctions: ["$clientToken"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "../database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/")
bot.variables(require(`./variable.js`))
loader.setColors({
  walking: ["blink", "dim", "fgBlue"],
  failedWalking: {
    name: ["bright", "fgRed", "underline"],
    text: ["bright", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgRed"],
    type: ["fgRed"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgGreen"],
    type: ["bright", "fgBlue"],
    text: ["bright", "fgGreen"]
  },
})
/* Star CodeShare */
/*Durum*/
bot.status({
	name:"discord.gg/aoijs - Star CodeShare",
	time: 10,
	status: "dnd",
	type:"PLAYING"
})
