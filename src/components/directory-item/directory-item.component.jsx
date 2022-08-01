import { useNavigate } from "react-router-dom"

import { DirectoryItemContainer, BackgroundImage, Body } from "./directory-item.styles"

export default function DirectoryItem({ category }) {
    const { title, imgURL, route } = category
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)

    return (
      <DirectoryItemContainer onClick={onNavigateHandler}>
          <BackgroundImage imgURL={imgURL} />
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
    </DirectoryItemContainer>
    )
}
