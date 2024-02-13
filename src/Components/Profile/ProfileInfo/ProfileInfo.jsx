import React from "react";
import obj from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <div className={obj.cap}></div>
            </div>
            <div className={obj.descriptionBlock}> {/*className={`${obj.mainClass} ${obj.secondClass}`}*//*приклад для двох і більше класів*/}
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;
