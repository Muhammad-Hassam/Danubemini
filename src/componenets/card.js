import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default function Cards(params) {


    return (
        <Content>
            <Card style={{ flex: 1 }}>
                <CardItem>
                    <Body>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0MrkO2K1Hm4qdfTbovWktInYtTzT3hdlCXrDi7hTKkzJFfrk_CiDQrNuT7imn0WwHas&usqp=CAU' }} style={{ height: 100, width: 100 }} />
                        <Text style={{ color: '#606060', marginTop: 5 }}>
                            PKR 200
                        </Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Text>Banana{'\n'}</Text>
                    <Text style={{ marginTop: 5 }}>Banana 1 kg</Text>
                </CardItem>
                <CardItem>
                </CardItem>
            </Card>
        </Content>
    );
}