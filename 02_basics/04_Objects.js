//const tinderUser = new Object() (Singleton Object)

const tinderUser = {}//(non singleton object)
tinderUser.id = "443"
tinderUser.username = "Roman"
tinderUser.isLogged = false
//console.log(tinderUser)

regularUser = {
    Fullname:{
        Firstname:"Roman",
        Lastname:"khadka"
    }
}
//console.log(regularUser.Fullname.Firstname)\

const obj1 = {a:"1",b:"2"}
const obj2 = {c:"1",d:"2"}
const obj4 = {e:"1",f:"2"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3);
console.log(tinderUser);
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.keys(tinderUser));
console.log(tinderUser.hasOwnProperty('id'));


const User = [
    {
        id:1,
        password :"Roman"
    },
    {
        id:2,
        password :"Roman"
    },
    {
        id:3,
        password :"Roman"
    },
    {
        id:4,
        password :"Roman"
    },
    {
        id: 5,
        password :"Roman"
    },
]
Users[2].id
