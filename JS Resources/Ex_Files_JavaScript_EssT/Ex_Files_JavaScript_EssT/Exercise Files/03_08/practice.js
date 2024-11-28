/* backpack object */

const backpack = {
    Name: "Ëveryday backpack", 
    volume: 30, 
    colour: "grey",
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26,
    }, 
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.lengthLeft = lengthLeft;
        this.lengthRight = lengthRight;
    },
    extendVolume: function (volume){
        this.volume = volume + 10;
    },
};

console.log(backpack);
console.log(backpack.pocketNum)


