import React from "react";
import { CustomContainer } from "./CustomContainer";
import styles from "../styles/Login.module.css";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "../Theme/Theme";
import { useDispatch } from "react-redux";
import { logout } from "../API/AuthAPI";
import { useNavigate } from "react-router-dom";
import { complaintsClear } from "../API/ComplaintsAPI";
import { detailedClear } from "../API/DetailedAPI";
import { guideClear } from "../API/GuideAPI";
import { machineClear } from "../API/MachineAPI";
import { maintenanceClear } from "../API/MaintenanceAPI";
import { userInfoClear } from "../API/UserInfoAPI";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <CustomContainer>
            <div className={styles.logout}>
                <h3>Вы Уверены, что хотите выйти ?</h3>
                <ThemeProvider theme={theme}>
                    <Button
                        onClick={() => {
                            dispatch(logout());
                            dispatch(complaintsClear());
                            dispatch(detailedClear());
                            dispatch(guideClear());
                            dispatch(machineClear());
                            dispatch(maintenanceClear());
                            dispatch(userInfoClear());
                            navigate("/");
                        }}
                    >
                        Выйти
                    </Button>
                </ThemeProvider>
            </div>
        </CustomContainer>
    );
};

export { Logout };
