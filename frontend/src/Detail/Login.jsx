import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { CustomContainer } from "./CustomContainer";
import {  Input, Button, ThemeProvider } from "@mui/material";
import { theme } from "../Theme/Theme";
import { UserLogin } from "../API/AuthAPI";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = useSelector((state) => state.login);

    useEffect(() => {
        if (data.is_Auth || localStorage.getItem('Authenticated')) {
            navigate("/");
        }
    }, [navigate, data.is_Auth]);

    const submit = () => {
        const username_input = document.getElementById("username").value;
        const password_input = document.getElementById("password").value;
        dispatch(
            UserLogin({ username: username_input, password: password_input })
        );
    };

    return (
        <CustomContainer>
            <form className={styles.form}>
                <Input id="username" placeholder="Username" autoComplete="username" required />
                <Input
                autoComplete="current-password"
                    id="password"
                    type="password"
                    placeholder="password"
                    required
                    className={styles.input}
                />
                <ThemeProvider theme={theme}>
                    <Button className={styles.button}
                        onClick={() => {
                            submit();
                        }}
                    >
                        Войти
                    </Button>
                </ThemeProvider>
            </form>
        </CustomContainer>
    );
};

export { Login };
