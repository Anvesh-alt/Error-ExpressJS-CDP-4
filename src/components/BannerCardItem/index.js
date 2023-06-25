import './index.css'

const BannerCardIteam = props => {
  const {details} = props
  const {headerText, description, className} = details
  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>Show More</button>
    </li>
  )
}

export default BannerCardIteam
