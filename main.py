@namespace
class SpriteKind:
    Obstacle = SpriteKind.create()
    test = SpriteKind.create()
    fin = SpriteKind.create()
    ennemi = SpriteKind.create()
    Vanneloppe_ennemi = SpriteKind.create()
    Vanneloppe_joueur = SpriteKind.create()

def on_hit_wall(sprite2, undefined):
    Bug()
scene.on_hit_wall(SpriteKind.Vanneloppe_joueur, on_hit_wall)

def Machandelle_joueur():
    Vanellope.set_velocity(0, 55)

def on_on_overlap(sprite, otherSprite):
    sprite.set_velocity(60, 50)
    otherSprite.destroy(effects.confetti, 500)
    pause(1000)
    sprite.set_velocity(50, 50)
sprites.on_overlap(SpriteKind.ennemi, SpriteKind.food, on_on_overlap)

def sucette():
    global Sucette_col, sucette_row
    Sucette_col = randint(0, 15)
    sucette_row = randint(2, 45)
    tiles.place_on_tile(sprites.create(sprites.food.big_ice_cream, SpriteKind.food),
        tiles.get_tile_location(Sucette_col, sucette_row))

def on_on_overlap2(sprite3, otherSprite2):
    controller.move_sprite(sprite3, 500, 500)
    otherSprite2.destroy(effects.confetti, 500)
    pause(100)
    controller.move_sprite(sprite3, 100, 100)
sprites.on_overlap(SpriteKind.Vanneloppe_joueur,
    SpriteKind.food,
    on_on_overlap2)

def on_on_overlap3(sprite7, otherSprite5):
    game.over(True, effects.bubbles)
sprites.on_overlap(SpriteKind.player, SpriteKind.fin, on_on_overlap3)

def arrivee(colonne: number):
    tiles.place_on_tile(sprites.create(img("""
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
            """),
            SpriteKind.fin),
        tiles.get_tile_location(colonne, 48))

def on_on_overlap4(sprite11, otherSprite7):
    game.over(False, effects.melt)
sprites.on_overlap(SpriteKind.ennemi, SpriteKind.fin, on_on_overlap4)

def on_on_overlap5(sprite6, otherSprite4):
    controller.move_sprite(sprite6, 500, 500)
    otherSprite4.destroy(effects.confetti, 500)
    pause(100)
    controller.move_sprite(sprite6, 100, 100)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap5)

def on_a_pressed():
    global Joueur, bouttons
    if bouttons == 0:
        Joueur = Vanellope
        Vanellope.set_kind(SpriteKind.Vanneloppe_joueur)
        bouttons += 2
        Machandelle.set_kind(SpriteKind.ennemi)
        Vanelloppe_joueur()
        Jouer()
    elif bouttons == 2:
        Bug()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_hit_wall2(sprite9, undefined3):
    Bug()
    Vanellope.set_velocity(0, 50)
scene.on_hit_wall(SpriteKind.Vanneloppe_ennemi, on_hit_wall2)

def on_overlap_tile(sprite4, location):
    global emmuree
    if emmuree == 1:
        sprite4.set_velocity(0, 70)
        emmuree = 0
scene.on_overlap_tile(SpriteKind.ennemi,
    assets.tile("""
        tile4
    """),
    on_overlap_tile)

def on_hit_wall3(sprite8, undefined2):
    global emmuree
    if sprite8.x < 75:
        for index in range(20):
            sprite8.x += 1
    else:
        for index2 in range(20):
            sprite8.x += -1
    if bouttons == 1:
        Machandelle_joueur()
    else:
        Vanelloppe_joueur()
    emmuree = 1
scene.on_hit_wall(SpriteKind.ennemi, on_hit_wall3)

def Vanelloppe_joueur():
    Machandelle.set_velocity(0, 56)
def Bug():
    Vanellope.set_image(img("""
        . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f . . . . 
                . . . f 9 9 9 9 9 9 9 f . . . . 
                . . f f 9 f 9 9 9 f 9 f . . . . 
                f f f f 9 9 9 9 9 9 9 f . . . . 
                f . f f 9 2 2 2 2 2 9 f . . . . 
                f . . f 9 9 2 9 9 9 9 f . . . . 
                f . . . . . . 9 9 . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . 9 9 . . . . . . .
    """))
    pause(50)
    if randint(0, 100) == 1:
        Vanellope.y += -30
    else:
        Vanellope.y += 30
    pause(50)
    Vanellope.set_image(img("""
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
    """))

def on_b_pressed():
    global Joueur, bouttons
    if bouttons == 0:
        Joueur = Machandelle
        bouttons += 1
        Vanellope.set_kind(SpriteKind.Vanneloppe_ennemi)
        Machandelle_joueur()
        Jouer()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def mur_en_sucre():
    global Mur_col, Mur_row
    Mur_col = randint(0, 15)
    Mur_row = randint(0, 50)
    tiles.place_on_tile(sprites.create(assets.image("""
            smallCake
        """), SpriteKind.Obstacle),
        tiles.get_tile_location(Mur_col, Mur_row))
    tiles.set_wall_at(tiles.get_tile_location(Mur_col, Mur_row), True)
def Choisir():
    global bouttons, Vanellope, Machandelle
    bouttons = 0
    scene.set_background_image(assets.image("""
        mediumShell
    """))
    Vanellope = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Vanellope.set_position(25, 20)
    Machandelle = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Machandelle.set_position(120, 20)
def Jouer():
    tiles.set_tilemap(tilemap("""
        niveau1
    """))
    controller.move_sprite(Joueur, 100, 100)
    scene.camera_follow_sprite(Joueur)
    for index3 in range(randint(5, 15)):
        mur_en_sucre()
    for index4 in range(randint(1, 4)):
        sucette()
    for index32 in range(16):
        arrivee(index32)
    Machandelle.set_position(160, 20)

def on_on_overlap6(sprite10, otherSprite6):
    game.over(False, effects.melt)
sprites.on_overlap(SpriteKind.Vanneloppe_ennemi, SpriteKind.fin, on_on_overlap6)

def on_overlap_tile2(sprite42, location2):
    global emmuree
    if emmuree == 1:
        sprite42.set_velocity(0, 70)
        emmuree = 0
scene.on_overlap_tile(SpriteKind.ennemi,
    assets.tile("""
        tile3
    """),
    on_overlap_tile2)

def on_on_overlap7(sprite5, otherSprite3):
    controller.move_sprite(sprite5, 500, 500)
    otherSprite3.destroy(effects.confetti, 500)
    pause(100)
    controller.move_sprite(sprite5, 100, 100)
sprites.on_overlap(SpriteKind.Vanneloppe_ennemi,
    SpriteKind.food,
    on_on_overlap7)

def on_on_overlap8(sprite72, otherSprite52):
    game.over(True, effects.bubbles)
sprites.on_overlap(SpriteKind.Vanneloppe_joueur, SpriteKind.fin, on_on_overlap8)

Mur_row = 0
Mur_col = 0
Machandelle: Sprite = None
Joueur: Sprite = None
bouttons = 0
sucette_row = 0
Sucette_col = 0
Vanellope: Sprite = None
emmuree = 0
emmuree = 0
Choisir()