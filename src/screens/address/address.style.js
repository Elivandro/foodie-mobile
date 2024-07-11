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
        gap: 8,
        width: "100%",
        marginBottom: 20,
    },
    formHorizontal: {
        gap: 8,
        width: "100",
        marginBottom: 20,
        flexDirection: "row",
    },
    onePart: {
        flex: 1,
    },
    twoParts: {
        flex: 2,
    },
    threeParts: {
        flex: 3,
    },
    fiveParts: {
        flex: 5,
    },
    // sixParts: {
    //     flex: 6,
    // }
}