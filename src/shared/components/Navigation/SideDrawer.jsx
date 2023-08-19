import "./Css/SideDrawer.css"


const SideDrawer = ({children}) => {
  return (
    <aside className="side-drawer">{children}</aside>
  )
}
export default SideDrawer