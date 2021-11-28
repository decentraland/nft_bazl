import { NFT } from './nft'
import resources from "../resources"

// Sound
const sound = new Entity()
sound.addComponent(new Transform())
sound.getComponent(Transform).position = Camera.instance.position
sound.addComponent(new AudioSource(resources.sounds.infoPopUpOpen))
engine.addEntity(sound)

// Picture frames v2 styles
enum PictureFrameStyle {
  Classic = 0,
  Baroque_Ornament,
  Diamond_Ornament,
  Minimal_Wide,
  Minimal_Grey,
  Blocky,
  Gold_Edges,
  Gold_Carved,
  Gold_Wide,
  Gold_Rounded,
  Metal_Medium,
  Metal_Wide,
  Metal_Slim,
  Metal_Rounded,
  Pins,
  Minimal_Black,
  Minimal_White,
  Tape,
  Wood_Slim,
  Wood_Wide,
  Wood_Twigs,
  Canvas,
}