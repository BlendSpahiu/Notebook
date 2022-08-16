import { Button, TextField } from "@mui/material";
import {
  ChangeEvent,
  MouseEvent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";

export const NotesHeader = (): ReactElement => {
  // local state
  const [searchResult, setSearchResult] = useState<string>("");

  // hooks
  const navigate = useNavigate();
  const { search } = useLocation();

  // query string
  const queryParams = qs.parse(search);

  // handlers
  const handleSetSearch = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchResult(value);
  };
  const handleSearch = () =>
    navigate({
      search: `${qs.stringify({
        ...queryParams,
        search: searchResult,
      })}`,
    });

  useEffect(() => {
    if (!searchResult)
      navigate({
        search: `${qs.stringify({
          ...queryParams,
          search: "",
        })}`,
      });
  }, [searchResult]);

  return (
    <div className="flex items-center space-x-4">
      <TextField
        onChange={handleSetSearch}
        label="Search notes..."
        id="search"
      />
      <Button type="button" onClick={handleSearch} variant="contained">
        Search
      </Button>
    </div>
  );
};
