import './Profile.scss';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Profile = () => {
    return (
        <>
        <div className="ebkStore-profileWrapperCnt-cnt">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/book">
                Home
                </Link>
                <Link
                underline="hover"
                color="inherit"
                >
                profile
                </Link>
            </Breadcrumbs>
        </div>
        </>
    )
}

export default Profile;