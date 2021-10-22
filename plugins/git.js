const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://images.wallpapersden.com/image/download/pokemon-detective-pikachu-4k_a2lrZmWUmZqaraWkpJRsZ2WtbGdl.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Pikachu bot created by Ameer Suhail*
*Creator number : wa.me/918848120533?text=Hi%20Ameer%20Suhail.%20*

*Bot setting video : https://youtu.be/7Q01xo8jJw4*

*Githublink (Setup)  :    https://github.com/Monuzz-Mkz/aswathyy*

*Audio commads :   https://github.com/Monuzz-Mkz/aswathyy/tree/master/uploads*

*Sticker commads : https://github.com/Monuzz-Mkz/aswathyy/tree/master/uploads*

*Video For Setting Bot : https://youtu.be/7Q01xo8jJw4* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));
