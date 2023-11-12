import * as React from "react";
import { CustomContainer } from "./../CustomContainer";
import { MainPageTable } from "./MainPageTable/MainPageTable";
import styles from "../../styles/MainPage.module.css";
import { useSelector } from "react-redux";

const Authorized = () => {

    const user = useSelector((state) => state.user)
    return (
        <CustomContainer >
            <h2 className={styles.text}>{user.success ? user.data[0].character  : 'Загрузка...'} : {user.success ? user.data[0].first_name  : 'Загрузка...'} </h2>
            <h3 className={styles.text}>Информация о комплектации и технических характеристиках Вашей техники</h3>
            <MainPageTable />
        </CustomContainer>
    );
};

export { Authorized };
