let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via PULSA
╠➥ *087752078682*
║- Chat Owner Terlebebih
║ Dahulu
╠═〘 Fitur 〙 ═
║
╠➥ *FITUR WELCOME*
║    *FITUR STIKER*
╠➥ *FITUR ADMIN*
║    *KICK ORANG*
║    *JADIIN ADMIN*
╠➥ *FITUR HINDU*
║   *KITAB SUCI*
║   *CEK JADWAL TRISANYA*
╠➥ *INTERNET*
║   *BRAINLY*
║   *GOOGLE*
╠➥ *DAN 200 LEBIH*
║   *FITUR LAINNYA*
║ 
╠═ ©2022 wabot-aq
╠═ Scrip original by Nurutomo
╠═〘 JuniArta 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viadana']
handler.tags = ['info']
handler.command = /^viadana$/i

module.exports = handler
