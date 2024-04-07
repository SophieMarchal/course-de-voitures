namespace SpriteKind {
    export const Obstacle = SpriteKind.create()
    export const test = SpriteKind.create()
    export const fin = SpriteKind.create()
    export const ennemi = SpriteKind.create()
    export const Vanneloppe_ennemi = SpriteKind.create()
    export const Vanneloppe_joueur = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Vanneloppe_joueur, function (sprite2, undefined) {
    Bug()
})
function Machandelle_joueur () {
    Vanellope.setVelocity(0, 55)
}
sprites.onOverlap(SpriteKind.ennemi, SpriteKind.Food, function (sprite, otherSprite) {
    sprite.setVelocity(60, 50)
    otherSprite.destroy(effects.confetti, 500)
    pause(1000)
    sprite.setVelocity(50, 50)
})
function sucette () {
    Sucette_col = randint(0, 15)
    sucette_row = randint(2, 45)
    tiles.placeOnTile(sprites.create(sprites.food.bigIceCream, SpriteKind.Food), tiles.getTileLocation(Sucette_col, sucette_row))
}
sprites.onOverlap(SpriteKind.Vanneloppe_joueur, SpriteKind.Food, function (sprite3, otherSprite2) {
    controller.moveSprite(sprite3, 500, 500)
    otherSprite2.destroy(effects.confetti, 500)
    pause(100)
    controller.moveSprite(sprite3, 100, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fin, function (sprite7, otherSprite5) {
    game.over(true, effects.bubbles)
})
function arrivee (colonne: number) {
    tiles.placeOnTile(sprites.create(img`
        . . . . . . . . . . . . 3 3 3 3 
        . . . . . . . . . . . . 3 3 3 3 
        . . . . . . . . . . . . 3 3 3 3 
        . . . . . . . . . . . . 3 3 3 3 
        . . . . . . . . . . . . 1 1 1 1 
        . . . . . . . . . . . . 1 1 1 1 
        . . . . . . . . . . . . 1 1 1 1 
        . . . . . . . . . . . . 1 1 1 1 
        . . . . . . . . . . . . 3 3 3 3 
        . . . . . . . . . . . . 3 3 3 3 
        . . . . . . . . . . . . 3 3 3 3 
        . . . . . . . . . . . . 3 3 3 3 
        . . . . . . . . . . . . 1 1 1 1 
        . . . . . . . . . . . . 1 1 1 1 
        . . . . . . . . . . . . 1 1 1 1 
        . . . . . . . . . . . . 1 1 1 1 
        `, SpriteKind.fin), tiles.getTileLocation(colonne, 48))
}
sprites.onOverlap(SpriteKind.ennemi, SpriteKind.fin, function (sprite11, otherSprite7) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite6, otherSprite4) {
    controller.moveSprite(sprite6, 500, 500)
    otherSprite4.destroy(effects.confetti, 500)
    pause(100)
    controller.moveSprite(sprite6, 100, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bouttons == 0) {
        Joueur = Vanellope
        Vanellope.setKind(SpriteKind.Vanneloppe_joueur)
        bouttons += 2
        Machandelle.setKind(SpriteKind.ennemi)
        Vanelloppe_joueur()
        Jouer()
    } else if (bouttons == 2) {
        Bug()
    }
})
scene.onHitWall(SpriteKind.Vanneloppe_ennemi, function (sprite9, undefined3) {
    Bug()
    Vanellope.setVelocity(0, 50)
})
scene.onHitWall(SpriteKind.ennemi, function (sprite8, undefined2) {
    if (sprite8.x < 75) {
        for (let index = 0; index < 5; index++) {
            sprite8.x += 1
            pause(100)
        }
    } else {
        for (let index = 0; index < 5; index++) {
            sprite8.x += -1
            pause(100)
        }
    }
    if (bouttons == 1) {
        Machandelle_joueur()
    } else {
        Vanelloppe_joueur()
    }
    emmuree = 1
})
function Vanelloppe_joueur () {
    Machandelle.setVelocity(0, 56)
}
function Bug () {
    if (randint(0, 100) == 1) {
        Vanellope.y += -30
    } else {
        Vanellope.y += 30
    }
    Vanellope.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f d d d d d d d f . . . . 
        . . f f d f d d d f d f . . . . 
        f f f f d d d d d d d f . . . . 
        f . f f d 2 2 2 2 2 d f . . . . 
        f . . f d d 2 d d d d f . . . . 
        f . . . . . . 9 9 . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        `)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bouttons == 0) {
        Joueur = Machandelle
        bouttons += 1
        Vanellope.setKind(SpriteKind.Vanneloppe_ennemi)
        Machandelle_joueur()
        Jouer()
    }
})
function mur_en_sucre () {
    Mur_col = randint(0, 15)
    Mur_row = randint(0, 50)
    tiles.placeOnTile(sprites.create(assets.image`smallCake`, SpriteKind.Obstacle), tiles.getTileLocation(Mur_col, Mur_row))
    tiles.setWallAt(tiles.getTileLocation(Mur_col, Mur_row), true)
}
function Choisir () {
    bouttons = 0
    scene.setBackgroundImage(assets.image`mediumShell`)
    Vanellope = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f d d d d d d d f . . . . 
        . . f f d f d d d f d f . . . . 
        f f f f d d d d d d d f . . . . 
        f . f f d 2 2 2 2 2 d f . . . . 
        f . . f d d 2 d d d d f . . . . 
        f . . . . . . 9 9 . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        `, SpriteKind.Player)
    Vanellope.setPosition(25, 20)
    Machandelle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 d d d d d d d 7 . . . . 
        . . 7 7 d f d d d f d 7 . . . . 
        7 7 7 7 d d d d d d d 7 . . . . 
        7 . 7 7 d 2 2 2 2 2 d 7 . . . . 
        7 . . 7 d d 2 d d d d 7 . . . . 
        7 . . . . . . 3 3 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        `, SpriteKind.Player)
    Machandelle.setPosition(47, 18)
}
function Jouer () {
    tiles.setTilemap(tilemap`niveau1`)
    controller.moveSprite(Joueur, 100, 100)
    scene.cameraFollowSprite(Joueur)
    for (let index = 0; index < randint(5, 15); index++) {
        mur_en_sucre()
    }
    for (let index = 0; index < randint(1, 4); index++) {
        sucette()
    }
    for (let index3 = 0; index3 <= 15; index3++) {
        arrivee(index3)
    }
}
sprites.onOverlap(SpriteKind.Vanneloppe_ennemi, SpriteKind.fin, function (sprite10, otherSprite6) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.ennemi, assets.tile`tile3`, function (sprite4, location) {
    if (emmuree == 1) {
        sprite4.setVelocity(0, 70)
        emmuree = 0
    }
})
sprites.onOverlap(SpriteKind.Vanneloppe_ennemi, SpriteKind.Food, function (sprite5, otherSprite3) {
    controller.moveSprite(sprite5, 500, 500)
    otherSprite3.destroy(effects.confetti, 500)
    pause(100)
    controller.moveSprite(sprite5, 100, 100)
})
let Mur_row = 0
let Mur_col = 0
let Machandelle: Sprite = null
let Joueur: Sprite = null
let bouttons = 0
let sucette_row = 0
let Sucette_col = 0
let Vanellope: Sprite = null
let emmuree = 0
emmuree = 0
Choisir()
