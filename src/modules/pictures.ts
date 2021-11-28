import { NFT } from "./nft"
import * as ui from '@dcl/ui-scene-utils'

export class basicPicture extends Entity{

  imageFile:string
  
  constructor(imageFile:string, thumbNail:string, position:Vector3, rotationAngle:number, scaleX:number, scaleY:number, scaleZ:number, linkURL:string, title:string, artist:string){
    super()
    this.addComponent(new Transform({
      position: new Vector3(position.x, position.y, position.z),
      rotation: Quaternion.Euler(0, rotationAngle, 180),
      scale: new Vector3(scaleX, scaleY, scaleZ)
    })) 

    this.imageFile = imageFile
    let imageTexture = new Texture(imageFile)

    let pictureMat = new Material()
    pictureMat.albedoTexture = imageTexture
    pictureMat.specularIntensity = 0
    pictureMat.metallic = 0
    pictureMat.roughness = 1

    this.addComponent(new PlaneShape())
    this.addComponent(pictureMat)
    engine.addEntity(this)

    let frame = new Entity()
    frame.addComponent(new Transform({
      position: new Vector3(0,0, 0.0),
      scale: new Vector3(1.2, 1.2, 1.0)

    }))
    frame.addComponent(new GLTFShape('models/frame.glb'))
    frame.setParent(this)

    let prompt = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE, 550,550,true)
    prompt.addText(title, 0, 225, Color4.Black(), 30)
    prompt.addText(artist, 0, 195, Color4.Black(),20)
    
    
    prompt.addIcon(
        thumbNail,
        0,0,300,300
        )
    
    let button1 = prompt.addButton(
      'Visit',
      90,
      -210,
      () => {
        log('Visit')
        prompt.hide()
        openExternalURL(linkURL)
      },
      ui.ButtonStyles.RED
    )
    
    let button2 = prompt.addButton(
      'Close',
      -90,
      -210,
      () => {
        log('Close')
        prompt.hide()
      },
      ui.ButtonStyles.DARK
    )
    this.addComponent(
      new OnPointerDown(
        () => {
          //openExternalURL(linkURL)
          prompt.show()
        },
        {
          button: ActionButton.ANY,
          showFeedback: true,
          hoverText: "More Info",
          distance: 15,
        }
      )
    )
  }
}

//This is how the frames enum will look like.
//Classic being the keyword for the picture frame we are using right now
export enum PictureFrameStyle {
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

