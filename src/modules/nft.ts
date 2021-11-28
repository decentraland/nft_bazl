// NFT class
export class NFT extends Entity {
  constructor(
    nft: NFTShape,
    transform: Transform,
  ) {
    super()
    this.addComponent(nft)
    this.addComponent(transform)
  }
}