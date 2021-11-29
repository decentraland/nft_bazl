import * as utils from "@dcl/ecs-scene-utils"
import * as ui from '@dcl/ui-scene-utils'

export class VideoFrame extends Entity {
  public videoTexture: VideoTexture

  constructor(model: GLTFShape, frameSize: Vector3, public texture: Texture, thumbNail: string, clip: VideoClip, transform: Transform, trigger: utils.TriggerBoxShape, title: string, artist: string, link?: string ) {
    super()
    engine.addEntity(this)
    this.addComponent(model)
    this.addComponent(clip)
    this.addComponent(transform)
    

     //Create texture
    const video = clip
    this.videoTexture = new VideoTexture(video)
      this.videoTexture.loop = true


    const videoMaterial = new Material()
    videoMaterial.roughness = 0.01
    videoMaterial.albedoTexture = texture

    const videoPlane = new Entity()
    videoPlane.addComponent(new PlaneShape())
    videoPlane.addComponent(
      new Transform({
        position: new Vector3(0, 0, 0),
        rotation: Quaternion.Euler(0, 180, 0),
        scale: frameSize,
      })
    )
    videoPlane.addComponent(videoMaterial)
    videoPlane.setParent(this)

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
        log('Yes')
        prompt.hide()
        if(link){
          openExternalURL(link)
        }
      },
      ui.ButtonStyles.RED
    )
    
    let button2 = prompt.addButton(
      'Close',
      -90,
      -210,
      () => {
        log('Bezarja')
        prompt.hide()
      },
      ui.ButtonStyles.DARK
    )
    videoPlane.addComponent(
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

    this.addComponent(
      new utils.TriggerComponent(trigger, {
        onCameraEnter: () => {
          videoMaterial.albedoTexture = this.videoTexture
          videoMaterial.emissiveTexture = this.videoTexture
          videoMaterial.emissiveIntensity = 0.8
          videoMaterial.emissiveColor = Color3.White()
          this.videoTexture.playing = true
        },
        onCameraExit: () => {
          videoMaterial.albedoTexture = texture
          videoMaterial.emissiveColor = Color3.Black()
          this.videoTexture.playing = false
        },
        enableDebug: false,
      })
    )
  }
}