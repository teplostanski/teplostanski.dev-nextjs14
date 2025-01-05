const Footer = () => {
  let currentYear = new Date().getFullYear()

  return <footer>&copy; 2022-{currentYear}</footer>
}

export default Footer
