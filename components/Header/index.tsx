import FavoriteButton from "@components/FavoriteButton";
import { Flex } from "@components/Flex";
import { FavoritesContext } from "@lib/providers/favorites";
import Link from "next/link";
import { useContext } from "react";
import { styled } from "stitches.config";
import KaveLogo from "./KaveLogo";

const LogoContainer = styled("div", {
    cursor: "pointer",
});

const HeaderStyled = styled('header', {
    padding: '$3',
    borderBottom: '0.25px solid #9B9B9B',
    maxHeight: '$header',
})

export default function Header() {
    const {favorites} = useContext(FavoritesContext);

    return (
        <HeaderStyled>
            <Flex align="center" justify="between">
                <Link href="/">
                    <LogoContainer>
                        <KaveLogo />  
                    </LogoContainer>              
                </Link>
                <Link href="/favorites">
                    <div>
                        <FavoriteButton favorite={favorites > 0} />
                    </div>
                </Link>
            </Flex>
        </HeaderStyled>
    );
}