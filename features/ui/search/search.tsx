import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import * as S from "./search.style";
import { ArticleSearchResults } from "./article-search-results";
import { ThemeContext } from "../theme-provider";
type ModalProps = {
  open: boolean;
  onClose: () => void;
};

export function Search({ open, onClose }: ModalProps) {
  const { mode } = useContext(ThemeContext);

  const [queryText, setQueryText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getSearchResults = async () => {
      if (!queryText) {
        setSearchResults([]);
        return false;
      }

      const { data } = await axios.get(
        "https://post-to.vercel.app/api/search",
        {
          params: { query: queryText },
        }
      );

      setSearchResults(data);
    };
    getSearchResults();
  }, [queryText]);

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        style={{
          backdropFilter: "blur(8px)",
        }}
      >
        <S.SearchBox mode={mode}>
          <S.Wrapper>
            <S.Input
              type="text"
              onChange={(e: any) => setQueryText(e.target.value)}
              value={queryText}
              style={{ color: mode === "dark" ? "white" : "#000" }}
            />
          </S.Wrapper>
          <ArticleSearchResults searchResults={searchResults} />
        </S.SearchBox>
      </Modal>
    </>
  );
}
