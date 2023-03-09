import { Button } from "@mui/material";
import Link from "next/link";

export default () => {
  return (
    <>
      <div className="cat-ctr-btns card">
        <div>
          <h4>ADD CATEGORY</h4>
          <p>Home </p>
        </div>
        <div>
          <Link href="/newcategory">
            <Button variant="contained" color="primary">
              Add Category
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
