import styled from "@emotion/styled";
import { Box } from '@mui/material'

const HeaderStyled = styled.div`
  display: flex;
`;
const Header = () => {
    return (
        <HeaderStyled data-testid="header">
            <Box
                sx={{
                    fontSize: 24,
                    fontWeight: "bold"
                }}
            >Mel's Movie Podcast</Box>
        </HeaderStyled>
    );
};

export default Header;