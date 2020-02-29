import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../action";
import * as utils from "../utils";
import { NMavennet } from "../interfaces";
import Albums from "./Albums";
import axios from "axios";

const getCtf = (args = {}) =>
  axios.post("https://infoservice.sunwingtravelgroup.com/Contentful", {
    ...{
      lang: ["fr"],
      spaceid: "29g60q8itimi",
      contenttype: ["airport"],
      fieldstoretrieve: ["airportCode", "airportCountryref.countryName"],
      multivalueconditions: [{
        "airportCode.keyword": ["YYZ", "CUN"]
      }]
    },
    args
  }).then(response => response.data);
/*
  async fetch request is handled by Redux-Saga
 */
const Users: React.FunctionComponent = () => {
  const dispatch = useDispatch(),
    userId: string = useSelector(utils.selectUserId),
    users: NMavennet.IUser[] = useSelector(utils.selectUsers);

  const [country, setCountry] = React.useState(null);

  React.useEffect(() => {
    dispatch(actions.fetchUsers(`${utils.requestUrl}/users`));

    (async () => {
      setCountry(
        (await getCtf()).items
          .reduce((acc: any, cur: any) => ({
            ...acc,
            [cur.airportCode]: cur.airportCountryref.countryName
          }), {})
      );
    })();


  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="pt-3">
        <h2>
          Users - albums - photos
        </h2>
        {
          country && <h2>{JSON.stringify(country)}</h2>
        }
        <div className="form-group">
          <select
            className="form-control"
            value={userId}
            onChange={(e: any) => {
              dispatch(actions.selectUserId(e.target.value));
              dispatch(actions.selectAlbum());
              dispatch(actions.setAlbums());
              dispatch(actions.setPhotos())
            }}
          >
            <option value="">Select a user to see his/her albums</option>
            {
              users.map((user: NMavennet.IUser) => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))
            }
          </select>
        </div>
      </div>
      {
        Boolean(userId) && <Albums />
      }
    </React.Fragment>
  );
}

export default Users;