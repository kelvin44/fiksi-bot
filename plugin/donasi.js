let handler = async m => m.reply(`
╭─「 Donasi • Pulsa Dan dana 」
│ • Telkomsel [0812-1830-5935]
│ • Dana : [0852-1283-0930]
│ • Telkomsel: [0852-1283-0930]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6281218305935
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
