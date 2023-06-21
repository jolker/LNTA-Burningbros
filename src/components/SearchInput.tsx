import _ from "lodash";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useRef, useState} from 'react';
import APIs from "../apis";
import { useAppDispatch } from "../app/hooks";
import { setData } from "../reducer/product";

function SearchInput() {
  const inputRef = useRef(null);
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const getData = async (search: any) => {
    return APIs.searchProducts({ search });
  };

  function handleClick() {
    getData(search).then((res) => {
      let clone = _.cloneDeep(res)
      dispatch(setData(clone));
    })
  }

  return (
    <>
      <div className="flex items-center">
        <TextField ref={inputRef} value={search} onChange={handleChange} id="outlined-basic" label="Search" variant="outlined" />
        <div className="ml-5">
          <Button variant="contained" onClick={handleClick}>Search</Button>
        </div>
      </div>
    </>
  );
}

export default SearchInput;
