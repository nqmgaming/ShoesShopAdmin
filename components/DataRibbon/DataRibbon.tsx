import { Grid } from "@mui/material";
import DataCard from "../DataCard/DataCard";
import React, { useState, useEffect } from 'react';
import { UserModel } from "../../sources/mongoose/models";

const DataRibbon = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
      async function getTotalUsers() {
          try {
            const totalCount = await UserModel.find({}).count();
              setTotalUsers(totalCount);
          } catch (error) {
              console.error(error);
          }
      }
      getTotalUsers();
  }, []);

    return (
        <Grid container gap={2} 
        style={{
            textAlign:'center',
            display:'grid',
            gridTemplateColumns:'1fr 1fr 1fr 1fr'
        }}>
            <Grid style={{
                marginLeft:'4rem'
            }}>
                <DataCard
                    title={"Total User"}
                    value={totalUsers.toString()}
                    description={
                        "The totals of all users in the current database"
                    }
                />
            </Grid>
            <Grid>
                <DataCard
                    title={"Total Product"}
                    value={"$25,732.53"}
                    description={"The total sales of the current financial year"}
                />
            </Grid>
            <Grid>
                <DataCard
                    title={"Total Order"}
                    value={"$159.30"}
                    description={
                        "The average order value for all sales this current financial year"
                    }
                />
            </Grid>
            <Grid style={{
                marginRight:'4rem'
            }}>
                <DataCard
                    title={"Tổng doanh thu"}
                    value={"0.61%"}
                    description={"How many pitches become sales"}
                />
            </Grid>
        </Grid>
    );
};

export default DataRibbon;