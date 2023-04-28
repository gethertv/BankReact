import React from "react";
import {Product, ProductDesc, ProductImg, ServiceBar, ServiceBox, ServiceContainer} from "./ServiceElements";
import FirstService from './../img/banner.svg';
const Service = () => {
    return (
        <ServiceBar>
            <ServiceContainer>
                <ServiceBox>
                    <Product>
                        <ProductImg src={FirstService} />
                        <ProductDesc>
                            Przykladowy text
                        </ProductDesc>
                    </Product>
                    <Product>
                        <ProductImg src={FirstService} />
                        <ProductDesc>
                            Przykladowy text
                        </ProductDesc>
                    </Product>
                    <Product>
                        <ProductImg src={FirstService} />
                        <ProductDesc>
                            Przykladowy text
                        </ProductDesc>
                    </Product>
                </ServiceBox>
            </ServiceContainer>
        </ServiceBar>
    );
}

export default Service;