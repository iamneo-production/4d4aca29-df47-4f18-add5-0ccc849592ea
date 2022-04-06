import { makeStyles } from '@material-ui/styles';
export default makeStyles(() => ({
    root:{
        maxWidth: '100%',
        maxHeight: '100%',
    },
    media: {
        height: 19,
        paddingTop: '56.25%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    backGround: {
        backgroundColor: '#D8D8D8',
    },
    style: {
        border: '3px solid pink',
        paddingTop: '30px',
        paddingRight: '30px',
        paddingBottom: '30px',
        paddingLeft: '30px',
    },
}));