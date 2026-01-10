
import logo from '../images/chef-claude-icon.png'

export default function Header(){
    return(
        <header>
            <img src={logo} alt="logo" class="logo"/>
            <span>Chef Claude</span>
        </header>
    )
}