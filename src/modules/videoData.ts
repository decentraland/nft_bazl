import * as utils from "@dcl/ecs-scene-utils"

export const videoData = [

  // I Love You So Fucking Much
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/ILoveYouSoFuckingMuch.jpg"),
    thumbNail: 'images/ILoveYouSoFuckingMuch_thumb.jpg',
    video: new VideoClip("https://player.vimeo.com/external/650934496.m3u8?s=0faaf87e0cfd9a5750f123d2947307b962cdbb97"),
    transform: new Transform({ position: new Vector3(6.4,2.62,6.78), scale: new Vector3(3, 1.68, 1), rotation: Quaternion.Euler(0,-90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(2.5,-0.5, 0)),
    title: "I Love You So Fucking Much",
    artist: 'by Andre Monet',
    link: "https://nft.elitium.io/Andre-Monet/I-love-you-so-fucking-much",
  },
  
  // Attraction
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/Attraction.jpg"),
    thumbNail: ('images/Attraction_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934013.m3u8?s=14920c0170eec6c240524bc9b446180eb8438d70"),
    transform: new Transform({ position: new Vector3(6.4,2.62,10.5), scale: new Vector3(3, 1.68, 1), rotation: Quaternion.Euler(0,-90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(2.5,-0.5, 0)),
    title: "Attraction",
    artist: 'by Andre Monet',
    link: "https://nft.elitium.io/Andre-Monet/Attraction",
  },

  // DogeTheDog
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/DogeTheDog.jpg"),
    thumbNail: ('images/DogeTheDog_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934146.m3u8?s=50947ae33092b28e47ab5dc43ff3a536c97d8e65"),
    transform: new Transform({ position: new Vector3(6.4,2.62,14.22), scale: new Vector3(3, 3, 1), rotation: Quaternion.Euler(0,-90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(2.5,-0.5, 0)),
    title: "Doge The Dog",
    artist: 'by Dimitri Likissas',
    link: "https://nft.elitium.io/dimitri-likissas/Doge-The-Dog-31x31-dots",
  },

  // Carys III
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/Carys_III.jpg"),
    thumbNail: ('images/Carys_III_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934044.m3u8?s=1e8e918ed8483ed7d3b43d3cc17d4c5dd736eb9f"),
    transform: new Transform({ position: new Vector3(12.41,1.935,16.41), scale: new Vector3(2.5, 2.5, 1), rotation: Quaternion.Euler(0,0,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(3, 4, 5), new Vector3(0,-0.5, -2.5)),
    title: "Carys III",
    artist: 'by Kasseus',
    link: "https://nft.elitium.io/Kasseus/Carys-III-digital",
  },

  // Evita_I
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/Evita_I.jpg"),
    thumbNail: ('images/Evita_I_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934273.m3u8?s=077588924531f14525ff15aa36590b4c3f3b4cfc"),
    transform: new Transform({ position: new Vector3(15.71,1.935,16.41), scale: new Vector3(2.07, 2.8, 1), rotation: Quaternion.Euler(0,0,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(3, 4, 5), new Vector3(0,-0.5, -2.5)),
    title: "Evita I",
    artist: 'by Kasseus',
    link: "https://nft.elitium.io/Kasseus/Evita-I",
  },

  // Evolution
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/Evolution.jpg"),
    thumbNail: ('images/Evolution_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934306.m3u8?s=8a6378db9694baff11f950a94bda1195350ce8a2"),
    transform: new Transform({ position: new Vector3(12.31,1.935,16.65), scale: new Vector3(2.8, 1.56, 1), rotation: Quaternion.Euler(0,180,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(3, 4, 5), new Vector3(0,-0.5, 2.5)),
    title: "Evolution",
    artist: 'by Chance Cooper',
    link: "https://nft.elitium.io/Chance-Cooper/Evolution-digital",
  },

  // DevilRanOutOfGas
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/DevilRanOutOfGas.jpg"),
    thumbNail: ('images/DevilRanOutOfGas_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934122.m3u8?s=77a0cb182cce4b7c06c9dcb9ee35392d6f5d5ec6"),
    transform: new Transform({ position: new Vector3(15.71,1.935,16.65), scale: new Vector3(2.8, 1.56, 1), rotation: Quaternion.Euler(0,180,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(3, 4, 5), new Vector3(0,-0.5, 2.5)),
    title: "Devil Ran Out Of Gas",
    artist: 'by Chance Cooper',
    link: "https://nft.elitium.io/Chance-Cooper/Devil-Ran-Out-Of-Gas-digital",
  },

  // HoneyBunny
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/HoneyBunny.jpg"),
    thumbNail: ('images/HoneyBunny_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934457.m3u8?s=f4612008a5398ceef86d464fcd7540faca1eddca"),
    transform: new Transform({ position: new Vector3(16.8,1.935,28.58), scale: new Vector3(2.5, 2.5, 1), rotation: Quaternion.Euler(0,0,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(3, 4, 5), new Vector3(0,-0.5, -2.5)),
    title: "Honey Bunny",
    artist: 'by Alea Pinar Du Pre',
    link: "https://nft.elitium.io/Alea-Pinar-Du-Pre/Honey-Bunny",
  },

  // Nightcall
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/Nightcall.jpg"),
    thumbNail: ('images/Nightcall_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934648.m3u8?s=eb503b1c6a7d06cd3573c1bc350e4c912a5bae56"),
    transform: new Transform({ position: new Vector3(16.8,1.935,28.82), scale: new Vector3(1.56, 2.8, 1), rotation: Quaternion.Euler(0,180,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(3, 4, 5), new Vector3(0,-0.5, 2.5)),
    title: "Nightcall",
    artist: 'by Yugai',
    link: "https://nft.elitium.io/Yugal-Adharani/Nightcall",
  },

  // Dalynn
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/Dalynn.jpg"),
    thumbNail: ('images/Dalynn_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934077.m3u8?s=15630c3d9c790ed3b52a76ecfe129e8dc6a576e5"),
    transform: new Transform({ position: new Vector3(15.75,1.935,41.92), scale: new Vector3(2.07, 2.69, 1), rotation: Quaternion.Euler(0,0,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(3, 4, 5), new Vector3(0,-0.5, -2.5)),
    title: "Dalynn",
    artist: 'by Warbb',
    link: "https://nft.elitium.io/Warbb/Robbin-Snijders",
  },

  // SignOfTheTimes
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/SignOfTheTimes.jpg"),
    thumbNail: ('images/SignOfTheTimes_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934673.m3u8?s=4d56e92348442009002902a8b2b9a16611aff9d9"),
    transform: new Transform({ position: new Vector3(19.05,1.935,41.92), scale: new Vector3(2.07, 2.69, 1), rotation: Quaternion.Euler(0,0,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(3, 4, 5), new Vector3(0,-0.5, -2.5)),
    title: "Sign Of The Times #1 LEO",
    artist: 'by Warbb',
    link: "https://nft.elitium.io/Warbb/Sign-of-the-times-1-LEO",
  },

  // Kanagawa
    {
      frame: new GLTFShape("models/frame.glb"),
      frameSize: new Vector3(1, 1, 1),
      still: new Texture("images/Kanagawa.jpg"),
      thumbNail: ('images/Kanagawa_thumb.jpg'),
      video: new VideoClip("https://player.vimeo.com/external/650934564.m3u8?s=af1bb36ea0bfcd0e1e5da470d168796af8853632"),
      transform: new Transform({ position: new Vector3(32.05,1.935,43.22), scale: new Vector3(2.8, 1.56, 1), rotation: Quaternion.Euler(0,0,0) }),
      trigger: new utils.TriggerBoxShape(new Vector3(3, 4, 5), new Vector3(0,-0.5, -2.5)),
      title: "Kanagawa",
      artist: 'by Jisbar',
      link: "https://nft.elitium.io/Jisbar/Kanagawa-digital",
    },
  
  // LuxePicasso
  {
      frame: new GLTFShape("models/frame.glb"),
      frameSize: new Vector3(1, 1, 1),
      still: new Texture("images/LuxePicasso.jpg"),
      thumbNail: ('images/LuxePicasso_thumb.jpg'),
      video: new VideoClip("https://player.vimeo.com/external/650934631.m3u8?s=52ff3827410df4aa3e2e01c6bd301d1a347d9fab"),
      transform: new Transform({ position: new Vector3(35.45,1.935,43.22), scale: new Vector3(2.8, 1.56, 1), rotation: Quaternion.Euler(0,0,0) }),
      trigger: new utils.TriggerBoxShape(new Vector3(3, 4, 5), new Vector3(0,-0.5, -2.5)),
      title: "Luxe Picasso",
      artist: 'by Jisbar',
      link: "https://nft.elitium.io/Jisbar/Luxe-Picasso-digital",
  },

  // IdentityCrisis
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/IdentityCrisis.jpg"),
    thumbNail: ('images/IdentityCrisis_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934464.m3u8?s=c945737008a252f1006c31c53a24654d83e9fc4b"),
    transform: new Transform({ position: new Vector3(7.5,2.62,18.84), scale: new Vector3(3, 3, 1), rotation: Quaternion.Euler(0,-90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(2.5,-0.5, 0)),
    title: "Identity Crisis",
    artist: 'by Hijack',
    link: "https://nft.elitium.io/Hijack/Identity-Crisis",
  },

  // GiveMeSpace
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/GiveMeSpace.jpg"),
    thumbNail: ('images/GiveMeSpace_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934408.m3u8?s=990b3cf21ed56a2d1e9d3a79f053b73f0009a68e"),
    transform: new Transform({ position: new Vector3(7.5,2.62,22.56), scale: new Vector3(3, 3, 1), rotation: Quaternion.Euler(0,-90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(2.5,-0.5, 0)),
    title: "Give Me Space",
    artist: 'by Hijack',
    link: "https://nft.elitium.io/Hijack/Give-Me-Space",
  },

  // FIXTSHI921
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/FIXTSHI921.jpg"),
    thumbNail: ('images/FIXTSHI921_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934313.m3u8?s=f80c0d40f1030ccfd26889c95542e4787938b02b"),
    transform: new Transform({ position: new Vector3(8.52,2.62,30.7), scale: new Vector3(2.484, 3.228, 1), rotation: Quaternion.Euler(0,-90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(2.5,-0.5, 0)),
    title: "FIXTSHI 921()",
    artist: 'by Kilmany Jo',
    link: "https://nft.elitium.io/Kilmany-Jo-Liversage/FIXTSHI-921()",
  },

  // EQUAE721
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/EQUAE721.jpg"),
    thumbNail: ('images/EQUAE721_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934259.m3u8?s=e56753198e3ae83db373ab8c7bf382b31401f538"),
    transform: new Transform({ position: new Vector3(8.52,2.62,34.2), scale: new Vector3(3, 3, 1), rotation: Quaternion.Euler(0,-90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(2.5,-0.5, 0)),
    title: "EQUAE721()",
    artist: 'by Kilmany Jo',
    link: "https://nft.elitium.io/Kilmany-Jo-Liversage/EQUAE721()",
  },

  // DREAMLAND
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/DREAMLAND.jpg"),
    thumbNail: ('images/DREAMLAND_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934164.m3u8?s=2e90578325d1fb3852ee5e4bfc3bb07fce35645a"),
    transform: new Transform({ position: new Vector3(8.52,2.62,38.25), scale: new Vector3(3.*1.2, 1.68*1.2, 1), rotation: Quaternion.Euler(0,-90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(2.5,-0.5, 0)),
    title: "DREAMLAND",
    artist: 'by Abhay Sehgal',
    link: "https://nft.elitium.io/Abhay-Sehgal/DREAMLAND",
  },

  // Somnium9SeriesVII
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/Somnium9SeriesVII.jpg"),
    thumbNail: ('images/Somnium9SeriesVII_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934706.m3u8?s=eff6061d9d98bec6363c4e971bea83f648c844e9"),
    transform: new Transform({ position: new Vector3(42.28,2.62,40.48), scale: new Vector3(3, 3, 1), rotation: Quaternion.Euler(0,90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(-2.5,-0.5, 0)),
    title: "Somnium #9 Series VII",
    artist: 'by Mario Henrique',
    link: "https://nft.elitium.io/Mario-Henrique/Somnium-9-Series-VII",
  },

  // Fusion
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/Fusion.jpg"),
    thumbNail: ('images/Fusion_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934378.m3u8?s=bfa84b2256189b6e0eeb1a401d78ca58c0352739"),
    transform: new Transform({ position: new Vector3(42.28,2.62,33.11), scale: new Vector3(3, 3, 1), rotation: Quaternion.Euler(0,90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(-2.5,-0.5, 0)),
    title: "Fusion",
    artist: 'by Genarro Barci',
    link: "https://nft.elitium.io/Gennaro-Barci/Fusion",
  },

  // FreddyStuckInAMoment
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/FreddyStuckInAMoment.jpg"),
    thumbNail: ('images/FreddyStuckInAMoment_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934341.m3u8?s=fbf01d740e9c2fc37362d3f83eb189770a3f58f7"),
    transform: new Transform({ position: new Vector3(41.12,2.62,28.88), scale: new Vector3(2.07*1.3, 2.8*1.3, 1), rotation: Quaternion.Euler(0,90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(-2.5,-0.5, 0)),
    title: "Freddie - Stuck In A Moment",
    artist: 'by Pepe Bratano',
    link: "https://nft.elitium.io/Pepe-Bratano/Freddie-Stuck-in-a-moment",
  },

  // GodessOfBasketballLove
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/GodessOfBasketballLove.jpg"),
    thumbNail: ('images/GodessOfBasketballLove_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934436.m3u8?s=d33d3bfddae9751cf877a891ec1345f0679ea6e4"),
    transform: new Transform({ position: new Vector3(41.12,2.62,25.22), scale: new Vector3(2.07*1.3, 2.8*1.3, 1), rotation: Quaternion.Euler(0,90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(-2.5,-0.5, 0)),
    title: "Godess Of (Basketball) Love",
    artist: 'by Pepe Bratano',
    link: "https://nft.elitium.io/Pepe-Bratano/Godess-of-(basketball)-love",
  },

  // LaBourgeoisie3
  {
      frame: new GLTFShape("models/frame.glb"),
      frameSize: new Vector3(1, 1, 1),
      still: new Texture("images/LaBourgeoisie3.jpg"),
      thumbNail: ('images/LaBourgeoisie3_thumb.jpg'),
      video: new VideoClip("https://player.vimeo.com/external/650934590.m3u8?s=ad17e2b6043a1528a1977aaa49a6a8a7cad1fa0a"),
      transform: new Transform({ position: new Vector3(41.12,2.62,21.51), scale: new Vector3(3, 2.37, 1), rotation: Quaternion.Euler(0,90,0) }),
      trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(-2.5,-0.5, 0)),
      title: "La Bourgeoisie #3",
      artist: 'by Richard Bernardin',
      link: "https://nft.elitium.io/Richard-Bernardin/La-Bourgeoisie-3-digital",
  },

  // MrSpoonDJ
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/MrSpoonDJ.jpg"),
    thumbNail: ('images/MrSpoonDJ_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934638.m3u8?s=532e849066c03a4c31d80134b6f922e36516c1ef"),
    transform: new Transform({ position: new Vector3(39.78,2.62,9.92), scale: new Vector3(3, 3, 1), rotation: Quaternion.Euler(0,90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(-2.5,-0.5, 0)),
    title: "Mr Spoon DJ",
    artist: 'by Simone Dauria',
    link: "https://nft.elitium.io/Simone-Dauria/Mr-Spoon-DJ",
  },

  // Transformation
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/Transformation.jpg"),
    thumbNail: ('images/Transformation_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934715.m3u8?s=98aeda4d381a7008002033e0d13fefb10f5269d2"),
    transform: new Transform({ position: new Vector3(36.525,16.13,18.725), scale: new Vector3(2.5, 2.5, 1), rotation: Quaternion.Euler(0,-90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(2.5,-0.5, 0)),
    title: "Transformation",
    artist: 'by Johnny Gloom',
    link: "https://nft.elitium.io/Johnny-Gloom/Transformation",
  },

  // Enigma
    {
      frame: new GLTFShape("models/frame.glb"),
      frameSize: new Vector3(1, 1, 1),
      still: new Texture("images/Enigma.jpg"),
      thumbNail: ('images/Enigma_thumb.jpg'),
      video: new VideoClip("https://player.vimeo.com/external/650934184.m3u8?s=28e5a2551f8439376eef6affc16a2ca5cd4e1fb6"),
      transform: new Transform({ position: new Vector3(36.525,16.13,15.425), scale: new Vector3(2.5, 2.5, 1), rotation: Quaternion.Euler(0,-90,0) }),
      trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(2.5,-0.5, 0)),
      title: "Enigma",
      artist: 'by Johnny Gloom',
      link: "https://nft.elitium.io/Johnny-Gloom/Enigma",
    },

  // BeachBucks
    {
      frame: new GLTFShape("models/frame.glb"),
      frameSize: new Vector3(1, 1, 1),
      still: new Texture("images/BeachBucks.jpg"),
      thumbNail: ('images/BeachBucks_thumb.jpg'),
      video: new VideoClip("https://player.vimeo.com/external/650934031.m3u8?s=e58a356b6d50ac17b4e2c399863e6b0b2d83993a"),
      transform: new Transform({ position: new Vector3(37.62,16.13,31.05), scale: new Vector3(2.5, 2.5, 1), rotation: Quaternion.Euler(0,90,0) }),
      trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(-2.5,-0.5, 0)),
      title: "Beach Bucks",
      artist: 'by Paul Rousso',
      link: "https://nft.elitium.io/Paul-Rousso/Beach-Bucks",
    },

  // CircusRide
    {
      frame: new GLTFShape("models/frame.glb"),
      frameSize: new Vector3(1, 1, 1),
      still: new Texture("images/CircusRide.jpg"),
      thumbNail: ('images/CircusRide_thumb.jpg'),
      video: new VideoClip("https://player.vimeo.com/external/650934060.m3u8?s=90e764d80d0b98271b4edadf33703b2ccb7e1c2e"),
      transform: new Transform({ position: new Vector3(37.62,16.13,27.75), scale: new Vector3(2.5, 2, 1), rotation: Quaternion.Euler(0,90,0) }),
      trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(-2.5,-0.5, 0)),
      title: "Circus Ride",
      artist: 'by Paul Rousso',
      link: "https://nft.elitium.io/Paul-Rousso/Circus-Ride",
    },

  // LazyFreakyMouseOversees
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/LazyFreakyMouseOversees.jpg"),
    thumbNail: ('images/LazyFreakyMouseOversees_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934591.m3u8?s=8d5a1c4d38a90b6a716471b7d33de08c3e659460"),
    transform: new Transform({ position: new Vector3(12.45,16.13,25.675), scale: new Vector3(2.2, 2.5, 1), rotation: Quaternion.Euler(0,-90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(2.5,-0.5, 0)),
    title: "Lazy Freaky Mouse 'over-sees'",
    artist: 'by Fidia',
    link: "https://nft.elitium.io/Fidia/Strange-Mickey",
  },

  // DFTDonaldFuckTransition
   {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/DFTDonaldFuckTransition.jpg"),
    thumbNail: ('images/DFTDonaldFuckTransition_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934133.m3u8?s=2dce45addb2a370bbec400cb1d785aead5ad00e4"),
    transform: new Transform({ position: new Vector3(12.45,16.13,22.375), scale: new Vector3(2.2, 2.5, 1), rotation: Quaternion.Euler(0,-90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(2.5,-0.5, 0)),
    title: "DFT: Donald Fuck Transition",
    artist: 'by Fidia',
    link: "https://nft.elitium.io/Fidia/Donald-Fuck",
  }, 

  // IsThisYourCar
   {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/IsThisYourCar.jpg"),
    thumbNail: ('images/IsThisYourCar_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934521.m3u8?s=d12fef12764fc08bb158993d403eee539fdac3c9"),
    transform: new Transform({ position: new Vector3(9.8,16.13,15.8), scale: new Vector3(2.5, 1.7, 1), rotation: Quaternion.Euler(0,-90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(2.5,-0.5, 0)),
    title: "Is This Your Car",
    artist: 'by Cecile Plaisance',
    link: "https://nft.elitium.io/Cecile-Plaisance/Is-this-your-car",
  }, 

  // LivingLife
   {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/LivingLife.jpg"),
    thumbNail: ('images/LivingLife_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934609.m3u8?s=69bdbd292b60b3c0cc68d6a2ea0b91a8744d02b8"),
    transform: new Transform({ position: new Vector3(12.22,16.13,25.675), scale: new Vector3(2.75, 2.42, 1), rotation: Quaternion.Euler(0,90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(-2.5,-0.5, 0)),
    title: "Living Life",
    artist: 'by SUPER BUDDHA',
    link: "https://nft.elitium.io/SUPER-BUDDHA/Living-Life",
  }, 

  // PointNShoot
   {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/PointNShoot.jpg"),
    thumbNail: ('images/PointNShoot_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/650934659.m3u8?s=8e94a539e4c8919841e414630087804a0f39fa8c"),
    transform: new Transform({ position: new Vector3(12.22,16.13,22.375), scale: new Vector3(2.5, 2.5, 1), rotation: Quaternion.Euler(0,90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(-2.5,-0.5, 0)),
    title: "Point N' Shoot by shoeuzi x Okaymojo",
    artist: 'by Shoeuzi',
    link: "https://nft.elitium.io/Shoeuzi/Point-N-Shoot-by-shoeuzi-x-Okaymojo",
  },

  //Financial Disruption
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/FinancialDisruption.jpg"),
    thumbNail: ('images/FinancialDisruption_thumb.jpg'),
    video: new VideoClip("https://player.vimeo.com/external/662221196.m3u8?s=4b38af9a4ebf9c80bf4dca74735b1bd3c556fbee"),
    transform: new Transform({position: new Vector3(29.3,1.9,32.91), rotation: Quaternion.Euler(0,180,0), scale: new Vector3(4.6,2.57,1)}),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 4), new Vector3(0,-0.5, 2)),
    title: "Financial Disruption",
    artist: 'by TRAN$PARENT',
    link: "https://nft.elitium.io/Transparent/Financial-Disruption",
  },


   
]