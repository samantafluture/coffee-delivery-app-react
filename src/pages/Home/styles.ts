import styled from 'styled-components'
import imageBackground from '../../assets/banner-background.png'

export const HomeContainer = styled.main``

export const InfoContainerBackground = styled.div`
	background-image: url(${imageBackground});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
  
  width: 100%;
  height: 100%;
`

export const InfoContainer = styled.div`
	height: 100%;

	border: 1px solid red;

	display: flex;
  gap: 3.5rem;
	padding: 5.875rem 0;
  
  background: transparent;
  backdrop-filter: blur(80px); 
`

export const InfoText = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    color: ${props => props.theme['base-title']};
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.9rem;
  }
  
  h2 {
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
  }
  
  span {
    line-height: 1.3rem;
    margin-left: 0.75rem;
  }

`