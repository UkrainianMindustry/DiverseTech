const fragB1 = extend(BasicBulletType, {
  damage: 95,
  speed: 4,
  lifetime: 80,
  height: 23,
  width: 19,
  homingPower: 0.2,
  homingRange: 200,
  trailChance: 10,
  weaveScale: 3,
  weaveMag: 3,
  lightning: 3.5,
  lightningLenght: 10,
  sprite: "diversetech-arrow",
  backColor: Color.valueOf("ffc999"),
  shrinkY: 0,
  
  init(b){
    if(!b)return;
    b.data = new Trail(10);
  },
  update(b){
    this.super$update(b);
    b.data.update(b.x, b.y);
  },
  draw(b){
    this.super$draw(b);
    b.data.draw(Color.valueOf("ffc999"), 4);
  }
});

const  bullet1  = extend(BasicBulletType, {
  damage: 60,
  speed: 7,
  lifetime: 145,
  drag: 0.035,
  height: 18,
  width: 18,
  collidesGround: false,
  collides: true,
  weaveScale: 3,
  weaveMag: 3,
  lightning: 3,
  lightningLenght: 8,
  trailEffect: Fx.artilleryTrail,
  trailChance: 6,
  fragBullets: 1,
  fragCone: 80,
  shrinkY: 0,
  sprite: "diversetech-smallArrow",
  backColor: Color.valueOf("ffc999"),
  fragBullet: fragB1
});

const turret = extend(ItemTurret, "magma", {
  shots: 3,
  range: 290,
  reloadTime: 125,
  shootShake: 5,
  recoilAmount: 2,
  shootCone: 45,
  spread: 30,
  inaccuracy: 15,
  shootType: bullet1,
  
  init(){
    this.ammo(
      Vars.content.getByName(ContentType.item, "diversetech-hyper-alloy"), bullet1
    );
    this.super$init();
  }
});

turret.buildType = () => extend(ItemTurret.ItemTurretBuild, turret, {});
