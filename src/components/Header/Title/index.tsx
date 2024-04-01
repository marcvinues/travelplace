import React, { useState, useEffect } from "react";
import { H1, SearchInput, SearchContainer, SearchButton } from "./styled";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  const [showSearch, setShowSearch] = useState(false);

  // Manejar el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSearch(true);
      } else {
        setShowSearch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const placeholderText = "Search your next destination";
  const searchBtnText = "Search";

  const searchTrip = () => {};

  return (
    <>
      {showSearch ? (
        <SearchContainer>
          <SearchInput type="search" placeholder={placeholderText} />
          <SearchButton onClick={searchTrip}>{searchBtnText}</SearchButton>
        </SearchContainer>
      ) : (
        <H1>{title}</H1>
      )}
    </>
  );
};
