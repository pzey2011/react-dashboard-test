import React,{useState} from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { Sidebar } from '../Components/Sidebar/Sidebar';
import '../Assets/Styles/Views/App.css';
import HeaderContainer from '../Components/HeaderContainer/HeaderContainer';
interface PropsType {
    lang: string
}
function App(props:PropsType) {
    const [collapsed,toggle] = useState(false);
    const toggleCollapse = ()=>{
        toggle(!collapsed)
    }
    

  return (
            <HeaderContainer collapsed={collapsed} lang={props.lang}>

                <Navbar toggleCollapse={toggleCollapse}/>
                <Sidebar />

            </HeaderContainer>
  );
}



export default App;