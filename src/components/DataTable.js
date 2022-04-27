import {DataGrid} from "@material-ui/data-grid";
import {useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import {Tooltip} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {createStyles, makeStyles} from "@material-ui/core/styles";

const ROWS = [
    {
        id:1,
        seq:1,
        name:"jhon",
        address:"street no 45",
        city:"LA",
        state:"NYK"
    },
    {
        id:2,
        seq:2,
        name:"jhon",
        address:"street no 45",
        city:"LA",
        state:"NYK"
    },
    {
        id:3,
        seq:3,
        name:"jhon",
        address:"street no 45",
        city:"LA",
        state:"NYK"
    },
    {
        id:4,
        seq:4,
        name:"jhon",
        address:"street no 45",
        city:"LA",
        state:"NYK"
    },
]

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            margin: theme.spacing(3,0),
            cursor: "pointer",
            height: "inherit"
        }
    })
);

const DataTable = () => {
    const [records,setRecords] = useState(ROWS)
    const classes = useStyles();
    const gridValueGetter = (params) => {
        return `${params.row?.[params.field] ?? ""}`;
    };
    const COLUMNS = [
        { field: "seq", headerName: "Seq", flex: 0.5 },
        {
            field: "name",
            headerName: "Name",
            flex: 0.75,
            valueGetter: gridValueGetter,
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1,
            valueGetter: gridValueGetter,
        },
        {
            field: "city",
            headerName: "City",
            flex: 0.75,
            valueGetter: gridValueGetter,
        },
        {
            field: "state",
            headerName: "State",
            flex: 1,
            valueGetter: gridValueGetter,
        },
        {
            field: "action",
            headerName: "Action",
            flex: 0.7,
            sortable: false,
            renderCell: (params) => (
                <Grid item xs>
                    <Tooltip title="Assign">
                        <IconButton
                            onClick={() => console.log("on click assigned")}
                            disabled={false}
                        >
                            <AssignmentIndIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
            ),
        },
    ];

    return(
        <Paper className={classes.root} elevation={0}>
            <DataGrid
                disableColumnMenu
                disableSelectionOnClick
                columns={COLUMNS}
                rows={records}
                pageSize={25}
                rowsPerPageOptions={[25, 50, 75]}
                columnBuffer={8}
            />
        </Paper>
    )
}
export default DataTable;