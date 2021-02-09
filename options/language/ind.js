exports.wait = () => {
        return `Espere..`
}

exports.timeEnd = () => {
        return `O tempo acabou`
}

exports.succsess = () => {
        return `Sucesso!`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *Leveling ativado*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *Leveling desativado*`
}

exports.levelnol = () => {
        return `KKKKKKKKKJ LEVEL 0`
}

exports.stick = () => {
        return `[❗] Falha, ocorreu um erro ao converter a imagem em um sticker`
}

exports.Iv = () => {
        return `❌ Link inválido`
}

exports.group = () => {
        return `[❗] Só grupos!`
}

exports.ownerG = () => {
        return `[❗] Só o dono do grupo!`
}

exports.ownerB = () => {
        return `[❗] Só o dono do bot!`
}

exports.admin = () => {
        return `[❗] Só admin!`
}

exports.Badmin = () => {
        return `[❗] Preciso ser admin!`
}

exports.daftarB = (prefix) => {
        return `───「 AINDA NÃO REGISTRADO 」──\nOlá!\nVocê ainda não se registrou, vamos registrar primeiro...\n\nComando : ${prefix}registro nome|idade\nExemplo : ${prefix}registro Frosty|16`
}

exports.daftarD = () => {
        return `*「 JÁ SE REGISTROU 」*\n\n*você se registrou no banco de dados do bot*`
}

exports.wrongf = () => {
        return`*Formato incorreto / texto em branco*`
}

exports.clears = () => {
        return`*Pronto*`
}

exports.pc = () => {
        return`*「 REGISTRO 」*\n\n para saber se você se registrou, verifique a mensagem que eu enviei\n\nNOTA:\n* se você não recebeu uma mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 REGISTRO 」*\n\nvocê se registrou com os dados \n\n◪ *DADOS* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Número : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Idade : ${umurUser} \n  ├─ ❏ Horário : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTA : \n NÃO ESQUEÇA ESTE NÚMERO PORQUE É IMPORTANTE:v`
}

exports.cmdnf = (prefix, command) => {
        return`comando *${prefix}${command}* não foi encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*desculpe, mas ${pushname} não é o script do proprietário*`
}

exports.limitend = (pushname) => {
        return`*desculpe, o limite de ${pushname} hoje expira * \n * o limite é redefinido a cada 24:00 horas*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMITE 」*
o resto do seu limite : ${limitCounts}

NOTA: para obter o limite. pode passar de nível ou limite de capacidade`
}

exports.satukos = () => {
        return`*Adicionar parâmetro 1 / ativar ou 0 / desativar`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nome* : ${pushname}\n  ❏ *Número* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${uangkau}`
}
