import * as React from "react";
import styles from "../styles/Header.module.css";
import { CustomContainer } from "./CustomContainer";
import {
    Button,
    IconButton,
    ThemeProvider,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { theme } from "../Theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import { UserData } from "../API/UserInfoAPI";
import { logout } from "../API/AuthAPI";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const queryTheme = useTheme();
    const query_md = useMediaQuery(queryTheme.breakpoints.down("md"));
    const userInfo = useSelector((state) => state.user);
    const logged = useSelector((state) => state.login);
    const [menuOpen, setMenuOpen] = React.useState("none");
    
    React.useEffect(() => {
        if (logged.is_Auth || localStorage.getItem("accessToken")) {
            dispatch(UserData(localStorage.getItem("accessToken")));
        }
        if (!userInfo.success && localStorage.getItem("is_Authenticated")) {
            dispatch(logout());
            navigate("/");
        }
    }, [dispatch, userInfo.success, logged, navigate]);

    const Menu = (
        <div className={styles.menu}
            style={{
                display: menuOpen,
               
            }}
        >
            <IconButton className={styles.sx}
                onClick={() => {
                    setMenuOpen("none");
                }}
            >
                <CloseIcon fontSize="large" />
            </IconButton>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <a href="/">
                        <img
                            className={styles.logoimg}
                            src="http://127.0.0.1:8000/static/images/logo.svg"
                            alt="Logo"
                        />
                    </a>
                </div>

                {localStorage.getItem("Authenticated") &&
                userInfo.status !== "BAD" ? (
                    <div className={styles.auth}>


                        <ThemeProvider theme={theme}>
                            <Button
                                onClick={() => {
                                    setMenuOpen("none");
                                    navigate("/logout");
                                }}
                                >
                                Выйти
                            </Button>
                        </ThemeProvider>
                    </div>
                ) : (
                    <div className={styles.auth}>
                        <ThemeProvider theme={theme}>
                            <Button
                                onClick={() => {
                                    setMenuOpen("none");
                                    dispatch(logout());
                                    navigate("/login");
                                }}
                            >
                                Авторизация
                            </Button>
                        </ThemeProvider>
                    </div>
                )}
                <div className={styles.dis}>
                    <p className={styles.tele}><a className={styles.info}
                           href="tel:+7-8352-20-12-00">+7-8352-20-12-00</a>
                    <a href="https://t.me/chzsa21">
                        <img
                            className={styles.telegram}
                            src="http://127.0.0.1:8000/static/images/telegram.svg"
                            alt="Logo"
                        />
                    </a>
                    </p>
                    <p>Электронная сервисная книжка "Мой Силант"</p>
                </div>
            </div>
        </div>
    );

    return (
        <CustomContainer className={styles.cuscont}>
            {Menu}
            <div className={styles.unauth}>
                <IconButton
                    sx={{ display: query_md ? "inline-flex" : "none" }}
                    onClick={() => {
                        setMenuOpen("flex");
                    }}
                >
                    <MenuIcon fontSize="large" />
                </IconButton>
                <div
                    style={{
                        width: query_md ? "100%" : "auto",
                        textAlign: "center",
                    }}
                >
                    <a href="/">
                        <img
                            src="http://127.0.0.1:8000/static/images/logo.svg"
                            alt="Logo"
                            style={{ width: query_md ? "150px" : "300px" }}
                        />
                    </a>
                </div>
                <div style={{ display: query_md ? "none" : "block",
                    color: "var(--main_color)", justifyContent: "center"}}>
                    <p className={styles.tele}><a className={styles.info}
                        href="tel:+7-8352-20-12-00">+7-8352-20-12-00</a>
                    <a href="https://t.me/chzsa21">
                        <img
                            className={styles.telegram}
                            src="http://127.0.0.1:8000/static/images/telegram.svg"
                            alt="Logo"
                        />
                    </a>
                    </p>
                    <p><h1>Электронная сервисная книжка "Мой Силант"</h1></p>
                </div>
                {localStorage.getItem("Authenticated") &&
                userInfo.status !== "BAD" ? (
                    <div
                        style={{
                            columnGap: "20px",
                            alignItems: "center",
                            display: query_md ? "none" : "flex",
                            width: query_md ? "150px" : "300px"
                        }}
                    >
                        <ThemeProvider theme={theme}>
                            <Button
                                onClick={() => {
                                    navigate("/logout");
                                }}
                            >
                                Выйти
                            </Button>
                        </ThemeProvider>
                    </div>
                ) : (
                    <div style={{ width: query_md ? "150px" : "300px"}}>
                        <ThemeProvider theme={theme} >
                            <Button 
                                onClick={() => {
                                    dispatch(logout());
                                    navigate("/login");
                                }}
                            >
                                Авторизация
                            </Button>
                        </ThemeProvider>
                    </div>
                )}
            </div>
        </CustomContainer>
    );
};

export { Header };
