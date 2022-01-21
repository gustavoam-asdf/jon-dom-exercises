import Image from "./Image"
import Video from "./Video"
import videos from "assets/videos.json"

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
  }

  private template() {
    const assets = document.createElement("div")
    assets.classList.add(Assets.className)

    const picture = new Image({
      sources: [
        {
          mediaQuery: "screen and (min-width: 800px)",
          src: construcPexelImageUrl(images[1])
        },
        {
          mediaQuery: "screen and (min-width: 600px)",
          src: construcPexelImageUrl(images[2])
        },
        {
          mediaQuery: "screen and (min-width: 400px)",
          src: construcPexelImageUrl(images[3])
        }
      ],
      src: construcPexelImageUrl(images[0]),
      className: "asset-image__img",
      alt: "image"
    })

    const video = new Video({
      src: videos[0].url,
      sources: [
        {
          mediaQuery: videos[1].mediaQuery,
          matcher: window.matchMedia(videos[1].mediaQuery),
          src: videos[1].url
        },
        {
          mediaQuery: videos[2].mediaQuery,
          matcher: window.matchMedia(videos[2].mediaQuery),
          src: videos[2].url
        },
        {
          mediaQuery: videos[3].mediaQuery,
          matcher: window.matchMedia(videos[3].mediaQuery),
          src: videos[3].url
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
