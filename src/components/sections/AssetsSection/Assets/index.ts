import { $ } from "@utils/selector"
import Image from "./Image"

interface ImageData {
  id: string
  author: string
}

const construcPexelImageUrl = ({
  id,
  author
}: {
  id: string
  author: string
}) => {
  const url = "https://images.pexels.com/photos"
  return `${url}/${id}/pexels-photo-${id}.jpeg?cs=srgb&dl=pexels-${author}-${id}.jpg&fm=jpg`
}

const images: ImageData[] = [
  {
    id: "3608263",
    author: "laura-the-explaura"
  },
  { id: "9713163", author: "eriks-cistovs" },
  { id: "146083", author: "flickr" },
  {
    id: "1034662",
    author: "jiarong-deng"
  }
]
export default class Assets implements SectionChild {
  public self: HTMLDivElement
  public updater?: NodeJS.Timer
  static className = "assets"

  constructor() {
    this.self = this.template()
    setTimeout(() => {
      $(document.documentElement, '[href="#assets"]').click()
    }, 1000)
  }

  private template() {
    const assets = document.createElement("div")
    assets.classList.add(Assets.className)

    const picture = new Image({
      sources: [
        {
          mediaQuery: "(min-width: 600px)",
          srcset: construcPexelImageUrl(images[1])
        },
        {
          mediaQuery: "(min-width: 500px)",
          srcset: construcPexelImageUrl(images[2])
        },
        {
          mediaQuery: "(min-width: 400px)",
          srcset: construcPexelImageUrl(images[3])
        }
      ],
      src: construcPexelImageUrl(images[0]),
      className: "asset-image__img",
      alt: "image"
    })

    assets.append(picture)

    return assets
  }
}
