import { styled } from "stitches.config";
import { Flex } from "@components/Flex";

const SubHeaderStyled = styled('div', {
    width: '100%',
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.487449) 90.3%), url(./images/home-image.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    '@M': {
        height: '50vh',
    },
    '@D': {
        height: '80vh',
    },
});

interface SubHeaderProps {
    children?: React.ReactNode;
}

export default function SubHeader({ children }: SubHeaderProps) {

  return (
    <SubHeaderStyled>
        {!!children && <Flex direction="column" justify="end" css={{
            height: '100%',
            '@M': {
                padding: '1rem',
            },
            '@D': {
                padding: '2rem',
            },
        }}>
            {children}
        </Flex>}
    </SubHeaderStyled>
  );
}