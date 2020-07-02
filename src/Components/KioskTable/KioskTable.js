import React from "react";
import "./KioskTable.scss";
import { Grid } from "semantic-ui-react";

export const KioskTable = (props) => {
  return (
    <React.Fragment>
      <Grid className="KioskTable ">
        <div className="KioskTable__Title perfectly-center">
          <h3>{props.tableTitle}</h3>
        </div>
        <Grid.Row className="perfectly-center">
          {props.tableHead.map((elem, index) => {
            return (
              <Grid.Column
                width={props.tableColWidth[index]}
                className="KioskTable__Header"
              >
                {elem}
              </Grid.Column>
            );
          })}
        </Grid.Row>
        <hr className="KioskTable__hr" />
        {props.tableData.map((row) => {
          console.log(row);
          return (
            <Grid.Row className="perfectly-center">
              {row.map((elem, index) => {
                return (
                  <Grid.Column
                    width={props.tableColWidth[index]}
                    className="KioskTable__Data"
                  >
                    {elem}
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          );
        })}
      </Grid>
      {props.tableButton != undefined && props.tableButton.length > 0 ? (
        <div className="KioskTable__Button-Container">
          <button className="KioskTable__Button">{props.tableButton}</button>
        </div>
      ) : (
        <React.Fragment />
      )}
    </React.Fragment>
  );
};
