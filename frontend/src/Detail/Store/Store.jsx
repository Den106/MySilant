import { configureStore } from '@reduxjs/toolkit';
import AuthAPI from '../../API/AuthAPI';
import MachineAPI from '../../API/MachineAPI';
import UserInfoAPI from '../../API/UserInfoAPI';
import MaintenanceAPI from '../../API/MaintenanceAPI';
import ComplaintsAPI from '../../API/ComplaintsAPI';
import DetailedAPI from '../../API/DetailedAPI';
import GuideAPI from '../../API/GuideAPI';

export default configureStore({
    reducer: {
        login: AuthAPI,
        machine: MachineAPI,
        maintenance: MaintenanceAPI,
        complaints: ComplaintsAPI,
        user: UserInfoAPI,
        detailed: DetailedAPI,
        guide: GuideAPI
    }
})