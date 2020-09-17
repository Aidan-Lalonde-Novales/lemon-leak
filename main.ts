sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.spray, 200)
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(10)
mySprite = sprites.create(img`
    . . . . . . . . . . . . f f . . 
    . . . . . . f f f f f f 5 4 f . 
    . . . . f f 5 5 5 5 5 5 5 5 4 f 
    . . . f 5 5 5 5 5 5 5 5 5 5 4 f 
    . . f 5 5 5 5 5 5 1 1 5 5 5 4 f 
    . . f 5 5 5 1 1 5 1 1 5 5 5 4 f 
    . f 5 5 5 5 1 1 5 5 5 5 5 5 4 f 
    . f 5 5 5 5 5 5 5 1 5 5 5 5 4 f 
    . f 5 5 5 5 5 5 5 5 5 5 5 4 4 f 
    . f 5 5 5 5 5 5 5 5 5 5 5 4 4 f 
    . f 5 5 5 5 5 5 5 5 5 5 4 4 f . 
    f 5 5 5 5 5 5 5 5 5 5 5 4 f . . 
    f 5 5 5 5 5 5 5 5 5 5 5 4 f . . 
    . f f 5 5 5 5 5 5 5 4 4 f . . . 
    . . . f 5 5 5 5 5 4 f f . . . . 
    . . . . f f f f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
game.onUpdateInterval(300, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . 1 7 . . . . . . . 
        . . . . 7 7 . 7 7 . 7 7 . . . . 
        . . f f 7 7 7 7 7 7 7 7 f f . . 
        . f 2 2 f f f 7 7 f f f 3 3 f . 
        f 2 2 2 2 2 2 2 2 2 2 2 2 3 3 f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 3 f 
        f 2 2 2 1 1 2 1 2 2 2 2 2 2 3 f 
        . f 2 2 1 1 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 1 1 2 2 2 2 2 f . 
        . f 2 2 2 2 2 1 1 2 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . f 2 2 2 2 f . . . . . 
        . . . . . . f f f f . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
})
