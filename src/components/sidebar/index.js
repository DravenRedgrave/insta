import useUser from '../../hooks/use-user';
import User from './user';
import Suggestion from './suggestion';


export default function Sidebar(){

    const {
        user: {fullName,usernaem,userId}
    } = useUser();

    return <div className="p-4">
        <User username={usernaem} fullName={fullName}/>
        <Suggestion userId={userId}/>
    </div>
}