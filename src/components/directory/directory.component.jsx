// styles
import './directory.styles.scss'

// components
import DirectoryItem from "../directory-item/directory-item.component"

const categories = [
  {
    id: 1,
    title: "Hats",
    imgURL: "https://i.ibb.co/cvpntL1/hats.png",
    route: 'shop/hats'

  },
  {
    id: 2,
    title: "Jackets",
    imgURL: "https://i.ibb.co/px2tCc3/jackets.png",
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: "Sneakers",
    imgURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: "Womens",
    imgURL: "https://i.ibb.co/GCCdy8t/womens.png",
    route: 'shop/womens'
  },
  {
    id: 5,
    title: "Mens",
    imgURL: "https://i.ibb.co/R70vBrQ/men.png",
    route: 'shop/mens'
  }
]

export default function Directory() {

  return (
    <div className='directory-container'>
        {categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
        ))}
    </div>
  )
}
