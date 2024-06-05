import ChatList from "./chatList/ChatList"
import "./list.css"
import Userinfo from "./userinfo/Userinfo"
const List = () => {
    return(
        <div className = 'list'>
            <div className="list">
                <Userinfo/>
                <ChatList/>
            </div>

        </div>


    )
}

export default List