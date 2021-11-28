import * as utils from "@dcl/ecs-scene-utils"

export const videoData = [
  // TV STREAM
  {
    frame: new GLTFShape("models/vidFrame1024x1024.glb"),
    frameSize: new Vector3(12.1, 7, 1),
    still: new Texture("images/bazl_logo_white.png"),
    video: new VideoClip(""),
    transform: new Transform({ position: new Vector3(25.5, 7, 43.8), scale: new Vector3(0.6, 0.6, 0.5), rotation: Quaternion.Euler(-15, 0, 0)}),
    trigger: new utils.TriggerBoxShape(new Vector3(30,30,30), new Vector3(0, -7, 0)),
    link: "https://dclstreams.com/hosted/live/nftbazl/index.m3u8",
  },

  // I Love You So Fucking Much
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(1, 1, 1),
    still: new Texture("images/ILoveYouSoFuckingMuch.jpg"),
    thumbNail: ('images/ILoveYouSoFuckingMuch_thumb.jpg'),
    video: new VideoClip("videos/ILoveYouSoFuckingMuch.mp4"),
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
    video: new VideoClip("videos/Attraction.mp4"),
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
    video: new VideoClip("videos/DogeTheDog.mp4"),
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
    video: new VideoClip("videos/Carys_III.mp4"),
    transform: new Transform({ position: new Vector3(12.41,1.935,16.41), scale: new Vector3(2.5, 2.5, 1), rotation: Quaternion.Euler(0,0,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(0,-0.5, -2.5)),
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
    video: new VideoClip("videos/Evita_I.mp4"),
    transform: new Transform({ position: new Vector3(15.71,1.935,16.41), scale: new Vector3(2.07, 2.8, 1), rotation: Quaternion.Euler(0,0,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(0,-0.5, -2.5)),
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
    video: new VideoClip("videos/Evolution.mp4"),
    transform: new Transform({ position: new Vector3(12.31,1.935,16.65), scale: new Vector3(2.8, 1.56, 1), rotation: Quaternion.Euler(0,180,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(0,-0.5, 2.5)),
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
    video: new VideoClip("videos/DevilRanOutOfGas.mp4"),
    transform: new Transform({ position: new Vector3(15.71,1.935,16.65), scale: new Vector3(2.8, 1.56, 1), rotation: Quaternion.Euler(0,180,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(0,-0.5, 2.5)),
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
    video: new VideoClip("videos/HoneyBunny.mp4"),
    transform: new Transform({ position: new Vector3(16.8,1.935,28.58), scale: new Vector3(2.5, 2.5, 1), rotation: Quaternion.Euler(0,0,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(0,-0.5, -2.5)),
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
    video: new VideoClip("videos/Nightcall.mp4"),
    transform: new Transform({ position: new Vector3(16.8,1.935,28.82), scale: new Vector3(1.56, 2.8, 1), rotation: Quaternion.Euler(0,180,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(0,-0.5, 2.5)),
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
    video: new VideoClip("videos/Dalynn.mp4"),
    transform: new Transform({ position: new Vector3(15.75,1.935,41.92), scale: new Vector3(2.07, 2.69, 1), rotation: Quaternion.Euler(0,0,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(0,-0.5, -2.5)),
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
    video: new VideoClip("videos/SignOfTheTimes.mp4"),
    transform: new Transform({ position: new Vector3(19.05,1.935,41.92), scale: new Vector3(2.07, 2.69, 1), rotation: Quaternion.Euler(0,0,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(0,-0.5, -2.5)),
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
      video: new VideoClip("videos/Kanagawa.mp4"),
      transform: new Transform({ position: new Vector3(32.05,1.935,43.22), scale: new Vector3(2.8, 1.56, 1), rotation: Quaternion.Euler(0,0,0) }),
      trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(0,-0.5, -2.5)),
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
      video: new VideoClip("videos/LuxePicasso.mp4"),
      transform: new Transform({ position: new Vector3(35.45,1.935,43.22), scale: new Vector3(2.8, 1.56, 1), rotation: Quaternion.Euler(0,0,0) }),
      trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(0,-0.5, -2.5)),
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
    video: new VideoClip("videos/IdentityCrisis.mp4"),
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
    video: new VideoClip("videos/GiveMeSpace.mp4"),
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
    video: new VideoClip("videos/FIXTSHI921.mp4"),
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
    video: new VideoClip("videos/EQUAE721.mp4"),
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
    video: new VideoClip("videos/DREAMLAND.mp4"),
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
    video: new VideoClip("videos/Somnium9SeriesVII.mp4"),
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
    video: new VideoClip("videos/Fusion.mp4"),
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
    video: new VideoClip("videos/FreddyStuckInAMoment.mp4"),
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
    video: new VideoClip("videos/GodessOfBasketballLove.mp4"),
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
      video: new VideoClip("videos/LaBourgeoisie3.mp4"),
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
    video: new VideoClip("videos/MrSpoonDJ.mp4"),
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
    video: new VideoClip("videos/Transformation.mp4"),
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
      video: new VideoClip("videos/Enigma.mp4"),
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
      video: new VideoClip("videos/BeachBucks.mp4"),
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
      video: new VideoClip("videos/CircusRide.mp4"),
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
    video: new VideoClip("videos/LazyFreakyMouseOversees.mp4"),
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
    video: new VideoClip("videos/DFTDonaldFuckTransition.mp4"),
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
    video: new VideoClip("videos/IsThisYourCar.mp4"),
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
    video: new VideoClip("videos/LivingLife.mp4"),
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
    video: new VideoClip("videos/PointNShoot.mp4"),
    transform: new Transform({ position: new Vector3(12.22,16.13,22.375), scale: new Vector3(2.5, 2.5, 1), rotation: Quaternion.Euler(0,90,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5, 4, 3.5), new Vector3(-2.5,-0.5, 0)),
    title: "Point N' Shoot by shoeuzi x Okaymojo",
    artist: 'by Shoeuzi',
    link: "https://nft.elitium.io/Shoeuzi/Point-N-Shoot-by-shoeuzi-x-Okaymojo",
  },
   
]