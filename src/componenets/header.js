import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Item, Input, Picker, Form, Content } from 'native-base';
export default function Head() {
    return (
        <>
            <Header style={{ backgroundColor: '#79af44' }}>
                <Left style={{ margin: 0 }}>
                    <Title style={styles.headingsize}>Danube</Title>
                </Left>
                <Body>
                    <Content>
                        <Form>
                            <Picker
                                mode="dropdown"
                                placeholder="Mall"
                                placeholderStyle={{ color: "#fff", marginTop: 18, paddingBottom: 10 }}
                                note={true}
                            >
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </Form>
                    </Content>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='notifications' style={styles.textclr} />
                    </Button>
                    <Button transparent>
                        <Icon name='cart' style={styles.textclr} />
                    </Button>
                </Right>
            </Header>
            <Header searchBar style={{ backgroundColor: '#79af44', margin: 0 }}>
                <Item style={{ margin: 0, backgroundColor: '#fff', borderRadius: 5 }}>
                    <Icon name="ios-search" style={{ color: '#79af44' }} />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Icon name="ios-search" style={{ color: '#fff' }} />
                </Button>
            </Header>
        </>
    );
}
const styles = StyleSheet.create({
    headerclr: {
        backgroundColor: '#79af44',
    },
    textclr: {
        color: '#fff'
    },
    headingsize: {
        color: '#fff',
        fontSize: 25,
    }
})
