import { Box, Button, TextField } from "@mui/material";
import usePhoneBookStore from "../store/usePhonebook";
import styled from "@emotion/styled";
import { useState } from "react";

const SearchInput = styled(TextField)({
  borderBottom: "1px solid black",
  height: 40,
  textAlign: "right",
  "& fieldset": {
    border: "none",
  },
});

const ContactList = () => {
  const { phoneBook, deleteContact } = usePhoneBookStore();
  const [keyword, setKeyword] = useState("");

  const handleDeleteContact = (id) => {
    deleteContact(id);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <SearchInput
        placeholder="이름 또는 번호를 입력하세요."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {!keyword.trim()
        ? phoneBook.map(({ name, phoneNumber, id }) => (
            <Box display="flex" key={id} alignItems="center" gap={3}>
              <p>{name}</p>
              <p>{phoneNumber}</p>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDeleteContact(id)}
                sx={{ height: 30 }}
              >
                삭제
              </Button>
            </Box>
          ))
        : phoneBook
            .filter(
              (item) =>
                item.name.includes(keyword) ||
                item.phoneNumber.includes(keyword)
            )
            .map(({ name, phoneNumber, id }) => (
              <Box display="flex" key={id} alignItems="center" gap={3}>
                <p>{name}</p>
                <p>{phoneNumber}</p>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteContact(id)}
                  sx={{ height: 30 }}
                >
                  삭제
                </Button>
              </Box>
            ))}
    </Box>
  );
};

export default ContactList;
