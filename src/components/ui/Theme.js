import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"

export default createMuiTheme({
    palette: {
        common: {
            arcBlue: `${arcBlue}`,
            arcOrange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`,
        },

        
        typography:{
            // these are custom changes for my typography styles
            h3:{
                fontWeight: '3000',
            },
            tab:{
                fontWeight: '700',
                fontSize: "1rem",
                textTransform: "none",
            }
           
        }
    }
});