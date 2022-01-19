import { $ } from "@utils/selector"
import Image from "./Image"
import Video from "./Video"
import video1Path from "/assets/videos/video-1.mp4"
import video2Path from "/assets/videos/video-2.mp4"
import video3Path from "/assets/videos/video-3.mp4"

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
          src: construcPexelImageUrl(images[1])
        },
        {
          mediaQuery: "(min-width: 500px)",
          src: construcPexelImageUrl(images[2])
        },
        {
          mediaQuery: "(min-width: 400px)",
          src: construcPexelImageUrl(images[3])
        }
      ],
      src: construcPexelImageUrl(images[0]),
      className: "asset-image__img",
      alt: "image"
    })

    const video = new Video({
      sources: [
        {
          mediaQuery: "screen and (min-device-width: 600px)",
          src: video1Path
        },
        {
          mediaQuery: "screen and (min-device-width: 500px)",
          src: video2Path
        },
        {
          mediaQuery: "screen and (min-device-width: 400px)",
          src: video3Path
        }
      ],
      controls: true,
      loop: true
    })

    assets.append(picture)
    assets.append(video)

    return assets
  }
}
