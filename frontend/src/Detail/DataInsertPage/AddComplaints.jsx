import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    ThemeProvider,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import * as React from "react";
import { theme } from "../../Theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import {
    MethodOfRepairData,
    TypeOfRefusalData,
    UsersData,
} from "../../API/GuideAPI";
import {
    AddComplaintsData,
    cleanStateAfterCreated,
} from "../../API/ComplaintsAPI";
import { MachineData } from "../../API/MachineAPI";
import { useNavigate } from "react-router-dom";

const AddComplaints = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formSubmit = (event) => {
        event.preventDefault();
        const body = JSON.stringify({
            machine: machine,
            dateOfRefusal: dateOfRefusal,
            operatingTime: operatingTime,
            nodeOfRefusal: nodeOfRefusal,
            descriptionOfRefusal: descriptionOfRefusal,
            repairMethod: repairMethod,
            usedSpareParts: usedSpareParts,
            dateOfRepair: dateOfRepair,
            serviceCompany: serviceCompany,
        });
        dispatch(AddComplaintsData(body));
    };

    const [machine, setMachine] = React.useState();
    const [dateOfRefusal, setDateOfRefusal] = React.useState();
    const [operatingTime, setOperatingTime] = React.useState();
    const [nodeOfRefusal, setNodeOfRefusal] = React.useState();
    const [descriptionOfRefusal, setDescriptionOfRefusal] = React.useState();
    const [repairMethod, setRepairMethod] = React.useState();
    const [usedSpareParts, setUsedSpareParts] = React.useState();
    const [dateOfRepair, setDateOfRepair] = React.useState();
    const [serviceCompany, setServiceCompany] = React.useState();

    const guide = useSelector((state) => state.guide);
    const machines = useSelector((state) => state.machine);
    const created = useSelector((state) => state.complaints);

    React.useEffect(() => {
        if (!guide.typeofrefusal) {
            dispatch(TypeOfRefusalData());
        }
        if (!guide.methodofrepair) {
            dispatch(MethodOfRepairData());
        }

        if (!guide.users) {
            dispatch(UsersData());
        }

        if (!machines.data) {
            dispatch(MachineData(localStorage.getItem("accessToken")));
        }

        if (created.addcomplaints) {
            setTimeout(() => {
                dispatch(cleanStateAfterCreated());
                navigate("/");
            }, 2000);
        }
    }, [
        dispatch,
        machines.data,
        guide.typeofrefusal,
        guide.methodofrepair,
        guide.users,
        navigate,
        created,
    ]);

    const machinesMap = machines.data
        ? machines.data.map((item) => item.factoryNumberOfMachine)
        : [];

    const settedMachines = [...new Set(machinesMap)];
    if (
        !machines.data &&
        !guide.typeofrefusal &&
        !guide.methodofrepair
    ) {
        return "Загрузка";
    }
    return (
        <div>
            <form 
                style={{display: "flex", flexDirection: "column"}}
                onSubmit={formSubmit}
            >
                <FormControl style={{margin: "10px 0", width: "100%"}}
                    required
                >
                    <InputLabel>Выберите Технику</InputLabel>
                    <Select
                        value={machine || ""}
                        label="Выберите Технику"
                        onChange={(e) => setMachine(e.target.value)}
                    >
                        {settedMachines &&
                            settedMachines.map((item, idx) => (
                                <MenuItem key={idx} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <FormControl styles={{margin: "10px 0", width: "100%"}}
                    required
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                                value={dateOfRefusal || ""}
                                label="Дата отказа"
                                format="YYYY-MM-DD"
                                views={["year", "month", "day"]}
                                onChange={(value) => {
                                    const formattedDate = new Date(value);
                                    const date =
                                        formattedDate.getDate().toString()
                                            .length > 1
                                            ? formattedDate.getDate().toString()
                                            : `0${formattedDate.getDate()}`;
                                    const month =
                                        (
                                            formattedDate.getMonth() + 1
                                        ).toString().length > 1
                                            ? formattedDate.getMonth() + 1
                                            : `0${
                                                  formattedDate.getMonth() + 1
                                              }`;
                                    const year = formattedDate.getFullYear();
                                    setDateOfRefusal(
                                        year + "-" + month + "-" + date
                                    );
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </FormControl>

                <FormControl>
                    <TextField
                        required
                        label="Наработка, м/час"
                        onChange={(e) => setOperatingTime(e.target.value)}
                    />
                </FormControl>

                <FormControl styles={{margin: "10px 0", width: "100%"}}
                    required
                >
                    <InputLabel>Узел отказа</InputLabel>
                    <Select
                        value={nodeOfRefusal || ""}
                        label="Узел отказа"
                        onChange={(e) => setNodeOfRefusal(e.target.value)}
                    >
                        {guide.typeofrefusal &&
                            guide.typeofrefusal.map((item) => (
                                <MenuItem key={item.id} value={item.title}>
                                    {item.title}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <FormControl>
                    <TextField
                        required
                        label="Описание отказа"
                        onChange={(e) =>
                            setDescriptionOfRefusal(e.target.value)
                        }
                    />
                </FormControl>

                <FormControl styles={{margin: "10px 0", width: "100%"}}
                    required
                >
                    <InputLabel>Способ восстановления</InputLabel>
                    <Select
                        value={repairMethod || ""}
                        label="Способ восстановления"
                        onChange={(e) => setRepairMethod(e.target.value)}
                    >
                        {guide.methodofrepair &&
                            guide.methodofrepair.map((item) => (
                                <MenuItem key={item.id} value={item.title}>
                                    {item.title}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <FormControl>
                    <TextField
                        label="Используемые запасные части"
                        onChange={(e) => setUsedSpareParts(e.target.value)}
                    />
                </FormControl>

                <FormControl styles={{margin: "10px 0", width: "100%"}}
                    required
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                                value={dateOfRepair || ""}
                                label="Дата восстановления"
                                format="YYYY-MM-DD"
                                views={["year", "month", "day"]}
                                onChange={(value) => {
                                    const formattedDate = new Date(value);
                                    const date =
                                        formattedDate.getDate().toString()
                                            .length > 1
                                            ? formattedDate.getDate().toString()
                                            : `0${formattedDate.getDate()}`;
                                    const month =
                                        (
                                            formattedDate.getMonth() + 1
                                        ).toString().length > 1
                                            ? formattedDate.getMonth() + 1
                                            : `0${
                                                  formattedDate.getMonth() + 1
                                              }`;
                                    const year = formattedDate.getFullYear();
                                    setDateOfRepair(
                                        year + "-" + month + "-" + date
                                    );
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </FormControl>

                <FormControl styles={{margin: "10px 0", width: "100%"}}
                    required
                >
                    <InputLabel>Сервисная компания</InputLabel>
                    <Select
                        value={serviceCompany || ""}
                        label="Сервисная компания"
                        onChange={(e) => setServiceCompany(e.target.value)}
                    >
                        {guide.users &&
                            guide.users.map((item) => (
                                <MenuItem key={item.id} value={item.first_name}>
                                    {item.first_name}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <ThemeProvider theme={theme}>
                    <Button type="submit">Добавить</Button>
                </ThemeProvider>
            </form>
        </div>
    );
};

export { AddComplaints };
