import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import Thumbnails from '../UI/Thumbnails'

const ProductGalleryThumbnails = ({ featuredimage }) => {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const image = getImage(featuredimage)

  return (
    <Container>
      {!image ? (
        <ImgContainer>
          <NoImage>
            <p>No Image</p>
          </NoImage>
        </ImgContainer>
      ) : (
        <ImgContainer>
          <GatsbyImage
            image={image}
            objectFit="cover"
            objectPosition="50% 50%"
            key={image.id}
          />
        </ImgContainer>
      )}
    </Container>
  )

  // if there is more then 1 image activate this code
  // return (

  //   <Container>
  //     {productimages.length === 0 ? (
  //       <ImgContainer>
  //         <NoImage>
  //           <p>No Image</p>
  //         </NoImage>
  //       </ImgContainer>
  //     ) : productimages &&
  //       productimages[currentImageIndex] &&
  //       productimages.length === 1 ? (
  //       <ImgContainer>
  //         <Image
  //           image={
  //             productimages[currentImageIndex].localFile.childImageSharp.fluid
  //           }
  //           objectFit="cover"
  //           objectPosition="50% 50%"
  //           key={productimages[currentImageIndex].id}
  //         />
  //       </ImgContainer>
  //     ) : (
  //       <>
  //         <ImgContainer>
  //           {productimages.map((image, index) => (
  //             <Span
  //               role="menuitem"
  //               key={image.id}
  //               tabIndex={0}
  //               active={index === currentImageIndex}
  //             >
  //               <Image
  //                 image={image.localFile.childImageSharp.fluid}
  //                 key={image.id}
  //                 objectFit="cover"
  //                 objectPosition="50% 50%"
  //               />
  //             </Span>
  //           ))}
  //         </ImgContainer>
  //         <Thumbnails
  //           size={productimages}
  //           indexNum={currentImageIndex}
  //           onClick={(num) => setCurrentImageIndex(num)}
  //         />
  //       </>
  //     )}
  //   </Container>
  // )
}

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
`

const ImgContainer = styled.div`
  display: grid;
  width: 90vw;
  height: 90vw;
  overflow: hidden;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 35vw;
    height: 35vw;
    max-height: 400px;
    max-width: 400px;
  }
`

// const Span = styled.span`
//   width: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   opacity: ${(props) => (props.active ? '1' : '0')};
//   transition: ${({ theme }) => theme.transition};
// `

const NoImage = styled.div`
  display: grid;
  background: ${({ theme }) => theme.color.goldGradient};
  justify-content: center;
  align-items: center;
  p {
    color: ${({ theme }) => theme.color.positive};
  }
`

export default ProductGalleryThumbnails
