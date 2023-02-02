
interface User {
    name: string
    age: number
}

function canDrive(usr: User) {
    console.log("user is", usr.name)

    if (usr.age >= 16) {
        console.log("can drive")
    } else {
        console.log("can't drive")
    }
}

const tom: User = {
    name: "Tom",
    age: 15
}

canDrive(tom)