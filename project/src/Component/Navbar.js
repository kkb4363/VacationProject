import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { BiBrightnessHalf } from "react-icons/bi";
import { isDarkAtom } from "../atom";

const Header = styled.div`
top:0;
background-color: #313131;
width:100%;
height:60px;
display:flex;
align-items:center;
justify-content:center;
font-size:30px;
font-weight:bold;
color:#bababa;
position:relative;
div{
    position:absolute;
    font-size:15px;
    right:0;
    margin-right:30px;
}
`

function Navbar(){
const setisDark = useSetRecoilState(isDarkAtom);

const onDarkBtn = () => {
    setisDark(prev => !prev);
}

return(
    <>
    <Header>My Todolist
        <BiBrightnessHalf style={{position:'absolute', right:0}} onClick={onDarkBtn}/>
    </Header>

    </> 
    )
    
}

export default Navbar;