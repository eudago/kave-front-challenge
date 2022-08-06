import { Flex } from "@components/Flex";
import { styled } from "stitches.config";
import FavoriteIcon from "./FavoriteIcon";
import KaveLogo from "./KaveLogo";

const HeaderStyled = styled('header', {
    padding: '$3',
    borderBottom: '0.25px solid #9B9B9B',
})

export default function Header() {
    return (
        <HeaderStyled>
            <Flex align="center" justify="between">
                <KaveLogo />
                <FavoriteIcon />
            </Flex>
        </HeaderStyled>
    );
}