let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Drawl Nag
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com/Arya274/Arya-DN
╠➥ Instagram: @ff.kelvin15
╠➥ YouTube: Drawl Nag
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ *Dana: 085212830930*
╠➥ *Telkomsel: 081218305935*
╠➥ *Telkomsel : 081218305935*
║
║>Request? Wa.me/6281218305935
║
╠═〘 KOPET BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

