import React, { Component } from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";

export default function DashboardLayout(rest: any, props: any) {
    const { component } = rest;
    return (
        <div>
            <Header />
            <Menu />
            <div className='content'>
                {component()}
            </div>
        </div>
    );
}
