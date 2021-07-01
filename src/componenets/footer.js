import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
export default function Foot() {

    return (
        <Container>
            <Content />
            <Footer style={styles.headerclr}>
                <FooterTab activetabColor='green'>
                    <Button vertical active>
                        <Icon name="apps" />
                    </Button>
                    <Button vertical >
                        <Icon name="camera" />
                    </Button>
                    <Button vertical  >
                        <Icon name="navigate" />
                    </Button>
                    <Button vertical >
                        <Icon name="person" />
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
}
const styles = StyleSheet.create({

})