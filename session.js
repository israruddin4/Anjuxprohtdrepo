//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tuaWtUb3lFOWozQWNhakNFTDhzMVc4aXBseG5vZk80VnJzMjBPWWxFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUk5xVXh1MzZXMGlZUmkyR0IveTMyWVFFRGQxZzV5YVpwZlNNeWZEd09UVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSWk5YVdvRk9ZTkc5T3FPdFo0UTN2MkJDVTVQQjdvWC81YWRoZWtVQkVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUDdnNXIvUDBuajk5VVdXb2E5aThBclAwS2ZNQ1RWWVNaSkQwcGFiQVFBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlPMk9lRkoxTFhUc0orNmh0RXR3eHZoak4yRTdVaG5rSndCMlMwcjFsWFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhvS2VGL2tDc3krU09hUzhIUnVwSUQ3VVpWQ1dOYkNOM1BlTk9PbVRvaFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUx3eS9RTGx2ZHYvNzNZSHlsQnNJUTlMNG9pS1J6TXlKWW9jS0RFZ3IyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVk1ZRzZudGl5ZCszb21LdGZzZlJ2c0ZWdU14aEhCdERtb0lIS29NbVBVaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllTdnVnR3YxelRmbUl3TWN0V0hKQ1EzU0tVT25Vc0JEZVFUME8rd2lCdHRoaWRJQmJkVlUvQ3haYmRYSDZDVHR3dS9yV0NsM0VIQjcyREVETi9Ta0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJNY3g0aDlJbjk1VlhlUXg0bWFEcXBvaE9IZ2MyS1dLM2RKOFJmQ2pnSGNnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJY3ByNENfeVN6YTZHUllDSnczVlhRIiwicGhvbmVJZCI6ImZjNjQ2MmVlLTJhZmItNDU4Yi04ZWNkLTk0NjczZmU4YWFhOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SDkxak40NGUvYjBCRUlnMndaL0hpUWhvdU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnUyUktXUlI1bzU3a0hrOHJOYlpmQXJxTHJVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5LR0ExSDhSIiwibWUiOnsiaWQiOiI5MjM0OTM5MzY5ODA6MTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Rt/CdkpPwnZKK8J2Sj/CdkoTwnZKG8J2SlPCdkpQv8J2QjCIsImxpZCI6IjEyMjU4MzczNTQ2MTY2OjE0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0x5eFlZRUVMU0R6TVFHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUGkyWG9uOE14Z2cvZnFVaFN1M1cvR2ROUVkrWnN1allWV3ZyRkNrbktSND0iLCJhY2NvdW50U2lnbmF0dXJlIjoid1pUaUhIeGdJaVgvQ1BCNGFWK0djYjgzVXd2SXJVaTI2N1BzdTZMTU9DTy9jUlpmSzhOZk0xMDU2REJaKzNRMkJGSmx3UnFDL2kzUjk4TkQ5OFhoQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjA2VXlHdFVBWWdqTUVIcGc4ZW9WWlRKNmdWbnR6NGhpdHFoTThVU3ZUaXZKd2piMjFyV1NXUWpsSmYzRmp2Ym5JeTF1ZmhwZnlCNXNmZURUVXlRa0NnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDkzOTM2OTgwOjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQ0dGw2Si9ETVlJUDM2bElVcnQxdnhuVFVHUG1iTG8yRlZyNnhRcEp5a2UifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDQ2NDcwNywibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMNzIifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "923493936980",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
