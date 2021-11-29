import resources from "./resources"
import { videoData } from "./modules/videoData"
import { basicPicture } from "./modules/pictures"
import { VideoFrame } from "./modules/videoFrame"
import * as utils from '@dcl/ecs-scene-utils'


Input.instance.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, ()=>{
  log('position', Camera.instance.position)
})


const building = new Entity()
building.addComponent(new GLTFShape('models/building.glb'))
engine.addEntity(building)


let livetexture = new VideoTexture(new VideoClip("https://dclstreams.com/hosted/live/nftbazl/index.m3u8"))
let livescreen = new Entity()
livescreen.addComponent(new GLTFShape("models/vidFrame1024x1024.glb"))
livescreen.addComponent( new Transform({ position: new Vector3(25.5, 7, 43.8), scale: new Vector3(0.6, 0.6, 0.5), rotation: Quaternion.Euler(-15, 0, 0)}))
livescreen.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(30,30,15), new Vector3(0, -7, -15)), {
  onCameraEnter: () => {
    videoMaterial.albedoTexture = livetexture
    videoMaterial.emissiveTexture = livetexture
    videoMaterial.emissiveIntensity = 0.8
    videoMaterial.emissiveColor = Color3.White()
    livetexture.playing = true
  },
  onCameraExit: () => {
    livetexture.playing = false
    let clip = new VideoTexture(new VideoClip(""))
    videoMaterial.albedoTexture = clip
    videoMaterial.emissiveTexture = clip
    videoMaterial.emissiveColor = Color3.Black()

  },
  enableDebug: false,
}))
engine.addEntity(livescreen)

const videoMaterial = new Material()
videoMaterial.roughness = 0.01
videoMaterial.albedoTexture = livetexture

const videoPlane = new Entity()
videoPlane.addComponent(new PlaneShape())
videoPlane.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 180, 0),
    scale: new Vector3(12.1, 7, 1),
  })
)
videoPlane.addComponent(videoMaterial)
videoPlane.setParent(livescreen)



// Videos
for (let i = 0; i < videoData.length; i++) {
    const videoFrame = new VideoFrame(
      videoData[i].frame,
      videoData[i].frameSize,
      videoData[i].still,
      videoData[i].thumbNail,
      videoData[i].video,
      videoData[i].transform,
      videoData[i].trigger,
      videoData[i].title!,
      videoData[i].artist!,
      videoData[i].link,
    )
  }

  



  let FIFI = new basicPicture('images/FIFI.jpg', 'images/FIFI_thumb.jpg', new Vector3(13.5,1.935,28.58), 0,  2.1, 1.575, 1.0, 'https://nft.elitium.io/Alea-Pinar-Du-Pre/FIFI', 'FIFI', 'by Alea Pinar Du Pre')
  let Solitude = new basicPicture('images/Solitude.jpg', 'images/Solitude_thumb.jpg', new Vector3(13.5,1.935,28.82), 180,  1.76, 2.2, 1.0, 'https://nft.elitium.io/Yugal-Adharani/Solitude', 'Solitude', 'by Yugai')
  let SheWoreCerulean = new basicPicture('images/SheWoreCerulean.jpg', 'images/SheWoreCerulean_thumb.jpg', new Vector3(7.5,2.62,26.28), -90,  2.5, 2.5, 1.0, 'https://nft.elitium.io/Gavin-Rain/She-wore-Cerulean', 'She Wore Cerulean', 'by Gavin Rain')
  let Marilyn = new basicPicture('images/Marilyn.jpg', 'images/Marilyn_thumb.jpg', new Vector3(42.28,2.62,36.82), 90,  2.5, 2.5, 1.0, 'https://nft.elitium.io/Mario-Henrique/Marilyn-Icon-Series-III', 'Marilyn, Icon Series III', 'by Mario Henrique')
  let Butterfly198 = new basicPicture('images/198.jpg', 'images/198_thumb.jpg', new Vector3(39.78,2.62,17.29), 90,  2.5, 2.5, 1.0, 'https://nft.elitium.io/Punk-Me-Tender/198', '198', 'by Punk Me Tender')
  let Butterfly199 = new basicPicture('images/199.jpg', 'images/199_thumb.jpg', new Vector3(39.78,2.62,13.63), 90,  2.5, 2.5, 1.0, 'https://nft.elitium.io/Punk-Me-Tender/199', '199', 'by Punk Me Tender')
  let Cash1 = new basicPicture('images/Cash1.jpg', 'images/Cash1_thumb.jpg', new Vector3(37.85,16.13,30.95), -90,  1.46, 2.2, 1.0, 'https://nft.elitium.io/Jordi-Molla/Cash-1', 'Cash 1', 'by Jordi Molla')
  let Cash2 = new basicPicture('images/Cash2.jpg', 'images/Cash2_thumb.jpg', new Vector3(37.85,16.13,27.85), -90,  1.46, 2.2, 1.0, 'https://nft.elitium.io/Jordi-Molla/Cash-2', 'Cash 2', 'by Jordi Molla')
  let NotTodayDiego = new basicPicture('images/NotTodayDiego.jpg', 'images/NotTodayDiego_thumb.jpg', new Vector3(36.295,16.13,18.725), 90,  1.69, 2.2, 1.0, 'https://nft.elitium.io/Ricardo-Cornejo/NOT-TODAY-DIEGO', 'NOT TODAY DIEGO', 'by Ricardo Cornejo')
  let Fearless = new basicPicture('images/Fearless.jpg', 'images/Fearless_thumb.jpg', new Vector3(36.295,16.13,15.425), 90,  1.815, 2.2, 1.0, 'https://nft.elitium.io/Ricardo-Cornejo/FEARLESS', 'FEARLESS', 'by Ricardo Cornejo')
  let FuckMoneyBuyCrypto = new basicPicture('images/FuckMoneyBuyCrypto.jpg', 'images/FuckMoneyBuyCrypto_thumb.jpg', new Vector3(9.8,16.13,12.5), -90,  2.13, 2.2, 1.0, 'https://nft.elitium.io/ZMK/FUCK-MONEY-BUY-CRYPTO-2021', 'FUCK MONEY BUY CRYPTO 2012', 'by ZMK')
  let YUMEPink = new basicPicture('images/YUMEPink.jpg', 'images/YUMEPink_thumb.jpg', new Vector3(9.57,16.13,15.8), 90,  1.93, 2.2, 1.0, 'https://nft.elitium.io/Daniel-Mazzone/YUME-Pink', 'YUME Pink', 'by Daniel Mazzone')
  let BummyLove = new basicPicture('images/BummyLove.jpg', 'images/BummyLove_thumb.jpg', new Vector3(9.57,16.13,12.5), 90,  2.2, 2.2, 1.0, 'https://nft.elitium.io/Eddy-Bogaert/Bummy-Love', 'Bummy Love', 'by Eddy Bogaert')

  
