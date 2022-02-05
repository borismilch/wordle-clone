export const words = [
"abbot",
"abeam",
"abler",
"ables",
"abmho",
"abode",
"abohm",
"aboil",
"aboon",
"abuts",
"abuzz",
"abyes",
"abysm",
"abyss",
"acais",
"acari",

"babul",
"babus",

"baggy",

"baler",

"cabin",

"dames",
"damns",
"damps",

"ectal",
"edema",

"gager",
"gages",
"madam",
"madly",
"madre",
"mahoe",
"eager",
"eagle",
"eagre",
"eared",
"haars",
"habit",
"hacek",
"hacks",
"hadal",

"iambs",
"ibada",
"ichor",
"icier",
"icily",]

export  const randomWord = (words: string[]) => {
  return words[Math.ceil(Math.random() * words.length)]
}

