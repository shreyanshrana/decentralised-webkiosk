import React, { useState, useContext } from "react";
import { Grid } from "semantic-ui-react";
import { KioskTable } from "../../Components/KioskTable/KioskTable";
import { StudentContext } from "../../context/StudentContext";

let SGPADB = [];
const CGPA = () => {
  const [session] = useState("2021ODDSEM");
  const { student } = useContext(StudentContext);
  SGPADB = [];
  Object.entries(student["SGPA"]).map((SGPA) => {
    SGPADB.push([SGPA[0], SGPA[1], student["CGPA"]]);
  });
  SGPADB.sort();
  console.log(SGPADB);
  return (
    <React.Fragment>
      <Grid style={{ height: "94%" }}>
        <Grid.Row
          style={{
            height: "10%",
            textAlign: "center",
          }}
        >
          <h1 style={{ width: "100%" }} className="perfectly-center">
            Current Session : {session}
          </h1>
        </Grid.Row>
        <Grid.Row style={{ height: "85%" }}>
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="12">
            <KioskTable
              tableTitle="Overall CGPA/SGPA"
              tableColWidth={[8, 4, 4]}
              tableHead={["Academic Session", "SGPA Earned", "Overall CGPA"]}
              tableData={SGPADB}
              tableButton="Download as PDF"
            />
          </Grid.Column>
          <Grid.Column width="2"></Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default CGPA;
