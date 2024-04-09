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
scene.onOverlapTile(SpriteKind.ennemi, assets.tile`tile3`, function (sprite42, location2) {
    if (emmuree == 1) {
        sprite42.setVelocity(0, 70)
        emmuree = 0
    }
})
function Machandelle_joueur () {
    Vanellope.setVelocity(0, 100)
}
sprites.onOverlap(SpriteKind.ennemi, SpriteKind.Food, function (sprite, otherSprite) {
    sprite.setVelocity(0, 500)
    otherSprite.destroy(effects.confetti, 500)
    pause(1000)
    sprite.setVelocity(0, 100)
})
function sucette () {
    Sucette_col = randint(1, 5)
    sucette_row = randint(5, 45)
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
sprites.onOverlap(SpriteKind.Vanneloppe_joueur, SpriteKind.fin, function (sprite72, otherSprite52) {
    game.over(true, effects.bubbles)
})
scene.onOverlapTile(SpriteKind.ennemi, assets.tile`tile4`, function (sprite4, location) {
    if (emmuree == 1) {
        sprite4.setVelocity(0, 70)
        emmuree = 0
    }
})
scene.onHitWall(SpriteKind.ennemi, function (sprite8, undefined2) {
    if (sprite8.x < 75) {
        for (let index = 0; index < 20; index++) {
            sprite8.x += 1
        }
    } else {
        for (let index = 0; index < 20; index++) {
            sprite8.x += -1
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
    Machandelle.setVelocity(0, 100)
}
function Bug () {
    Vanellope.setImage(img`
        f f f . . . . . . . . . . . 
        f f f f . . . . . . . . . . 
        f . f 3 f f f f f f . . . . 
        . . 3 f f f f f f f f . . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . f f 8 8 8 8 8 8 f f . . 
        . . f 8 8 e 8 8 e 8 8 f . . 
        . . f f 1 e 8 8 e 1 f f . . 
        . . . . 8 8 8 8 8 8 . . . . 
        . . 9 9 9 9 9 9 9 9 9 9 . . 
        . . 9 . 9 9 9 9 9 9 . 9 . . 
        . . 9 . 9 9 9 9 9 9 . 9 . . 
        . . 9 . e e e e e e . 9 . . 
        . . . . 9 9 9 9 9 9 . . . . 
        . . . . f f . . f f . . . . 
        `)
    pause(50)
    if (randint(0, 100) == 1) {
        Vanellope.y += -30
    } else {
        Vanellope.y += 30
    }
    pause(50)
    Vanellope.setImage(img`
        f f f . . . . . . . . . . . 
        f f f f . . . . . . . . . . 
        f . f 3 f f f f f f . . . . 
        . . 3 f f f f f f f f . . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . f f d d d d d d f f . . 
        . . f d d e d d e d d f . . 
        . . f f 1 e d d e 1 f f . . 
        . . . . d d d d d d . . . . 
        . . 9 9 9 9 9 9 9 9 9 9 . . 
        . . 9 . 9 9 9 9 9 9 . 9 . . 
        . . 9 . 9 9 9 9 9 9 . 9 . . 
        . . 9 . e e e e e e . 9 . . 
        . . . . 9 9 9 9 9 9 . . . . 
        . . . . f f . . f f . . . . 
        `)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bouttons == 0) {
        Joueur = Machandelle
        bouttons += 1
        Vanellope.setKind(SpriteKind.Vanneloppe_ennemi)
        Machandelle_joueur()
        Jouer()
    } else if (bouttons == 1) {
        if (randint(1, 3) == 3) {
            vitesse += -10
            controller.moveSprite(Joueur, vitesse, vitesse)
        } else {
            vitesse += 10
            controller.moveSprite(Joueur, vitesse, vitesse)
        }
    } else if (randint(1, 3) == 3) {
        vitesse += -10
        controller.moveSprite(Vanellope, vitesse, vitesse)
    } else {
        vitesse += 10
        controller.moveSprite(Vanellope, vitesse, vitesse)
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
        f f f . . . . . . . . . . . 
        f f f f . . . . . . . . . . 
        f . f 3 f f f f f f . . . . 
        . . 3 f f f f f f f f . . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . f f d d d d d d f f . . 
        . . f d d e d d e d d f . . 
        . . f f 1 e d d e 1 f f . . 
        . . . . d d d d d d . . . . 
        . . 9 9 9 9 9 9 9 9 9 9 . . 
        . . 9 . 9 9 9 9 9 9 . 9 . . 
        . . 9 . 9 9 9 9 9 9 . 9 . . 
        . . 9 . e e e e e e . 9 . . 
        . . . . 9 9 9 9 9 9 . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    Vanellope.setPosition(25, 20)
    Machandelle = sprites.create(img`
        . . . . . . 5 5 . . . . . . 
        . . . . 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 . . . 
        . . 3 3 3 3 3 3 3 3 3 3 . . 
        . . e e e e e e e e e e . . 
        . . 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 d d d d d d 7 7 . . 
        . . 3 3 d 7 d d 7 d 3 3 . . 
        . 7 7 . 1 f d d f 1 . 7 7 . 
        7 . 7 . d d d d d d . 7 . 7 
        . . 3 3 3 3 3 3 3 3 3 3 . . 
        . . 3 . 3 3 3 3 3 3 . 3 . . 
        . . 3 . 3 3 3 3 3 3 . 3 . . 
        . . 3 . 3 3 3 3 3 3 . 3 . . 
        . . . . e e e e e e . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    Machandelle.setPosition(120, 20)
    vitesse = 100
}
function Jouer () {
    tiles.setTilemap(tilemap`niveau1`)
    controller.moveSprite(Joueur, vitesse, vitesse)
    scene.cameraFollowSprite(Joueur)
    for (let index = 0; index < randint(5, 15); index++) {
        mur_en_sucre()
    }
    for (let index = 0; index < randint(1, 4); index++) {
        sucette()
    }
    for (let index32 = 0; index32 <= 15; index32++) {
        arrivee(index32)
    }
    Machandelle.setPosition(54, 20)
}
sprites.onOverlap(SpriteKind.Vanneloppe_ennemi, SpriteKind.fin, function (sprite10, otherSprite6) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Vanneloppe_ennemi, SpriteKind.Food, function (sprite5, otherSprite3) {
    Vanellope.setVelocity(0, 500)
    otherSprite3.destroy(effects.confetti, 500)
    pause(100)
    Vanellope.setVelocity(0, 100)
})
let Mur_row = 0
let Mur_col = 0
let vitesse = 0
let Machandelle: Sprite = null
let Joueur: Sprite = null
let bouttons = 0
let sucette_row = 0
let Sucette_col = 0
let Vanellope: Sprite = null
let emmuree = 0
emmuree = 0
Choisir()
