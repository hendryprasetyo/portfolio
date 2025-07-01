import logo from '/original.jpg'

const LogoNavbar = () => {
  return (
    <img
      src={logo}
      alt="logo"
      width={36}
      height={36}
      loading="eager"
      title="Hendry Picture"
      className="w-9 h-9 rounded-full"
    />
  )
}

export default LogoNavbar
