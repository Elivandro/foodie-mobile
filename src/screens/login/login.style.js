import { COLORS, FONT_SIZE } from "../../constants/themes"

export const styles = {
    container: {
        width: "100%",
        paddingTop: 10,
        paddingLeft: 40,
        paddingRight: 40,
        flex: 1,
        backgroundColor: COLORS.white
    },
    formGroup: {
        width: "100%",
        marginTop: 50,
        marginBottom: 40
    },
    form: {
        width: "100%",
        marginBottom: 20
    },
    inputIcon: {
        padding: 12,
        position: "absolute",
        bottom: 0,
        right: 0
    },
    footer: {
        padding: 40,
        width: "100%",
        position: "absolute",
        bottom: 0
    },
    footerText: {
        textAlign: "center",
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.lg
    }
}