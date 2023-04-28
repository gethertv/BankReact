import React from "react";
import {BankDesc, BankTitle, BannerBar, BannerContainer, BannerSVG, BannerText, ReadMoreBtn} from "./BannerElements";

const Banner = () => {
    return(
        <BannerBar>
            <BannerContainer>
                <BannerText>
                    <BankTitle>
                        Nowoczesny bank online!
                    </BankTitle>
                    <BankDesc>
                        Zobacz naszą najnowszą oferte przygotowaną dla Was ;)
                        Ut ac fermentum elit. Vivamus vel risus at erat rhoncus mattis vehicula vel arcu.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed bibendum, est imperdiet elementum faucibus, nisi massa pharetra magna,
                        lacinia mollis nisi elit id eros. Nunc eleifend mattis nisl,
                        ut pharetra purus porttitor ac. Donec vitae sodales sapien.
                        Vestibulum convallis at elit sit amet lobortis. Vestibulum in commodo sapien.
                        Aliquam lobortis in orci vitae malesuada. Duis sagittis orci ac dolor mollis pulvinar.
                        Nam in pretium dui, eu luctus felis.
                        Fusce vestibulum libero pretium ipsum ultrices condimentum.
                        Nullam feugiat magna erat, id tincidunt nisi viverra quis.
                    </BankDesc>
                    <ReadMoreBtn>
                        Więcej...
                    </ReadMoreBtn>

                </BannerText>
                <BannerSVG />
            </BannerContainer>
        </BannerBar>

    );
}

export default Banner;