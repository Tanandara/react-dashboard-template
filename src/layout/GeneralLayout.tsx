import React, { Component } from "react";
import { Card, CardBody, CardGroup, Col, Container, Row } from 'reactstrap';

export default function GeneralLayout(rest: any, props: any) {
    const { component } = rest;
    return (
        <Container>
            <Row>
                <Col md={12}>
                    {component()}
                </Col>
            </Row>
        </Container>
    );
}
