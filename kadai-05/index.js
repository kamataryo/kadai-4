const profile = { 
    name :"村上雄基", 
    age :"20",
    hobby: "本を読むこと",
    major:"日本史学専攻"

}
const  keys = Object.keys(profile)
 console.log(keys)

 for (let index = 0; index <keys.length; index = index+1) {
     const key = keys[index]
     const value = profile[key]
     console.log("私の"+ key+ "は"　+ value + "です。")
 }