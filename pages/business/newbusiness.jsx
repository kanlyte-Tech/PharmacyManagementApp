import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Paper from "@mui/material/Paper";

const NewBusiness = () => {
  return (
    <div className="bss-container">
      <div className="available-bss">
        <p>
          Welcome: <span>Ransdale</span>
        </p>
        <div className="bss-head">
          <h4>Your Businesses</h4>
        </div>
        <div className="bss-body">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="medium"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Location</TableCell>
                  <TableCell align="right">Owner</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Number</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Kanlyte
                  </TableCell>
                  <TableCell align="right">Lira</TableCell>
                  <TableCell align="right">Gaston</TableCell>
                  <TableCell align="right">gaston@gmail.com</TableCell>
                  <TableCell align="right">0787299525</TableCell>
                  <TableCell align="right">View Business</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className="new-bss">
        <h4>Add Your Business</h4>
        <div>
          <form>
            <div>
              <TextField
                label="business name"
                variant="outlined"
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                label="business location"
                variant="outlined"
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                label="business owner"
                variant="outlined"
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                label="owner email"
                variant="outlined"
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                label="owner tel"
                variant="outlined"
                fullWidth
                required
              />
            </div>
            <div>
              <Button variant="contained" fullWidth>
                Create
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewBusiness;
