import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    MachineListData,
    EngineData,
    MainAxleData,
    MethodOfRepairData,
    SteeringAxleData,
    TransmissionData,
    TypeOfRefusalData,
    TypeOfMaintenanceData,
    UsersData,
} from "../API/GuideAPI";
import { CustomContainer } from "./CustomContainer";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "../Theme/Theme";

const Guide = () => {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const key = Object.keys(params)[0];
    const id = Object.values(params)[0];
    const guide = useSelector((state) => state.guide);

    const user = useSelector((state) => state.user);

    React.useEffect(() => {
        if (key === "machinelist") {
            dispatch(MachineListData(id));
        }

        if (key === "engine") {
            dispatch(EngineData(id));
        }

        if (key === "transmission") {
            dispatch(TransmissionData(id));
        }

        if (key === "mainaxle") {
            dispatch(MainAxleData(id));
        }

        if (key === "steeringaxle") {
            dispatch(SteeringAxleData(id));
        }

        if (key === "maintenance") {
            dispatch(TypeOfMaintenanceData(id));
        }

        if (key === "nodeofrefusal") {
            dispatch(TypeOfRefusalData(id));
        }

        if (key === "repairmethod") {
            dispatch(MethodOfRepairData(id));
        }

        if (key === "servicecompany" || key === "client") {
            dispatch(UsersData(id));
        }
    }, [key, dispatch, id, user, navigate]);

    return (
        <CustomContainer style={{ textAlign: "center" }}>
            { guide.success && key === "machinelist" ? (
                    <>
                        <h1>{guide.machinelist.title}</h1>
                        <h3>{guide.machinelist.description}</h3>
                    </>
            )
              :  guide.success && key === "engine" ? (
                <>
                    <h1>{guide.engine.title}</h1>
                    <h3>{guide.engine.description}</h3>
                </>
            ) : guide.success && key === "transmission" ? (
                <>
                    <h1>{guide.transmission.title}</h1>
                    <h3>{guide.transmission.description}</h3>
                </>
            ) : guide.success && key === "mainaxle" ? (
                <>
                    <h1>{guide.mainaxle.title}</h1>
                    <h3>{guide.mainaxle.description}</h3>
                </>
            ) : guide.success && key === "steeringaxle" ? (
                <>
                    <h1>{guide.steeringaxle.title}</h1>
                    <h3>{guide.steeringaxle.description}</h3>
                </>
            ) : guide.success && key === "maintenance" ? (
                <>
                    <h1>{guide.typeofmaintenance.title}</h1>
                    <h3>{guide.typeofmaintenance.description}</h3>
                </>
            ) : guide.success && key === "nodeofrefusal" ? (
                <>
                    <h1>{guide.typeofrefusal.title}</h1>
                    <h3>{guide.typeofrefusal.description}</h3>
                </>
            ) : guide.success && key === "repairmethod" ? (
                <>
                    <h1>{guide.methodofrepair.title}</h1>
                    <h3>{guide.methodofrepair.description}</h3>
                </>
            ) : guide.success &&
              (key === "servicecompany" || key === "client") ? (
                <>
                    <h1>{guide.users.username}</h1>
                    <h3>{guide.users.character}</h3>
                </>
            ) : (
                <></>
            )}
            <ThemeProvider theme={theme}>
                <Button
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Назад
                </Button>
            </ThemeProvider>
        </CustomContainer>
    );
};

export { Guide };
